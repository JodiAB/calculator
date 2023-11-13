document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before attaching event listeners

    // Get the display element
    var display = document.querySelector("input[name='display']");

    // Attach click event listeners to number and operator buttons
    var buttons = document.querySelectorAll(".custom-calculator form input[type='button']");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.value);
        });
    });

    // Function to handle button clicks
    function handleButtonClick(value) {
        if (value === "AC") {
            // Clear the display
            display.value = "";
        } else if (value === "DE") {
            // Delete the last character
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            // Evaluate the expression
            try {
                display.value = eval(display.value);
            } catch (error) {
                // Handle invalid expressions
                display.value = "Error";
            }
        } else {
            // Append the clicked value to the display
            display.value += value;
        }
    }
});
