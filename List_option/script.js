function validateForm() {
	var bill_amount = document.forms["tip_calculator"]["bill_amount"].value;
	var num_cust = document.forms["tip_calculator"]["num_cust"].value;
	var percentage = document.forms["tip_calculator"]["tip_percentage"].value;

	if (bill_amount == "" && num_cust == "") {
		alert("Both fields are empty. Please fill out the form.");
		return;
	}
	if (bill_amount == "" && num_cust != "") {
		alert("Amount of bill is empty");
		return;
	}

	if (num_cust == "" && bill_amount != "") {
		alert("Number of customers is empty");
		return;
	}

	if (isNaN(bill_amount) || isNaN(num_cust)) {
		alert("Input is not valid");
		return;
	}

	if (bill_amount < 0 || num_cust < 0) {
		alert("Input given is a negative number.");
		return;
	}

	CalcTip(bill_amount, num_cust, percentage);
	return false;
}

function CalcTip(bill, num_cust, percentage) {
	percentage = parseFloat(percentage);
	bill = parseFloat(bill);
	num_cust = parseInt(num_cust);

	var result = Math.round((bill * percentage / num_cust)*100)/100;

	document.getElementById("tip_result").innerHTML = result.toFixed(2);
	document.getElementsByClassName("solution")[0].style.display = 'block';
	document.forms["tip_calculator"]["bill_amount"].value = "";
	document.forms["tip_calculator"]["num_cust"].value = "";
}

