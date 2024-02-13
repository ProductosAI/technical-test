## Description

Solution developed to complete two objectives:
- 1: Allow clients to chat with a chatbot.  In this case, DialogFlow;
- 2. Allow clients to store user data and retrieve them.

## Setup

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

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
