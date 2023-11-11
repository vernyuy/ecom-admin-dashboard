

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const algoliasearch = require('algoliasearch')
const aws = require('aws-sdk')
const DynamoDBClient = require("@aws-sdk/client-dynamodb");
const ddb = require("@aws-sdk/lib-dynamodb");
const ScanCommand = ddb.ScanCommand;
const DynamoDBDocumentClient = ddb.DynamoDBDocumentClient;
const client = new DynamoDBClient.DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

// Connect and authenticate with your Algolia app
const algoliaClient = algoliasearch('1H8TO0RHHP', '0a1f042c54453aa5e508d6376fca7ce8')

// Create a new index and add a record
const index = algoliaClient.initIndex('products')
const record = { objectID: 1, name: 'test_record' }
index.saveObject(record).wait()
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    const res = await listUsers()

    console.log("res : ", res);
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};

const listUsers = async () => {
  console.log("listProducts");
        let startKey = null;
        let products = [];
        do {console.log("loop")
          let command;
          if (startKey) {
            command = new ScanCommand({
              TableName: process.env.TABLE_NAME,
              ExclusiveStartKey: {
                id: startKey,
              },
              Limit: 100,
            });
          } else {
            command = new ScanCommand({
              TableName: process.env.USER_TABLE,
              Limit: 100,
            });
          }

          const listProducts = await docClient.send(command);
          console.log("listProducts : ", listProducts);
          index.saveObjects(listProducts)
          try {
            startKey = listProducts.LastEvaluatedKey.id;
          } catch (error) {
            startKey = null;
            continue;
          }
        } while (startKey);
  return products
}