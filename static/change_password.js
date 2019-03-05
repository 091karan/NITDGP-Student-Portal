function validateSignUp(inputfield){

	var patt =  /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/; 

	if (inputfield == 'psw1')
	{
		var val = document.forms["change_pwd"][inputfield];
		if(!patt.test(val))
	      {
	        document.getElementById(inputfield).innerText = "* Your password must contain one lowercase alphabet, one uppercase alphabet,one digit, one special character and length must be in between 8 and 16."; 
	        return false;
	      }
        else
        {
        document.getElementById(inputfield).innerText = '';
      	}
	}

	else if(inputfield == 'psw2'){
		
	}

}