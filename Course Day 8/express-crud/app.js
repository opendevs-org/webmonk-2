const express = require('express');
const app = express();
const port = 3000;

// Global Intime memory array
let accounts = [
    {
        id: 1,
        username: "paulhal",
        role: "admin",
    },
    {
        id: 2,
        username: "johndoe",
        role: "guest",
    },
    {
        id: 3,
        username: "sarahjane",
        role: "guest",
    },
];

// Middleware
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

// Global Middleware logger
const logger = (req, res, next) => {
    console.log("Method: %s, Route: %s", req.method, req.url);
    next();
};

// custom middleware : logger
app.use(logger);

// To get all records
/** GET ALL : http://localhost:3000/accounts */
app.get("/accounts", (request, response) => {
    response.status(200).json(accounts);
});

// To get single record
/** GET BY ID : http://localhost:3000/accounts/3 */
app.get("/accounts/:id", (request, response) => {
    const accountId = Number(request.params.id);
    const getAccount = accounts.find((account) => account.id === accountId);

    if (!getAccount) {
        response.status(404).send("Account not found.");
    } else {
        response.status(200).json(getAccount);
    }
});

// To insert a new record
/** INSERT(POST):  http://localhost:3000/accounts 
 * {
    "username": "davesmith",
    "role": "admin"
  } */
app.post("/accounts", (request, response) => {
    const id = accounts.length + 1;
    request.body.id = id;
    const incomingAccount = request.body;

    accounts.push(incomingAccount);

    response.status(201).json(accounts);
});

// Updating existing data
/** UPDATE */
app.put("/accounts/:id", (request, response) => {
    const accountId = Number(request.params.id);
    const body = request.body;
    const account = accounts.find((account) => account.id === accountId);
    const index = accounts.indexOf(account);

    if (!account) {
        response.status(404).send("Account not found.");
    } else {
        const updatedAccount = { ...account, ...body };

        accounts[index] = updatedAccount;

        response.status(200).send(updatedAccount);
    }
});

// Deleting a record
/** DELETE */
app.delete("/accounts/:id", (request, response) => {
    const accountId = Number(request.params.id);
    const newAccounts = accounts.filter((account) => account.id != accountId);

    if (!newAccounts) {
        response.status(404).send("Account not found.");
    } else {
        accounts = newAccounts;
        response.status(200).send(accounts);
    }
});
app.listen(port, () => {
    console.log(`Express CRUD app listening at http://localhost:${port}`)
})
