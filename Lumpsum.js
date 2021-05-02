var InvestmentValue = document.querySelector(".investmentValue");
var Rate = document.querySelector(".rate");
var time = document.querySelector(".years");
var button = document.querySelector(".button");
var heading = document.querySelector(".h");
var heading1 = document.querySelector(".h1");
var heading2 = document.querySelector(".h2");
button.addEventListener("click", calculate);

function calculate() {
  event.preventDefault();
  var p = InvestmentValue.value;
  var r = Number(Rate.value) / 100;
  var t = time.value;

  var a = Math.floor(p * (1 + r) ** t);
  var j = a - p;
  heading1.innerHTML = "Invested Amount: ₹ " + p;
  heading2.innerHTML = "Estimated Returns: ₹ " + j;
  heading.innerHTML = "Total Value: ₹ " + a;
}
