## Bank Webhook

- this webhook is for the bank server to hit and aknowledge status of the initiated transaction with spcific userId and token

## simualte

- in the demo purpose we can use the endpoint of bank webhook api to simulate the status of the transaction initiated by users

### To simulate with api

- run bank webhook service `yarn dev`
- simulation webpage is avaialble on `http://localhost:8003/`
- The app can redirect to this url with the mentioned params `http://localhost:8003?userId=<userId>&token=<token>&amount=<amount>&redirectUrl=http://`

  - **userId** : userid of the payment transfer initiated user
  - **token** : the token generated on transfer init
  - **amount** : transfer amount
  - **redirectUrl** : url to which the redirection can be done 

- request to api POST : `http://localhost:8003/bankWebhook`
  - data : {
    "token" : "<token generated from client>",
    "user_id" : <user id in the db>,
    "amount" : 40000,
    "status" : "success" / "failed"
    }
  - the status other than `success` will be treated as failure.
- the above one is for bank payment approval or rejected simulation
-
