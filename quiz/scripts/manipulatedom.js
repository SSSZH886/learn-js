window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
};

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  });
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createEditTextButton(txtNode) {
  let btn = document.createElement("button");
  btn.textContent = "Edit text";
  btn.onclick = function() {
    // Create an input element
    let input = document.createElement("input");
    input.type = "text";
    input.value = txtNode.nodeValue;

    // Replace the text node with the input element
    txtNode.parentNode.replaceChild(input, txtNode);

    // Focus the input and select its text
    input.focus();
    input.select();

    // Function to revert back to text node
    function revertToTextNode() {
      txtNode.nodeValue = input.value; // Update text node value
      input.parentNode.replaceChild(txtNode, input); // Replace input with text node
    }

    // Save changes on blur or Enter key
    input.onblur = revertToTextNode;
    input.onkeydown = function(e) {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission if inside a form
        revertToTextNode();
      }
    };
  };
  return btn;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let txtNode = createTxtNode("Cell (" + i + ", 0)"); // Create the text node
    let col1 = createTDNode(txtNode);
    let editButton = createTDNode(createEditTextButton(txtNode)); // Pass the text node to the button creation function
    tableNode.appendChild(createTRNode([col1, editButton]));
  }
  document.getElementById("root").appendChild(tableNode);
}
