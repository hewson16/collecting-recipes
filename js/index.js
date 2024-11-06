
function addIngredient(event) {
    event.preventDefault(); // Had to Google how to stop page from refreshing on each submission and use of event, wouldn't work otherwise

    // User input of Ingredients
    const ingredientInput = document.getElementById('ingredientInput');
    const quantityInput = document.getElementById('quantityInput');
    const unitInput = document.getElementById('unitMeasurement');
    
    const ingredientText = ingredientInput.value;
    const quantityText = quantityInput.value;
    const unitText = unitInput.value;
    const list = document.getElementById('ingredientList');

    // Create the list item
    const listItem = document.createElement('p');

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
        
    // Create the span to hold the ingredient, quantity, and unit text
    const textSpan = document.createElement('span');
    textSpan.textContent = `${ingredientText} - ${quantityText} ${unitText}`;
        
    // Append checkbox and text to listItem
    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
        
    // Append listItem to list
    list.appendChild(listItem);

    // Clear the input fields after adding the ingredient
    ingredientInput.value = "";
    quantityInput.value = "";
}

// Delete items selected in checklist
function deleteIngredient(event) {
    console.log('delete');
    event.preventDefault(); // Had to Google how to stop page from refreshing on each submission and use of event, wouldn't work otherwise

    const list = document.getElementById('ingredientList');
    const items = list.getElementsByTagName('p');

    // Collect items to be removed
    const itemsToRemove = [];
    for (let item of items) {
        const checkbox = item.getElementsByTagName('input')[0];
        if (checkbox.checked) {
            itemsToRemove.push(item);
        }
    }

    // Remove collected items from the list
    for (let item of itemsToRemove) {
        list.removeChild(item);
    }

}


// Using the checklist, display all SELECTED ingredients, recipe name
function displayIngredient(event) {
    console.log('display');
    event.preventDefault(); // Had to Google how to stop page from refreshing on each submission and use of event, wouldn't work otherwise

    // Get recipe name
    const recipeName = document.getElementById('recipeName');
    const recipeNameText = recipeName.value;

    const list = document.getElementById('ingredientList');
    const items = list.getElementsByTagName('ul');

    // Determine what boxes are selected
    // Display Recipe name AND only selected boxes
    
}





