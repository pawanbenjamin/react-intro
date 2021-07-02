const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", async (req, res, next) => {
  try {
    let result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let stuff = await result.json();
    res.send(stuff);
  } catch (err) {
    console.error(err);
  }
});

app.listen(8080, () => {
  console.log("Our Server has Started");
});
