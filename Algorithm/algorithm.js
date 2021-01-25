/*Mortgage Calculator Function*/
function mortgageCalc(p, i, n){
	return p*((i*(Math.pow((1+i),n)))/(Math.pow((1+i),n)-1));
}

function maxLoanCalc(m, i, n){
	return m/((i*(Math.pow((1+i),n)))/(Math.pow((1+i),n)-1));
}

function getMortgage(){
	var principle = 100000.00;
	var interest_yr = 4.00;
	var duration_yr = 30;
	var interest_m = interest_yr/1200;
	var duration_m = duration_yr * 12;

	var payment = (mortgageCalc(principle, interest_m, duration_m)).toFixed(2);
	console.log(payment);
	var totalCost = (payment * duration_m).toFixed(2);
	console.log(totalCost);
}

function getMaxLoan(){
	var interest_yr = 4;
	var duration_yr = 30;
	var interest_m = interest_yr/1200;
	var duration_m = duration_yr * 12;
	var payment = 477.42;

	var principle = (maxLoanCalc(payment, interest_m, duration_m)).toFixed(2);
	console.log(principle);
	var totalCost = (payment * duration_m).toFixed(2);
	console.log(totalCost);
}

getMortgage();
getMaxLoan();