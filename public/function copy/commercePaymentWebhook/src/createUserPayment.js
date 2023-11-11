


import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';


const endpointSecret = "whsec_4ed3ac8081563e933f5c9c65f5a8b288fe2cf161d2cf7efd22bdf13fbcec1c19";


const GRAPHQL_ENDPOINT = process.env.API_COMMERCE_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const { Sha256 } = crypto;


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 export const handler = async (event) => {
  console.log("test")
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = new URL(GRAPHQL_ENDPOINT);
  console.log("Endpoint : ", endpoint)
  const query = /* GraphQL */ `
    mutation createPayment {
      createPayment(input: {userID: "${event.userId}", amount: ${event.amount}, paymentStatus: ${event.paymentStatus}, paymentIntentId: "${event.paymentIntentId}", orderId: "${event.orderId}"}) {
        id
      }
    }
    `;

  console.log("Query : ", query)

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });
  console.log("Signer : ", signer)

  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query }),
    path: endpoint.pathname
  });

  console.log("Request : ", requestToBeSigned)

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);

  console.log("Signed : ", signed)


  let body;
  let response;

  try {
    console.log(" request 1 : ", "Essay")
    response = await fetch(request);
    console.log("RESPONSE payment : ", response)
    body = await response.json();
    console.log("Body : ", body)

    if (body.errors){
      return null
    }else{
      return true
    }
  } catch (error) {

    return null
  }
};