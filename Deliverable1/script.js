// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements
    const userInput = document.getElementById('userInput');
    const addItemButton = document.getElementById('addItem');
    const myList = document.getElementById('myList');

    // Function to add a new item to the list
    function addItem() {
        // Get the value from the input field and trim whitespace
        const inputValue = userInput.value.trim();
        
        // Check if the input is not empty
        if (inputValue !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');
            
            // Set the text content of the list item
            listItem.textContent = inputValue;
            
            // Add the list item to the unordered list
            myList.appendChild(listItem);
            
            // Clear the input field
            userInput.value = '';
            
            // Focus back on the input field for better user experience
            userInput.focus();
        } else {
            // Alert user if trying to add an empty item
            alert('Please enter some text before adding an item.');
        }
    }

    // Add event listener for the "Add Item" button
    addItemButton.addEventListener('click', addItem);

    // Add event listener for the Enter key on the input field
    userInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            addItem();
        }
    });

    // Focus on the input field when the page loads
    userInput.focus();
});
