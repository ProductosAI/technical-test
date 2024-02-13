## Description

Solution developed to complete two objectives:
- Allow clients to chat with a chatbot.  In this case, DialogFlow;
- Allow clients to store user data and retrieve them.

### OpenAPI
OpenAPI is available at documents/openAPI.json

## DialogFlow Setup

We need a valid DialogFlow agent and a Google Console account to use this project. To generate them, these steps should be followed:
- Access https://dialogflow.cloud.google.com/;
- Click on 'Create Agent' or 'New Agent';
- Name it as you like;
- Select 'Create a new Google Project' on 'Google Project';
- Click on 'Create'.

Next, we need to enable 'Small Talk' on out agent:
- On the left menu, select 'Small Talk';
- Enable it and click on 'Save'.

Next, we need to create our Service Account on Google Cloud Console (GCP):
- On the upper left menu, next to the agent's name, click on the "Settings" (gear) icon;
- Inside 'Google Project', click on the link showing your Project ID. You will be redirected to GCP;
- Click on 'Access project configurations';
- On the left menu, click on 'Service accounts';
- Click on 'Create service account';
- Create the ID as you like;
- On Step 2, select 'DialogFlow Client API' in the role select box;
- Click on 'Done'.

Now, we need to get the file with our keys so the DialogFlow API can be used:
- On the screen listing our Service Accounts, locate the one we've just created and click on the 3 dots icon on the 'Actions' column and select 'Manage keys';
- Click on 'Add Keys'> 'Create new key', selecting JSON as Key type;
- Click on 'Create' to download the file.

On our project's the root folder, create a file named ".env". Open it and paste the following, replacing values by the ones in the file we've just downloaded:

GCP_DIALOGFLOW_PROJECT_ID = "Paste property project_id's value here"
GCP_DIALOGFLOW_PRIVATE_KEY = "Paste property private_key's value here"
GCP_DIALOGFLOW_CLIENT_EMAIL = "Paste property client_email's value here"

The file should look like this:

GCP_DIALOGFLOW_PROJECT_ID = "applydigitaltestagent-abcd"
GCP_DIALOGFLOW_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDtWtz6jAHphj9b\n/gNWyt4MRSAeXEOn6tIvQEswaWPF69z0a7YYUlnoIQ105oppUjx+pKEAVbZ+JowT\nMw7FXBpdqQlk1erL7KRvclkgGIQI1ElZfghghdvdsfbq5vMgZ5bH5eYNqWx2U/LhW\nl/ILyFo5cKTOLv4Q3n7TSJayw//BBNnZBRjv2jzOwKPK4bknUHOjKMZWaWczxT0D\n82kHHdXhAgMBAAECggEABwdD3nxcHxGzPZoEALI8bThjMTDfghfghcU/Z3\nuIkAYY3s2bBCvIPwlm9X/+Qnd4=\n-----END PRIVATE KEY-----\n"
GCP_DIALOGFLOW_CLIENT_EMAIL = "serviceaccount@applydigitaltestagent-abcd.iam.gserviceaccount.com"

## Memory handling Setup

Since we don't want our server to be out of memory if lots of users are registered, I've added an environment variable that will let us configure a hard limit to how many items are stored. To do so, we just need to fill the value below with a integer value bigger or equal to 0:

MAX_ITEMS_IN_MEMORY_STORAGE=10

## Installation

```bash
$ cd rodrigo-applydigital-dialogflow
$ npm install
```

## Running the app

```bash
$ cd rodrigo-applydigital-dialogflow

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
$ cd rodrigo-applydigital-dialogflow

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

## Important Notes

### Architecture
I've chosed to develop the solution using Clean Architecture, DDD and SOLID, since they help us separating concerns and further scaling the aplication as needed.
For instance, if we choose to stop using DialogFlow as chatbot vendor and switch to, say, OpenAI, it would be as simple as implementing a new data source returning the same model. Or maybe we'll start storing users in a "real" database instead of storing them in memory.

It's also much easier to test every single part of the application independently, using techniques such as mocks to execute unit testing.

### Memory handling
Regarding memory handling, at first I thought I should solve it by checking the available memory and allowing a certain percentage to be used. However, it quickly became clear that this probably wasn't the best approach, since 1. querying the SO to calculate and return the available memory is not a good practice since it's a costly operation and 2. it gives basically 0 previsibility on the limit: we could handle a million records but also could handle 0. So I decided to implement a much simpler, an even naive solution, making it possible to define a hard limit on how many items can be stored.