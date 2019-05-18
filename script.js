function validateForm() {
	var bill_amount = document.forms["tip_calculator"]["bill_amount"].value;
	var num_cust = document.forms["tip_calculator"]["num_cust"].value;
	var percentage = document.getElementById("selector").value;

	if (bill_amount == "" && num_cust == "" && percentage=="0") {
		alert("Both fields are empty. Please fill out the form.");
	}
	if (bill_amount == "" && num_cust != "" && percentage != "0") {
		alert("Amount of bill is empty");
	}

	if (num_cust == "" && bill_amount != "" && percentage != "0") {
		alert("Number of customers is empty");
	}

	if (percentage == "0" && num_cust != "" && bill_amount != "") {
		alert("Tip percentage is empty!");
	}

	if (isNaN(bill_amount) || isNaN(num_cust)) {
		alert("Input is not valid");
	}

	if (bill_amount < 0 || num_cust < 0) {
		alert("Input given is a negative number.");
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
	document.getElementById("selector").value = "0";
}

