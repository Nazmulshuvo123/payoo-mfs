//Add money to the account
/**
 * s-1: Add ann event handler to the add money button inside the form and Prevent page reload after form submit
 * s-2: Get money to be added to the account balance
 */

//step-1: Add ann event handler to the add money button inside the form 

document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
        //Prevent page reload after form submit
        event.preventDefault();

   //step-2:Get money to be added to the account balance

   const addMoneyInput = document.getElementById('input-add-money').value;
   
   //Get pin number provided
   const inputPinNumber = document.getElementById('input-pin').value;
   console.log(addMoneyInput, inputPinNumber);
       
})