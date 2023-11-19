const withdraw_btn = document.querySelector("#withdraw_btn");

withdraw_btn.addEventListener("click", function () {
  const withdraw_input = parseFloat(
    document.querySelector("#withdraw_input").value
  );
  document.querySelector("#withdraw_input").value = "";
  // Customize And Get Data From input

  const withdrawTotal = parseFloat(
    document.querySelector("#withdrawTotal").innerHTML
  );
  // Total Deposit Amount

  const overallAmount = parseFloat(
    document.querySelector("#overallAmount").innerHTML
  );
  if (withdraw_input <= overallAmount) {
    const sumOfWithdrawTotal = overallAmount - withdraw_input;
    document.querySelector("#overallAmount").innerHTML = sumOfWithdrawTotal;
    swal("Congratulations!", "Your Withdraw has been completed!", "success");

    // Total Deposit Amount
    const sumOfWithdraw = withdraw_input + withdrawTotal;
    document.querySelector("#withdrawTotal").innerHTML =
      sumOfWithdraw.toFixed(2);
    // Total Deposit Amount end
  } else if (isNaN(withdraw_input)) {
    swal("You didn't type the digit!", "Please Give An Amount", "warning");
  } else {
    swal("Sorry!", "Insufficient Balance", "error");
  }
});
