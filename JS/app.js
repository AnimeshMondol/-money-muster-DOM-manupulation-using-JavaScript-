// handle calculate button
document.getElementById('calculate-button').addEventListener('click', function(){
    //user total income handle
    const userTotalIncome = document.getElementById('user-income-input'); 
    const newtotalIncomeText = userTotalIncome.value;
    const newTotalIncome = parseFloat(newtotalIncomeText);

    //user food amount handle
    const userFoodCostInput = document.getElementById('user-food-expenses');
    const newFoodAmountText = userFoodCostInput.value;
    const newFoodAmount = parseFloat(newFoodAmountText);
    
    //user rent amount handle
    const userRentCostInput = document.getElementById('user-rent-expenses');
    const newRentAmountText = userRentCostInput.value;
    const newRentAmount = parseFloat(newRentAmountText);

    //user clothes amount handle
    const userClothsCostInput = document.getElementById('user-clothes-expenses');
    const newClothesAmountText = userClothsCostInput.value;
    const newClothesAmount = parseFloat(newClothesAmountText);

    //update total expances 
    const userTotalExpense = document.getElementById('total-expense');
    const userTotalExpenseText = userTotalExpense.innerText;
    const previousTotalExpense = parseFloat(userTotalExpenseText);
    const newTotalExpenses = previousTotalExpense + newClothesAmount + newRentAmount + newFoodAmount;

    userTotalExpense.innerText = newTotalExpenses;

    //update balance 
    const userBalance = document.getElementById('total-balance');
    const userBalenceText = userBalance.innerText;
    const previousTotalBalance = parseFloat(userBalenceText);
    const newUserBalance = ((previousTotalBalance + newTotalIncome) - newTotalExpenses);

    userBalance.innerText = newUserBalance

    //clear all the input field
    userTotalIncome.value = '';
    userFoodCostInput.value = '';
    userRentCostInput.value = '';
    userClothsCostInput.value = '';
});