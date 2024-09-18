// document.getElementById("id").addEventListener('click'. function())
// search : form searching reloading the page

//Step-1: set event handler
// document.getElementById('button-login').addEventListener('click', function(event){
//     //step-2: prevent default behavior(prevent reloading browser)
//     event.preventDefault();

//     //step-3: set the phone number and pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin- number').value;
//     // console.log(phoneNumber, pinNumber);

//     // STEP-5: VALIDATION PHONE NUMBER OR PIN NUMBER
//     //This is temporary, you should do like this.
//     if (phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You are logged in')
//     }
//     else{
//         alert("Wrong phone number or password")
//     }
// })

// //step 1- added event handler
document.getElementById('button-login').addEventListener('click', function(event){
//step 2- prevent default behavior
    event.preventDefault();

    //step 3- set the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin- number').value;
    // console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in')
        window.location.href = '/home.html'
    }
    else{
        alert('Invalid phone number or pin');
    }
});