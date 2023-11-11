/* Amplify Params - DO NOT EDIT
	API_COMMERCE_GRAPHQLAPIENDPOINTOUTPUT
	API_COMMERCE_GRAPHQLAPIIDOUTPUT
	API_COMMERCE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from "@aws-crypto/sha256-js";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { default as fetch, Request } from "node-fetch";

const GRAPHQL_ENDPOINT = process.env.API_COMMERCE_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || "us-east-1";
const { Sha256 } = crypto;

const query = /* GraphQL */ `
	query LIST_TODOS {
		listTodos {
			items {
				id
				name
				description
			}
		}
	}
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import { handler as payment_succeeded } from "./getUser.js";

export const handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);

	const data = JSON.parse(event.body).data;

	switch (JSON.parse(event.body).type) {
		case "payment_intent.succeeded":
			const paymentSucceeded = data;
			let response = await payment_succeeded(paymentSucceeded);
			// Then define and call a function to handle the event payment_intent.succeeded
			if (response === null) {
				return {
					statusCode: 500,
					//  Uncomment below to enable CORS requests
					// headers: {
					//   "Access-Control-Allow-Origin": "*",
					//   "Access-Control-Allow-Headers": "*"
					// },
					body: JSON.stringify(event.body),
				};
			}
			break;
		// ... handle other event types
		default:
			console.log(`Unhandled event type ${JSON.parse(event.body).type}`);
	}

	let statusCode = 200;
	let body;
	let response;

	return {
		statusCode,
		//  Uncomment below to enable CORS requests
		// headers: {
		//   "Access-Control-Allow-Origin": "*",
		//   "Access-Control-Allow-Headers": "*"
		// },
		body: JSON.stringify(body),
	};
};
