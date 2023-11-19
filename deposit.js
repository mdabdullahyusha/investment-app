const deposit_btn = document.querySelector(".deposit_btn");

deposit_btn.addEventListener("click", function () {
  const depositInput = parseFloat(
    document.querySelector("#deposit_input").value
  );
  document.querySelector("#deposit_input").value = "";
  // Customize And Get Data From input

  if (isNaN(depositInput)) {
    swal("You didn't type the digit!", "Please Give An Amount", "warning");
  } else {
    const depositTotal = parseFloat(
      document.querySelector("#depositTotal").textContent
    );
    const sumOfDeposit = depositTotal + depositInput;

    localStorage.setItem("lsDeposit", sumOfDeposit);
    let lgDeposit = parseFloat(localStorage.getItem("lsDeposit"));
    console.log(typeof lgDeposit);

    document.querySelector("#depositTotal").innerHTML = lgDeposit;

    // Total Deposit Amount
    const overallAmount = parseFloat(
      document.querySelector("#overallAmount").innerHTML
    );
    const sumOfOverallAmount = overallAmount + depositInput;
    document.querySelector("#overallAmount").innerHTML =
      sumOfOverallAmount.toFixed(2);
    // OverAll Amount

    swal("Congratulations!", "Your Deposit has been completed!", "success");
    // Sweet Alert
  }
});
