console.log('js');

function addIngredient() {

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
        
    // Append the checkbox and text to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
        
    // Append the list item to the list
    list.appendChild(listItem);

    // Clear the input fields after adding the ingredient
    ingredientInput.value = "";
    quantityInput.value = "";
}


