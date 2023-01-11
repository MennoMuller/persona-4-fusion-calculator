const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

const db = require("./queries");

app.get("/persona", db.getPersonas);
app.get("/persona/:arcana/:level/:round", db.getResultPersona);
app.post("/fusion/2", db.addFusion2);
app.post("/fusion/3", db.addFusion3);
