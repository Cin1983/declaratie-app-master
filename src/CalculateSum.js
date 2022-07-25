let transactionSum = document.querySelector('.sum');

transactionSum.addEventListener('submit',CalculateSum);

function CalculateSum(e) {
const mySum = e.target.value;

if (!mySum){
	prompt('Please enter your expense!');
}else
prompt('Thank you!')
};




export default CalculateSum;