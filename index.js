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
    const inputString = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(inputString, "qwerty");

    // Split the string into lines
    const lines = inputString.split("\n");

    // Define an array to store the objects
    const objectsArray = [];

    // Iterate over each line
    lines.forEach((line) => {
      // Split the line into parts
      const parts = line.trim().split(" ");
      console.log(parts);
      // Extract the relevant information

      const radius = parseInt(parseInt(parts[5]));
      const xAxis = parseInt(parseInt(parts[8]));
      const yAxis = parseInt(parseInt(parts[11]));
      const color = parts[12];

      // Create an object and push it to the array
      const obj = {
        radius,
        xAxis,
        yAxis,
        color,
      };
      objectsArray.push(obj);
    });

    console.log(lines, objectsArray);

    // Call the executeGeneratedCode function with the generated code
    let code =
      "const canvas = document.getElementById('myCanvas');" +
      "const ctx = canvas.getContext('2d');" +
      "ctx.clearRect(0, 0, canvas.width, canvas.height);"; // Declare the code variable before the loop

    objectsArray.forEach((circle) => {
      console.log(circle);
      const { radius, xAxis, yAxis, color } = circle;
      // Check if any input value is null
      console.log("entered");
      if (!radius || !xAxis || !yAxis) {
        console.log(radius, xAxis, yAxis);
        code += "alert('Please provide values for all inputs.');\n";
        return;
      }

      // Concatenate the code generated for each circle
      code +=
        "ctx.beginPath();\n" +
        "ctx.arc(" +
        xAxis +
        ", " +
        yAxis +
        ", " +
        radius +
        ", 0, 2 * Math.PI);\n" +
        "ctx.fillStyle = '" +
        color +
        "';\n" + // Specify fill color
        "ctx.fill();\n" +
        "ctx.closePath();\n" +
        "console.log('hi');\n";

      console.log(code, "entered", circle);
    });

    console.log(code); // Now you can access the code outside the loop

    fetch("/generate-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Handle the response from the backend
        console.log("Generated code from backend:", data);
        const func = new Function(data);
        func();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  // Attach click event listener to the "RUN" button
  document.querySelector("#runButton").addEventListener("click", executeCode);
})();
