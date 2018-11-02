function updateOrder(event, order_status, needed_action, row_id){
	/*
	Update the stautus of the given order.

	@input event: native JS event passed by anchor elements
	@input order_status: String. current status of the order, which can be complete or incomplete
	@input needed_action: String. What needs to be done to the order, which can be change or cancel
	@input row_id: Number. 0 based index of the order in tables order.

	Logic:

		if an order is completed, it cannot be modified


	*/

	 // disable default behavior of the anchor element which made the call

	 event.preventDefault();

	 // see if the status is completed or not?

	 if ( order_status === 'complete') {
	 	alert('Sorry, completed orders cannot be modified')
	 	return false;
	 }

	 // Order is incomplete. Check needed action

	 if (needed_action === 'change'){
	 	// change the order

	 	document.location = "destination.html";
	 }
	 else if (needed_action === 'cancel'){
	 	if (confirm('Are you sure you want to cancel your order?') == false){
	 		return false;
	 	}
	 
	 	document.getElementById("orders").deleteRow(row_id);
	 	
	 }
	 else {
	 	alert('Sorry but we donnot know what you wanted to do')
	 }
}

