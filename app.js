const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("Thank you for Signup!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
