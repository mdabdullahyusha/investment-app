const ctx = document.getElementById("investChart");

var chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Total Amount", "Withdraw Amount", "Deposit Amount"],
    datasets: [
      {
        label: "৳",
        data: [0, 0, 0],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const addDeposit = document.querySelector(".deposit_btn");

addDeposit.addEventListener("click", function () {
  const overallAmount = parseFloat(
    document.querySelector("#overallAmount").innerText
  );
  const withdrawTotal = parseFloat(
    document.querySelector("#withdrawTotal").innerText
  );
  const depositTotal = parseFloat(
    document.querySelector("#depositTotal").innerText
  );

  let depositData = chart.data.datasets[0].data;
  let withdrawData = chart.data.datasets[0].data;
  let overallData = chart.data.datasets[0].data;

  overallData[0] = overallAmount;
  withdrawData[1] = withdrawTotal;
  depositData[2] = depositTotal;
  chart.update();
  console.log(depositData, withdrawData, overallData);
});

const withdrawDeposit = document.querySelector("#withdraw_btn");

withdrawDeposit.addEventListener("click", function () {
  const overallAmount = parseFloat(
    document.querySelector("#overallAmount").innerText
  );
  const withdrawTotal = parseFloat(
    document.querySelector("#withdrawTotal").innerText
  );
  const depositTotal = parseFloat(
    document.querySelector("#depositTotal").innerText
  );

  let depositData = chart.data.datasets[0].data;
  let withdrawData = chart.data.datasets[0].data;
  let overallData = chart.data.datasets[0].data;

  overallData[0] = overallAmount;
  withdrawData[1] = withdrawTotal;
  depositData[2] = depositTotal;
  chart.update();
  console.log(depositData, withdrawData, overallData);
});
