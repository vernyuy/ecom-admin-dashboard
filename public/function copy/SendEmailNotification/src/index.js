/* Amplify Params - DO NOT EDIT
	API_COMMERCE_GRAPHQLAPIENDPOINTOUTPUT
	API_COMMERCE_GRAPHQLAPIIDOUTPUT
	API_COMMERCE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk')
const DynamoDBClient = require("@aws-sdk/client-dynamodb");
const ddb = require("@aws-sdk/lib-dynamodb");
const ScanCommand = ddb.ScanCommand;
const DynamoDBDocumentClient = ddb.DynamoDBDocumentClient;
const client = new DynamoDBClient.DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const ses = new aws.SES()

exports.handler = async (event) => {
  
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      console.log(streamedItem)

      //  pull off items from stream

      const emailSubject = streamedItem.dynamodb.NewImage.subject.S
      const emailBody = streamedItem.dynamodb.NewImage.body.S
      const usersAddresses = await listUsers()
      console.log(usersAddresses)


// Create sendTemplatedEmail params 
var params = {
      Destinations: usersAddresses,
      Source: process.env.SES_EMAIL, /* required */
      Template: 'WELCOMW_EMAIL', /* required */
      DefaultTemplateData: "{ \"username\":\"educloud\" }", /* required */
      ReplyToAddresses: [
        process.env.SES_EMAIL
      ],
    };
    await ses.sendBulkTemplatedEmail(params).promise();      
    }

  }
  return { status: 'done' }
};

const listUsers = async () => {
        let startKey = null;
        let users = [];
        do {
          let command;
          if (startKey) {
            command = new ScanCommand({
              TableName: process.env.USER_TABLE,
              ProjectionExpression: "#EM, #FN",
              ExclusiveStartKey: {
                id: startKey,
              },
              ExpressionAttributeNames: {
                "#FN": "firstName",
                "#EM": "email",
              },
              Limit: 50,
            });
          } else {
            command = new ScanCommand({
              TableName: process.env.USER_TABLE,
              ProjectionExpression: "#EM, #FN",
              ExpressionAttributeNames: {
                "#FN": "firstName",
                "#EM": "email",
              },
              Limit: 50,
            });
          }

          const listUsers = await docClient.send(command);
          console.log("listUsers : ", listUsers);

          for (let user of listUsers.Items) {
            let userDestination = {
              Destination: {
                ToAddresses: [user.email]
              },
              ReplacementTemplateData: `{ \"username\":\"${user.firstName}\" }`,
            }
            users.push(userDestination)
          }
          try {
            startKey = listUsers.LastEvaluatedKey.id;
          } catch (error) {
            startKey = null;
            continue;
          }
        } while (startKey);
  return users
}