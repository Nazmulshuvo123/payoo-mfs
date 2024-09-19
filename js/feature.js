//Show cash out button
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    //show the cash out button click
    console.log("Cash out button clicked");
    document.getElementById("cash-out-form").classList.remove("hidden");

    //hide the  add money form
    document.getElementById("add-money-form").classList.add("hidden");
  });

//show add money button

document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
  });
