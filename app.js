// phone case plus minus (in One function);
function updateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '_number');
    let caseNumber = parseInt(caseInput.value);
    if(isIncreasing == true) {
        caseNumber = caseNumber + 1;
    } else if(caseNumber > 0) {
        caseNumber = caseNumber - 1;
    };
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product + '_total');
    caseTotal.innerText = caseNumber * price;

    calculateTotal()
};

function getInputValue(product) {
    const subInput = document.getElementById(product + '_number');
    const subNumber = parseInt(subInput.value);
    return subNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const total = phoneTotal + caseTotal;

    const tex = total / 10;

    const totalPrice = total + tex;

    document.getElementById('sub_total').innerText = total;
    document.getElementById('tex_amount').innerText = tex;
    document.getElementById('total_price').innerText = totalPrice;

}





// phone plus
document.getElementById('phone_plus').addEventListener('click', function() {
    updateCaseNumber('phone', 1219, true);
});

// phone minus
document.getElementById('phone_minus').addEventListener('click', function() {
    updateCaseNumber('phone', 1219, false);
})



// phone case plus
document.getElementById('case_plus').addEventListener('click', function() {
    updateCaseNumber('case', 59, true);
});


// phone case minus 
document.getElementById('case_minus').addEventListener('click', function() {
    updateCaseNumber('case', 59, false);
});