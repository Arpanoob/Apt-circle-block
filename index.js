(function () {
  // Define toolbox
  const toolbox = {
    kind: "flyoutToolbox",
    contents: [
      {
        kind: "block",
        type: "draw_circle",
      },
      {
        kind: "block",
        type: "math_number",
        fields: {
          NUM: 0, // You can set a default value for the input number block
        },
      },
    ],
  };

  // Inject Blockly into the designated div with the specified toolbox configuration
  const workspace = Blockly.inject("blocklyDiv", {
    toolbox: toolbox,
    scrollbars: false,
    horizontalLayout: true,
    toolboxPosition: "end",
  });

  // Function to execute the Blockly code and draw a circle
  function executeCode() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas


    const code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log("Generated code:", code);

    // Execute the generated JavaScript code
    eval(code);
  }

  // Attach click event listener to the "RUN" button
  document.querySelector("#runButton").addEventListener("click", executeCode);
})();
