const express = require("express");
const fetch = require("node-fetch");
const PORT = 8080
const { client } = require('./db')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req, res, next) => {
  try {
    const result = await client.query('SELECT * FROM users')
    res.send(result.rows)

  } catch (err) {
    console.error(err);
  }
});

app.use((err, req, res, next)=>{
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})



app.listen(PORT, () => {
  console.log(`Our Server has Started on localhost:${PORT}`);
});
