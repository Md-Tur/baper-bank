// deposit button event handle 

document.getElementById('deposit-btn').addEventListener('click', function () {
    // get amount deposited 
    const depostiField = document.getElementById('deposit-amount');
    const newDeposit = depostiField.value;
    // adding new deposit with previous deposit
    const totalDeposit = document.getElementById('deposit-total');
    const previousDeposit = totalDeposit.innerText;
    const newDepositTotal = parseFloat(previousDeposit) + parseFloat(newDeposit);
    totalDeposit.innerText = newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previouBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalancetotal = parseFloat(previouBalanceTotal) + parseFloat(newDeposit);
    balanceTotal.innerText = newBalancetotal;


    // clear deposit input field
    depostiField.value = '';
});

// withdraw handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawTotalAmount = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawTotalAmount);

    // set withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previouWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previouWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update new balance after withdrawn

    const toalBalance = document.getElementById('balance-total');
    const previousTotalBalance = parseFloat(toalBalance.innerText);
    const newBalance = previousTotalBalance - newWithdrawAmount;
    toalBalance.innerText = newBalance;

    // clear withdraw input field
    withdrawInput.value = '';
})
