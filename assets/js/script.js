function reverseString() {
  var inputString = document.getElementById("inputString").value;
  var reversedString = "";

  // Reversing the string
  for (var i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  // Displaying the reversed string
  document.getElementById("output").innerText =
    "Reversed String: " + reversedString;
}

// Add event listener for Enter key press
document
  .getElementById("inputString")
  .addEventListener("keypress", function(event) {
    // Check if Enter key was pressed
    if (event.key === "Enter") {
      // Prevent default form submission behavior
      event.preventDefault();
      // Call reverseString function
      reverseString();
    }
  });
