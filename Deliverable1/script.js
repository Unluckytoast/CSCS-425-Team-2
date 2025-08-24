document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addItem');
    const userInput = document.getElementById('userInput');
    const myList = document.getElementById('myList');
    
    if (addButton && userInput && myList) {
        addButton.addEventListener('click', function() {
            addItemToList();
        });
        
        userInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addItemToList();
            }
        });
    }
    
    function addItemToList() {
        const inputValue = userInput.value.trim();
        
        if (inputValue !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = inputValue;
            
            myList.appendChild(listItem);
            
            userInput.value = '';
            userInput.focus();
        }
    }
});