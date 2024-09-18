// document.getElementById("id").addEventListener('click'. function())
// search : form searching reloading the page

//Step-1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    //step-2: prevent default behavior(prevent reloading browser)
    event.preventDefault();
    console.log('login button click')

    //step-3: set the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin- number').value;
    console.log(phoneNumber, pinNumber);
})