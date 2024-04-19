## Bank Webhook
- this webhook is for the bank server to hit and aknowledge status of the initiated transaction with spcific userId and token

## simualte

- in the demo purpose we can use the endpoint of bank webhook api to simulate the status of the transaction initiated by users

### To simulate

- run bank webhook service `yarn dev`
- request to api POST :  `http://localhost:<port>/hdfcWebhook` 
    - data : {
        "token" : <token generated from client>,
        "user_id" : <user id in the db>,
        "amount" : 40000
    }
- the above one is for hdfc simulation
- 