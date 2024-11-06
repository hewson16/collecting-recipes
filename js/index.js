
let ingredientsArray = [];

function addIngredient(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const ingredientInput = document.getElementById('ingredientInput');
    const quantityInput = document.getElementById('quantityInput');
    const unitInput = document.getElementById('unitMeasurement');
    
    const ingredientText = ingredientInput.value;
    const quantityText = quantityInput.value;
    const unitText = unitInput.value;
    const list = document.getElementById('ingredientList');

    // Create ingredient string and add to array (allows for easier access to list later)
    const ingredientString = `${ingredientText} - ${quantityText} ${unitText}`;
    ingredientsArray.push(ingredientString);

    // Create the list item
    const listItem = document.createElement('p');

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = ingredientsArray.length - 1; // Store the index of the ingredient in the array
        
    listItem.appendChild(checkbox); 
    listItem.appendChild(document.createTextNode(ingredientString));
    list.appendChild(listItem);

    // Clear the input fields after adding the ingredient
    ingredientInput.value = "";
    quantityInput.value = "";
}

// Delete items selected in the checklist 
function deleteIngredient() { 
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

// Display selected ingredients along with the recipe name
function displayIngredient(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const recipeName = document.getElementById('recipeName').value;
    const list = document.getElementById('ingredientList');
    const items = list.getElementsByTagName('p');

    const selectedIngredients = [];
    for (let item of items) {
        const checkbox = item.getElementsByTagName('input')[0];
        if (checkbox.checked) {
            selectedIngredients.push(ingredientsArray[parseInt(checkbox.value)]);
        }
    }

    const displayArea = document.getElementById('selectedIngredients');
    // Clear previous content
    displayArea.textContent = '';
    // Display recipe name
    const recipeNameElement = document.createElement('h3');
    recipeNameElement.textContent = `${recipeName}`;
    displayArea.appendChild(recipeNameElement);

    // Display each selected ingredient
    for (index in selectedIngredients) {
        const ingredient = selectedIngredients[index];
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;

        displayArea.appendChild(listItem);
    }
}