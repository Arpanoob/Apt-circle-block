Blockly.defineBlocksWithJsonArray([
  {
    type: "draw_circle",
    message0: "Draw Circle %1 Radius %2 X Axis %3 Y Axis %4 %5",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "radius",
      },
      {
        type: "input_value",
        name: "x axis",
      },
      {
        type: "input_value",
        name: "y axis",
      },
      {
        type: "field_dropdown",
        name: "color",
        options: [
          ["Red", "red"],
          ["Green", "green"],
          ["Blue", "blue"],
        ],
      },
    ],
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
]);
var b;
// Define JavaScript code generation for draw_circle block
Blockly.JavaScript["draw_circle"] = function (block) {
  console.log(block, typeof block);
  b=block;
  return "var a =" + block;
  // var color = block.getFieldValue("color"); // Get the selected color from the dropdown
  // var value_radius = Blockly.JavaScript.valueToCode(
  //   block,
  //   "radius",
  //   Blockly.JavaScript.ORDER_ATOMIC
  // );
  // var value_x_axis = Blockly.JavaScript.valueToCode(
  //   block,
  //   "x axis",
  //   Blockly.JavaScript.ORDER_ATOMIC
  // );
  // var value_y_axis = Blockly.JavaScript.valueToCode(
  //   block,
  //   "y axis",
  //   Blockly.JavaScript.ORDER_ATOMIC
  // );

  // // Check if any input value is null
  // if (!value_radius || !value_x_axis || !value_y_axis) {
  //   return "alert('Please provide values for all inputs.');\n";
  // }

  // var code =
  //   "ctx.beginPath();\n" +
  //   "ctx.arc(" +
  //   value_x_axis +
  //   ", " +
  //   value_y_axis +
  //   ", " +
  //   value_radius +
  //   ", 0, 2 * Math.PI);\n" +
  //   "ctx.fillStyle = '" +
  //   color +
  //   "';\n" + // Specify fill color
  //   "ctx.fill();\n" +
  //   "ctx.closePath();\n" +
  //   "console.log('hi');\n";
  // return code;
};
