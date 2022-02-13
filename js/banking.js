// get input value;
function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
    const inputAmount = InputField.value;
    const inputAmountConvert = parseFloat(inputAmount);
    // clear input field
    InputField.value = '';
    return inputAmountConvert;
}
// update total field
function updateTotalField(totalAmountConvert,totalFieldId){
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const TotalConvert = parseFloat(TotalText);
    const totalDepositAmount = totalAmountConvert + TotalConvert;
    totalElement.innerText = totalDepositAmount;
}
// update balance
function updateBalance(depositAmountConvert,isAdd){
    // debugger;
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        const totalBalance = previousBalanceTotal + depositAmountConvert;
        balanceTotal.innerText = totalBalance;
    }
    else{
        const totalBalance = previousBalanceTotal - depositAmountConvert;
        balanceTotal.innerText = totalBalance;
    }
}
// get current balance;
function getCurrentBalance(){
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
document.getElementById("deposite-btn").addEventListener("click",function(){
    const depositAmountConvert = getInputValue('deposite-amount');
    // update deposite amount
    if(depositAmountConvert > 0){
        updateTotalField(depositAmountConvert,"deposite-total");
        updateBalance(depositAmountConvert,true);
    }
    else{
        alert("your value is confused")
    }
});
// handle withdraw buttton;
document.getElementById("withdraw-btn").addEventListener("click",function(){
    const withdrawAmountCount = getInputValue("withdraw-conut")
    const currentBalance = getCurrentBalance()
    if(withdrawAmountCount > 0 && withdrawAmountCount <= currentBalance){
        updateTotalField(withdrawAmountCount,'withdraw-amount')
        updateBalance(withdrawAmountCount,false)
    }
    else{
        alert("your value is confused")
    }
})