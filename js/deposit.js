// create a click event on deposit
document.getElementById('btn-depsoit').addEventListener('click', function(){
    const depositAmmountFiled = getInputValue('deposit-filed');
    const depositPreviousAmmount = getElementValue('deposit-total');
   
    const depositTotalAmmount = depositPreviousAmmount + depositAmmountFiled;
   
    setTextValue('deposit-total', depositTotalAmmount);
    const balanceCurrentTotal = getElementValue('balance-total');
    const balanceTotal = balanceCurrentTotal + depositAmmountFiled;
    setTextValue('balance-total', balanceTotal);
})