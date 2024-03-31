Custom Blockly Block: Draw Circle
Description:
This custom Blockly block allows you to draw a circle on the canvas with specific color, radius, and coordinates.

Parameters:
Color: Choose the color of the circle.
Radius: Enter the radius of the circle.
Coordinates: Specify the center coordinates of the circle.
Usage:
Drag the "Draw Circle" block into your workspace.
Enter the desired color, radius, and coordinates in the respective fields.
Connect the block to any event or trigger to execute the drawing.

Integration with Acorn and escodegen:
Acorn Parsing: Parse the Blockly code into an abstract syntax tree (AST) using Acorn. This AST represents the structure of the code in a format that can be manipulated programmatically.
Modification: Optionally modify the AST obtained from Acorn, depending on your requirements.
escodegen Generation: Use escodegen to generate executable JavaScript code from the modified AST. This ensures that the code retains its functionality while being transformed into a more readable format.
Ast like ->{
  "type": "workspace",
  "blocks": [
    {
      "type": "draw_circle",
      "fields": {
        "radius": "10",
        "x_axis": "100",
        "y_axis": "100"
      },
      "children": []
    }
  ]
}


GET STARTED
npm i
npm start
