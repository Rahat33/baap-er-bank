// deposit amount
document.getElementById('deposit-btn').addEventListener('click', function () {
    // taking input from input field
    const depositInput = document.getElementById('user-deposit');
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount);

    // checking existing value;
    const depositTotal = document.getElementById('deposit-display');
    const previousDepositTotal = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;
    // console.log(depositTotal);


    // update account balance

    const balanceTotal = document.getElementById('balance-display');
    const previousBalanceTotal = balanceTotal.innerText;
    // console.log(previousBalanceTotal);

    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositTotal);
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input feild

    depositInput.value = '';
})


// withdraw amount

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('user-withdraw');
    const newWithdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-display');
    const previousWithdrawTotal = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;
    // console.log(withdrawTotal);

    const totalBalance = document.getElementById('balance-display');
    const previousBalanceTotal = totalBalance.innerText;
    // console.log(previousBalanceTotal);


    const newTotalBalance = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);

    if (newTotalBalance < '1') {
        console.log("You dont have enough fund")
    }
    else {
        totalBalance.innerText = newTotalBalance;
    }

    withdrawInput.value = '';
})