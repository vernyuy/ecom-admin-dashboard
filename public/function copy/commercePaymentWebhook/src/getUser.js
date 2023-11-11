import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";
import { handler as createUserPayment } from './createUserPayment.js'


const GRAPHQL_ENDPOINT = process.env.API_COMMERCE_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";
const { Sha256 } = crypto;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);

	console.log(`EVENT: ${JSON.stringify(event)}`);
	console.log("User email: ", event.object.receipt_email);

	const query = /* GraphQL */ `
query LIST_USER {
    listUsers(filter: {email: {eq: "${event.object.receipt_email}" }}) {
    items {
        id
        sub
    }
    }
}
`;



	const endpoint = new URL(GRAPHQL_ENDPOINT);

	const signer = new SignatureV4({
		credentials: defaultProvider(),
		region: AWS_REGION,
		service: "appsync",
		sha256: Sha256,
	});

	const requestToBeSigned = new HttpRequest({
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			host: endpoint.host,
		},
		hostname: endpoint.host,
		body: JSON.stringify({ query }),
		path: endpoint.pathname,
	});

	const signed = await signer.sign(requestToBeSigned);
	const request = new Request(endpoint, signed);

	let statusCode = 200;
	let body;
	let response;

	try {
		console.log(" request 1 : ", "get user data");
		response = await fetch(request);
		console.log("RESPONSE : ", response);
		body = await response.json();
		console.log("Body : ", body.data.listUsers.items);
		if (body.errors) {
			console.log("Errors:  >>>>", body.errors);
			return (statusCode = 400);
		}else{
			const orderData = await getUserOrder(body.data.listUsers.items[0].id)
			const orderId = orderData.id
			const orderVersion = orderData.version
			console.log(orderId,">>>>>>>>", orderVersion)
			if(orderId !== null){
				console.log("Am in to create payment")
				const userPaymentPayload = {}
				userPaymentPayload['userId'] = body.data.listUsers.items[0].id
				userPaymentPayload['amount'] = event.object.amount_received
				userPaymentPayload['paymentStatus'] = true
				userPaymentPayload['paymentIntentId'] = event.object.id
				userPaymentPayload['orderId'] = orderId
			
				console.log(userPaymentPayload)
				let payResponse =  await createUserPayment(userPaymentPayload)
				console.log("Payment Response :", payResponse )
				if(payResponse === null){
				return null
				} else {
					const res = await updateOrderFn(orderId, orderVersion)
					console.log(res)
					return true
				}
			}
		}
	} catch (error) {
		console.log(error);
		statusCode = 500;
		body = {
			errors: [
				{
					message: error.message,
				},
			],
		};
	}

	return null;
};





async function getUserOrder(userId){
	const query = /* GraphQL */ `
	query LIST_ORDERS {
		listOrders(filter: {userID: {eq: "${userId}" }, orderStatus:{eq: ${false}}}) {
			items {
				id,
				_version
			}
		}
	}
	`;

const endpoint = new URL(GRAPHQL_ENDPOINT);

	const signer = new SignatureV4({
		credentials: defaultProvider(),
		region: AWS_REGION,
		service: "appsync",
		sha256: Sha256,
	});

	const requestToBeSigned = new HttpRequest({
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			host: endpoint.host,
		},
		hostname: endpoint.host,
		body: JSON.stringify({ query }),
		path: endpoint.pathname,
	});

	const signed = await signer.sign(requestToBeSigned);
	const request = new Request(endpoint, signed);

	let statusCode = 200;
	let body;
	let response;

	try {
		console.log(" request 2 : ", "Get user Order");
		response = await fetch(request);
		console.log("RESPONSE : ", response);
		body = await response.json();
		console.log("Body Orders: ", body.data.listOrders);
		console.log("Body Orders: ", body.data.listOrders.items);
		if (body.errors) {
			console.log("Errors:  >>>>", body.errors);
			// return (statusCode = 400);
		}else{
			console.log("Order id:", body.data.listOrders.items[0].id)
			return {id: (body.data.listOrders.items[0].id), version: (body.data.listOrders.items[0]._version)}
		}
	} catch (error) {
		console.log(error);
		statusCode = 500;
		body = {
			errors: [
				{
					message: error.message,
				},
			],
		};
		return null;
	}
}

async function updateOrderFn(orderId, _version) {
	console.log("updating order")
	const query = /* GraphQL */ `
	mutation UpdateOrder {
		updateOrder(input: {id: "${orderId}", orderStatus: ${true}, _version:${_version}}) {
			id
		}
	}
`;

	console.log(query)
const endpoint = new URL(GRAPHQL_ENDPOINT);

	const signer = new SignatureV4({
		credentials: defaultProvider(),
		region: AWS_REGION,
		service: "appsync",
		sha256: Sha256,
	});

	const requestToBeSigned = new HttpRequest({
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			host: endpoint.host,
		},
		hostname: endpoint.host,
		body: JSON.stringify({ query }),
		path: endpoint.pathname,
	});

	const signed = await signer.sign(requestToBeSigned);
	const request = new Request(endpoint, signed);

	let statusCode = 200;
	let body;
	let response;

	try {
		console.log(" request 3 : ", "Update payed order");
		response = await fetch(request);
		console.log("RESPONSE : ", response);
		body = await response.json();
		console.log("Updated Order: ", body.data);
		if (body.errors) {
			console.log("Errors:  >>>>", body.errors);
			// return (statusCode = 400);
		}else{
			return (body.data)
		}
	} catch (error) {
		console.log(error);
		statusCode = 500;
		body = {
			errors: [
				{
					message: error.message,
				},
			],
		};
		return null;
	}
}