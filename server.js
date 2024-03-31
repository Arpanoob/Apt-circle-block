const express = require("express");
const path = require("path");
let acorn = require("acorn");
const escodegen = require("escodegen");
const app = express();
const port = 3001;
app.use(express.json());

app.post("/generate-code", (req, res) => {
  try {
    // Extract AST from request body

    const astNodes = acorn.parse(
        req.body.code,
      { ecmaVersion: 2020 }
    );
    console.log("Received AST:", astNodes);

    // Generate JavaScript code from AST
    const generatedCode = escodegen.generate(astNodes);
    console.log("Generated code:", generatedCode);

    // Send the generated code back as a response
    res.send(generatedCode);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error generating code: " + error.message);
  }
});

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/index.js", (req, res) => {
  res.sendFile(path.join(__dirname, "index.js"));
});
app.get("/circle.js", (req, res) => {
  res.sendFile(path.join(__dirname, "circle.js"));
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
