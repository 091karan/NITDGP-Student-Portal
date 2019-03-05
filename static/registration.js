


// Validation of the Sign Up form
function validateSignUp(inputfield)
{
  var patt;
  switch(inputfield)
  {
    case 'contact': patt = /^[0-9]{10}$/gi; 
                    display = "* Contact should be of 10 digits.(Dont add 0 before)";
                     break; 

    case 'firstName': patt = /^(\s*[a-z]+\s*)+$/gi; 
                      display = "* Please use English alphabets for first name!"; 
                      break;

    case 'lastName': patt = /^(\s*[a-z]+\s*)+$/gi;
                     display = "* Please use English alphabets for last name!";
                      break;

    case 'email': patt = /^(([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?)$/gi;
                   display = "* Please use alphanumerics for email address!"; 
                   break;

    case 'psw': patt = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/; 
                display = "* Your password must contain one lowercase alphabet, one uppercase alphabet, one digit, one special character and length must be in between 8 and 16."; 
                break;

    
    case 'address': patt = /^[^($%*&@!#^)]+$/gi; display = "* Please use English alphabets for last name!"; break;
   
  }
  
  var val = document.forms["signup"][inputfield].value;

  if (inputfield == 'psw1'){
    var psw = document.forms["signup"]['psw'].value;
    if (val.localeCompare(psw) != 0){
      document.getElementById(inputfield).innerText = "The password didnt match";

    }
    else{
      document.getElementById(inputfield).innerText = "";
    }
  }

  else{

    if(!patt.test(val))
      {
        document.getElementById(inputfield).innerText = display;
        return false;
      }
      else{
        document.getElementById(inputfield).innerText = '';
      }
  }
}

 function DateValidation(){
  var temp = document.getElementById('abc').value;
  console.log(temp.gettime());
  console.log(typeof "temp");
 }


 



