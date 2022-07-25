let transactionSum = document.querySelector('.sum');

transactionSum.addEventListener(onsubmit,CalculateSum);


function CalculateSum(e) {
let mySum = e.input.value;
}

export default CalculateSum;