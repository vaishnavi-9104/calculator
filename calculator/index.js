let displayValue = '';

function appendValue(value) {
    if (displayValue === '0') {
        displayValue = value.toString();
    } 
    
    else {
        displayValue += value;
    }
    document.getElementById('display').innerText = displayValue;
}

function appendValue1(operator) {
    if(operator==='00')
        {
            displayValue+='00';
            document.getElementById('display').innerText = displayValue;
        }
    displayValue += ` ${operator} `;
    document.getElementById('display').innerText = displayValue;
}


function appendDecimal() {
    const parts = displayValue.split(' ');
    const lastPart = parts[parts.length - 1];
    
    if (!lastPart.includes('.')) {
        displayValue += '.';
        document.getElementById('display').innerText = displayValue;
    }
}

function appendclear(string)
{
    if(string==='AC')
        {
    displayValue = '0';
    document.getElementById('display').innerText = displayValue;
        }
    else
    {
        displayValue = displayValue.trim();
        if (displayValue.length > 0) {
            displayValue = displayValue.slice(0, -1);
            document.getElementById('display').innerText = displayValue || '0';
    }
}
}
function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').innerText = displayValue;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
        displayValue = '';
    }
}
