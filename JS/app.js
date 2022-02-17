function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';
    return inputAmountValue;
}
function getCurrentTotalExpenses() {
    const userTotalExpense = document.getElementById('total-expense');
    const userTotalExpenseText = userTotalExpense.innerText;
    const previousTotalExpense = parseFloat(userTotalExpenseText);
    return previousTotalExpense;
}
function getPreviousBalance() {
    const userBalance = document.getElementById('total-balance');
    const userTotalExpenseText = userBalance.innerText;
    const previousTotalExpense = parseFloat(userTotalExpenseText);
    return previousTotalExpense;
}
function updateCurrentTotalExpenses(foodAmount, rentAmount, clothesAmount, isAdd) {
    const userTotalExpense = document.getElementById('total-expense');
    const previousTotalExpense = getCurrentTotalExpenses();
    if (isAdd == true) {
        userTotalExpense.innerText = previousTotalExpense + foodAmount + rentAmount + clothesAmount;
    }
    const totalExpenses = userTotalExpense.innerText
    return totalExpenses;
}

function userCurrentBalance(incomeAmount, isDone) {
    const userBalance = document.getElementById('total-balance');
    const userTotalIncome = getInputValue('user-income-input');
    const previousBalance = getPreviousBalance();
    const userCalculatedTotalExpence = updateCurrentTotalExpenses();
    if (isDone == true) {
        userBalance.innerText = ((previousBalance + incomeAmount) - userCalculatedTotalExpence);
        if (userBalance.innerText < 0) {
            showErrorMessageForBalance();
        }
    }
    const userBalanceNew = userBalance.innerText;
    return userBalanceNew;
}
function previouslySavingAmount() {
    const userSavingAmount = document.getElementById('user-saving-amount');
    const userSavingAmountText = userSavingAmount.innerText;
    const previousSavingAmount = parseFloat(userSavingAmountText);
    return previousSavingAmount;
}

//Error Message
function showErrorMessage() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = "Please Enter a Positive Number!!!";
}

//Error Message for String
function showErrorMessageForString() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = "You have entered a String. Please enter a Positive Number!!!"
}

//Error message for remaining balance
function showErrorMessageForBalance() {
    const errorMessage = document.getElementById('error-message-for-balance');
    errorMessage.textContent = "Balance cannot be Negative!!!"
}
//Error message for remaining balance
function showErrorMessageForRemainingBalance() {
    const errorMessage = document.getElementById('error-message-for-remaining-balance');
    errorMessage.textContent = "Remaining Balance cannot be Negative!!!"
}
// handle calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    //user total income handle

    const userTotalIncome = getInputValue('user-income-input');
    const userFoodCost = getInputValue('user-food-expenses');
    const userRentCost = getInputValue('user-rent-expenses');
    const userClothsCost = getInputValue('user-clothes-expenses');

    if (userFoodCost > 0 && userRentCost > 0 && userClothsCost > 0) {
        updateCurrentTotalExpenses(userFoodCost, userRentCost, userClothsCost, true);
    }
    else if (isNaN(userFoodCost) || isNaN(userRentCost) || isNaN(userClothsCost)) {
        showErrorMessageForString();
    }
    else {
        showErrorMessage();
    }
    if (userTotalIncome > 0) {
        userCurrentBalance(userTotalIncome, true);
    }
    else if (isNaN(userTotalIncome)) {
        showErrorMessageForString();
    }
    else {
        showErrorMessage();
    }

    //handle the save button
    document.getElementById('save-button').addEventListener('click', function () {
        //user saveing % handle
        const userSaveingParsentageAmount = document.getElementById('user-saveing-parcentage');
        const userNewSaveingParsentageAmountText = userSaveingParsentageAmount.value;
        const newUserSaveingParsentageAmount = parseFloat(userNewSaveingParsentageAmountText);

        // handle saveing amount
        const userSavingAmount = document.getElementById('user-saving-amount');
        const userSavingAmountText = userSavingAmount.innerText;
        const previousSavingAmount = parseFloat(userSavingAmountText);
        const newSavingAmount = (((newUserSaveingParsentageAmount / 100) * userTotalIncome) + previousSavingAmount);

        userSavingAmount.innerText = newSavingAmount;

        //handle remaining balance amount
        const userRemainingBalance = document.getElementById('user-remaining-balance');
        const userRemainingBalanceText = userRemainingBalance.innerText;
        const previousRemainingBalance = parseFloat(userRemainingBalanceText);
        const newRemainingBalance = ((userCurrentBalance() - newSavingAmount) + previousRemainingBalance);

        if (newRemainingBalance < 0) {
            showErrorMessageForRemainingBalance();
        }
        else {
            userRemainingBalance.innerText = newRemainingBalance;
        }
        //clear the input field
        userSaveingParsentageAmount.value = '';
    });
});




