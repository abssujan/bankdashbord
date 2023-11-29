// Here I create some utility Js for make code fresh

//create a function for get input value 
function getInputValue(inputId) {
    const inputValueField = document.getElementById(inputId);
    const inputValueString = inputValueField.value;

    // Check if the input is a valid number
    if (isNaN(parseFloat(inputValueString))) {
        alert('Please enter a valid number.');
        inputValueField.value = '';
        return null;
    }
    const inputValueInNumber = parseFloat(inputValueString);
    inputValueField.value = '';
    return inputValueInNumber;
}

// get value form element

function getElementValue(elementId){
    const elementValueFiled = document.getElementById(elementId);
    const elementValueString = elementValueFiled.innerText;
    const elementValueInNumber = parseFloat(elementValueString);
    return elementValueInNumber;
}

// set the value in text element 
function setTextValue(elementId, newValue){
    const setElement = document.getElementById(elementId);
    setElement.innerText = newValue;
}