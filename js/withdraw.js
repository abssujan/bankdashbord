// create click event withdraw 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputFiled = getInputValue('withdraw-filed');
    const withdrawPreviousAmmount = getElementValue('withdraw-total');
    const balanceCurrentTotal = getElementValue('balance-total');
    const balanceTotal = balanceCurrentTotal - withdrawInputFiled;
    if(withdrawInputFiled > balanceCurrentTotal){
        alert('insufficient balance');
        return;
    }
    //I wrote this line after if because to fixed withdraw add issue
    const withdrawTotalAmmount = withdrawPreviousAmmount + withdrawInputFiled;
    setTextValue('withdraw-total', withdrawTotalAmmount);
    setTextValue('balance-total', balanceTotal);

})