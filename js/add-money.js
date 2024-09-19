/**
 * 1. add event listener to the add money button(form submit)
 *  make sure to preventDefault so that page doesn't reloads
 * 2. get the money user wants to add also , get the pin number provided
 * 3. verify pin number
 * 4. get the current balance
 * 5. add money to be added with the current balance
 * 6. display  the balance in the DOM/UI  
 */
// step:1. add event listener to the add money button(form submit)
document.getElementById('btn-add-money').addEventListener('click', function(event){
    //make sure to preventDefault so that page doesn't reloads
    event.preventDefault();

//step:2. get the money user wants to add also , get the pin number provided

const addMoney = document.getElementById('input-add-money').value;

const pinNumber = document.getElementById('input-pin').value;
console.log(addMoney, pinNumber);

//step:3. verify pin number
if( pinNumber === '1234'){

    //step: 4. get the current balance
   const currentBalance = document.getElementById('account-balance').innerText;
   console.log(currentBalance);

   //step:5- add input money to the current balance
   const addMoneyInput = parseFloat(addMoney);
   const balance = parseFloat(currentBalance);
   
   const newBalance = balance + addMoneyInput;

   console.log(newBalance);

    //step-6: Update the current balance in the UI/DOM
   document.getElementById('account-balance').innerText = newBalance;
   
    
}
else{
    alert('wrong input')
}

})