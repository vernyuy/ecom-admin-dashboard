/* Amplify Params - DO NOT EDIT
	API_COMMERCE_GRAPHQLAPIENDPOINTOUTPUT
	API_COMMERCE_GRAPHQLAPIIDOUTPUT
	API_COMMERCE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
AWS.config.region = "us-east-1";

const identity = new AWS.CognitoIdentityServiceProvider();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context, callback) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	// Confirm the user
	// event.response.autoConfirmUser = true;

	// Set the email as verified if it is in the request
	// if 'email' in event['request']['userAttributes']:
	// event.response.autoVerifyEmail = true;

	if (event.request.userAttributes.email) {
		const { email } = event.request.userAttributes;
		const userParams = {
			UserPoolId: event.userPoolId,
			AttributesToGet: ["email"],
			Filter: `email = \"${email}\"`,
			Limit: 1,
		};
		try {
			const { Users } = await identity.listUsers(userParams).promise();
			console.log({ Users });
			if (Users && Users.length > 0) {
				console.log("Email exist");
				callback("EMAIL_ALREADY_IN_USE", null);
			} else {
				console.log("Event Response : ", event);
				callback(null, event);
			}
		} catch (error) {
			console.log({ error }, JSON.stringify(error));
			callback({ error }, null);
		}
	} else {
		callback("MissingParameters", null);
	}
};
