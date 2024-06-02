
// Function to clear input fields
function clearInputs() {
    document.getElementById('linput').value = ' ';
    document.getElementById('rinput').value = ' ';
}

// Function to swap input values and selected units
function swapInputs() {
    const leftInput = document.getElementById('linput');
    const rightInput = document.getElementById('rinput');
    const leftSelect = document.getElementById('left-select');
    const rightSelect = document.getElementById('right-select');

    // Swap values
    const tempValue = leftInput.value;
    leftInput.value = rightInput.value;
    rightInput.value = tempValue;

    // Swap selected units
    const tempUnit = leftSelect.value;
    leftSelect.value = rightSelect.value;
    rightSelect.value = tempUnit;
}

// Function to convert values between units
function convertUnits() {
    const leftInput = document.getElementById('linput');
    const rightInput = document.getElementById('rinput');
    const leftSelect = document.getElementById('left-select');
    const rightSelect = document.getElementById('right-select');

    const leftValue = parseFloat(leftInput.value);
    if (isNaN(leftValue)) {
        rightInput.value = '';
        return;
    }

    let rightValue;

    // Conversion logic
    if (leftSelect.value === 'km' && rightSelect.value === 'm') {
        rightValue = leftValue * 1000;
    } 
    else if (leftSelect.value === 'km' && rightSelect.value === 'cm') {
        rightValue = leftValue * 100000;
    } 
    else if (leftSelect.value === 'km' && rightSelect.value === 'mm') {
        rightValue = leftValue * 1000000;
    } 
    else if (leftSelect.value === 'km' && rightSelect.value === 'nm') {
        rightValue = leftValue * 1000000000000;
    }  
    else if (leftSelect.value === 'km' && rightSelect.value === 'micrometer') {
        rightValue = leftValue * 1000000000;
    } 
    else if (leftSelect.value === 'km' && rightSelect.value === 'pm') {
        rightValue = leftValue * 1000000000000000;
    } 
    else if (leftSelect.value === 'km' && rightSelect.value === 'dm') {
        rightValue = leftValue * 100;
    }
    else if (leftSelect.value === 'm' && rightSelect.value === 'km') {
        rightValue = leftValue / 1000;
    } 
    else if (leftSelect.value === 'm' && rightSelect.value === 'cm') {
        rightValue = leftValue * 100;
    } 
    else if (leftSelect.value === 'm' && rightSelect.value === 'mm') {
        rightValue = leftValue * 1000;
    } 
    else if (leftSelect.value === 'm' && rightSelect.value === 'nm') {
        rightValue = leftValue * 1000000000;
    } 
    else if (leftSelect.value === 'm' && rightSelect.value === 'micrometer') {
        rightValue = leftValue * 1000000;
    } 
    else if (leftSelect.value === 'm' && rightSelect.value === 'pm') {
        rightValue = leftValue * 1000000000000;
    } 
    else if (leftSelect.value === 'm' && rightSelect.value === 'dm') {
        rightValue = leftValue * 10;
    } 
    else if (leftSelect.value === 'cm' && rightSelect.value === 'km') {
        rightValue = leftValue / 100000;
    }
    else if (leftSelect.value === 'cm' && rightSelect.value === 'm') {
        rightValue = leftValue / 100;
    } 
    else if (leftSelect.value === 'cm' && rightSelect.value === 'nm') {
        rightValue = leftValue * 10000000;
    } 
    else if (leftSelect.value === 'cm' && rightSelect.value === 'micrometer') {
        rightValue = leftValue * 10000;
    } 
    else if (leftSelect.value === 'cm' && rightSelect.value === 'pm') {
        rightValue = leftValue * 10000000000;
    } 
    else if (leftSelect.value === 'cm' && rightSelect.value === 'dm') {
        rightValue = leftValue / 10;
    } 
    else if (leftSelect.value === 'cm' && rightSelect.value === 'mm') {
        rightValue = leftValue * 10;
    }
    else if (leftSelect.value === 'mm' && rightSelect.value === 'km') {
        rightValue = leftValue / 1000000;
    } 
    else if (leftSelect.value === 'mm' && rightSelect.value === 'm') {
        rightValue = leftValue / 1000;
    } 
    else if (leftSelect.value === 'mm' && rightSelect.value === 'cm') {
        rightValue = leftValue / 10;
    } 
    else if (leftSelect.value === 'mm' && rightSelect.value === 'nm') {
        rightValue = leftValue * 1000000;
    } 
    else if (leftSelect.value === 'mm' && rightSelect.value === 'micrometer') {
        rightValue = leftValue * 1000;
    } 
    else if (leftSelect.value === 'mm' && rightSelect.value === 'pm') {
        rightValue = leftValue * 1000000000;
    } 
    else if (leftSelect.value === 'mm' && rightSelect.value === 'dm') {
        rightValue = leftValue / 100;
    } 
    else if (leftSelect.value === 'micrometer' && rightSelect.value === 'km') {
        rightValue = leftValue / 1000000000;
    }
    else if (leftSelect.value === 'micrometer' && rightSelect.value === 'm') {
        rightValue = leftValue / 1000000;
    } 
    else if (leftSelect.value === 'micrometer' && rightSelect.value === 'nm') {
        rightValue = leftValue * 1000;
    } 
    else if (leftSelect.value === 'micrometer' && rightSelect.value === 'cm') {
        rightValue = leftValue / 10000;
    } 
    else if (leftSelect.value === 'micrometer' && rightSelect.value === 'pm') {
        rightValue = leftValue * 1000000;
    } 
    else if (leftSelect.value === 'micrometer' && rightSelect.value === 'dm') {
        rightValue = leftValue / 100000;
    } 
    else if (leftSelect.value === 'micrometer' && rightSelect.value === 'mm') {
        rightValue = leftValue / 1000;
    }
    else {
        rightValue = leftValue;
    }

    rightInput.value = rightValue;
}

// // Event listeners for buttons
document.getElementById('clear').addEventListener('click', clearInputs);
document.getElementById('swap').addEventListener('click', swapInputs);
document.getElementById('convert').addEventListener('click', convertUnits);
