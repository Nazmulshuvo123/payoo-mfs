//Add money to the account
/**
 * s-1: Add ann event handler to the add money button inside the form and Prevent page reload after form submit
 * s-2: Get money to be added to the account balance and pin number also
 * s-3: verify pin number
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
//    console.log(addMoneyInput, inputPinNumber);

   //step-3: verify pin number
   if(inputPinNumber === '1234'){
    
    //step-4: get the current balance
    const currentBalance = document.getElementById('account-balance').innerText;
    // console.log(currentBalance);

    //step-5: add money with current balance


    const addMoneyNumber = parseFloat(addMoneyInput);
    const balance = parseFloat(currentBalance);
    const totalBalance = addMoneyNumber + balance;
    console.log(totalBalance);

    //step-6: Update the current balance in the UI/DOM
    document.getElementById('account-balance').innerText = totalBalance;

   }
   else{
    alert('Wrong password..! Please try later.')
   }
       
})