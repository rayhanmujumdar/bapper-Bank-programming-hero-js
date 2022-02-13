function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
    const inputAmount = InputField.value;
    const inputAmountConvert = parseFloat(inputAmount);
    // clear input field
    InputField.value = '';
    return inputAmountConvert;
}


document.getElementById("deposite-btn").addEventListener("click",function(){
    const depositAmountConvert = getInputValue('deposite-amount');

    const depositTotal = document.getElementById("deposite-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalConvert = parseFloat(depositTotalText);

    const totalDepositAmount = depositAmountConvert + depositTotalConvert;
    depositTotal.innerText = totalDepositAmount;
    // total balance added;
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const totalBalance = previousBalanceTotal + depositAmountConvert;
    balanceTotal.innerText = totalBalance;
    
});
// handle withdraw buttton;
document.getElementById("withdraw-btn").addEventListener("click",function(){
    const withdrawAmountCount = getInputValue("withdraw-conut")

    const withdrawAmount = document.getElementById("withdraw-amount");
    const withdrawAmountTotalText = withdrawAmount.innerText;
    const withdrawAmountTotal = parseFloat(withdrawAmountTotalText);

    const totalwithdrawBalance = withdrawAmountCount + withdrawAmountTotal;
    withdrawAmount.innerText = totalwithdrawBalance;
    // current balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerHTML = previousBalanceTotal - withdrawAmountCount;
})