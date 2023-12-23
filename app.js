// console.log('Node js')

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3200;
const dotenv = require("dotenv").config();

// MIDDLEWARES
app.use(express.json());
// app.use(dotenv.config());

app.get("/", (req, res) => {
  res.send("NODE JS PRACTICE PROJECT");
});

app.listen(PORT, () => [
  console.log(`Server is running on port http://localhost:${PORT}`),
]);
