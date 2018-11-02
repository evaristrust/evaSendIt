
window.onload = function(){


	document.getElementById("btn_register").onclick = function(event){

		event.preventDefault(); 
		var login = document.getElementById("login-form");
		// hide the login form and show the register form
		login.classList.remove("show"); 
		login.classList.add("hide");

		showElement("register-form");
	}

	document.getElementById("btn_login").onclick = function(event){

		event.preventDefault();
		var register = document.getElementById("register-form");
		// hide the register form and show the login form 
		register.classList.remove("show"); 
		register.classList.add("hide");

		showElement("login-form");
	}

}


function showElement(element_id){
	/*
	Show the element whose id is element_id
	*/
		var element = document.getElementById(element_id);
		
		element.classList.remove("hide"); 
		element.classList.add("show")
}