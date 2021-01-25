function mlpCalculator(p, i, n){
	return p*((i*(Math.pow((1+i),n)))/(Math.pow((1+i),n)-1));
}

function mlaCalculator(m, i, n){
	return m/((i*(Math.pow((1+i),n)))/(Math.pow((1+i),n)-1));
}

function mlp(){
	var principle = document.getElementById("mortgageAmount_MLP").value;
	var duration =  document.getElementById("mortgagePeriod_MLP").value*12;
	var interestRate = document.getElementById("interestRate_MLP").value/(12*100);

	var payment = mlpCalculator(principle, interestRate, duration);
	var totalCost = payment.toFixed(2)*duration;

	document.getElementById("totalCost_MLP").innerHTML = totalCost.toFixed(2);
	document.getElementById("payment_MLP").innerHTML = payment.toFixed(2);
}

function mla(){
	var payment = document.getElementById("payment_MLC").value;
	var duration = document.getElementById("mortgagePeriod_MLC").value*12;
	var interestRate = document.getElementById("interestRate_MLC").value/(12*100);

	var maxLoan = mlaCalculator(payment, interestRate, duration);
	var totalCost = payment*duration;

	document.getElementById("totalCost_MLC").innerHTML = totalCost.toFixed(2);
	document.getElementById("maxLoan_MLP").innerHTML = maxLoan.toFixed(2);

}