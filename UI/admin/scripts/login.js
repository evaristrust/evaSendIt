function login(){
	/*
	Check if username and password is correct. If yes, redirect to admin dashboard.
	

	*/

	var username = document.getElementById('username').value.trim().toLowerCase();
	// username = username.strip();
	var password = document.getElementById('password').value.trim();

	// check the combination
	if (username==='admin' && password==='admin1234'){
		//it is good. persist the information in cookies and redirect
		document.location = 'dashboard.html'
	}
	else{
		document.getElementById('message').innerText='Username or password is incorrect';
		return false;
	}
}