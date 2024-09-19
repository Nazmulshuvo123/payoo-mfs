/**
 * 1. add event listener to the cash out money button(form submit)
 *  make sure to preventDefault so that page doesn't reloads
 * 2. get the money user wants to cash out , get the pin number provided
 * 3. verify pin number
 * 4. get the current balance
 * 5. cash out money to be reduce form the current balance
 * 6. display the balance in the DOM/UI  
 */

//step-1. add event listener to the cash out money button(form submit)
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();//make sure to preventDefault so that page doesn't reloads
    
    //step-2. get the money user wants to cash out , get the pin number provided

    const getMoney = document.getElementById('cash-out-money').value;
    const getPin = document.getElementById('cash-out-pin').value;
    console.log(getMoney, getPin);

    //step-3. verify pin number
    if(getPin === '1234'){
        console.log('Money is cash out properly');


    //step-4. get the current balance 
    const balance = document.getElementById('account-balance').innerText;
    // console.log(balance);
    
    //step:5. cash out money to be reduce form the current balance
    const currentBalance = parseFloat(balance);
    const cashOut = parseFloat(getMoney);
    
    const newBalance = currentBalance - cashOut;
    console.log(newBalance);
    
   //step:6. display the reduce balance in the DOM/UI 
   
    document.getElementById('account-balance').innerText = newBalance;
    
    }
    else{
        alert('Wrong pin failed to cash out.!')
    }
})