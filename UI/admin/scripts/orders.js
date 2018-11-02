function updateStatus(event,to_status, row_id){
	/*
	Change teh status of the specific order

	@input to_status: String. Change the current status of the order
	@input row_id: Number. what is the number of the row in the list of orders

	*/

	event.preventDefault();

	// confirm the admin wants to make the changes?
	if (confirm("Are you sure you want to update the status of the order to " + to_status + "?") == false){
		return false;
	}
	
	var orders = document.getElementById('orders').rows[row_id].cells[8].innerHTML = to_status;

}

function updateCurrentDestinationCountry(){
	if (confirm("Are you sure you want to update the destination country?") === false){
		return false;
	}

	// get the selected country
    var country = document.getElementById("country").value;

	 document.getElementById("current_destination").innerText = country;
}