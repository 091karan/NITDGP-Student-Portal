
// Validation of the Sign Up form
function validateSignUp(inputfield)
{
  switch(inputfield)
  {
    case 'firstName': patt = /^[a-zA-Z]+$/; display = "* Please use English alphabets for first name!"; break;
    case 'lastName': patt = /^[a-zA-Z]+$/; display = "* Please use English alphabets for last name!"; break;
    case 'email': patt = /^[a-zA-Z0-9.]+$/; display = "* Please use alphanumerics for email address!"; break;
    case 'psw': patt = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                display = "* Your password must contain one lowercase alphabet, one uppercase alphabet, one digit, one special character and length must be in between 8 and 16.";
                break;
    case 'roll': patt = /^[A-Z0-9]+$/; display = "* Please use alphanumerics for roll number!"; break;
    case 'dept': display = "* Please choose valid option for branch!"; break;
    case 'sem': display = "* Please choose valid option for semester!"; break;
    case 'graduation': patt = /^[0-9]$/; display = "* Graduation year must contain digits"; break;
  }

  var val = document.forms["signup"][inputfield].value;

  if(inputfield == 'email')
  {
    var mail = val.split('@')
    var res = true;
    if(!patt.test(mail[0]))
    {
      res = false;
    }
    if(mail[1] != "btech.nitdgp.ac.in")
    {
      display = display +"\n* Please use college email ID!";
      res = false;
    }
    if(res == false)
      document.getElementById(inputfield).innerText = display;
    else
      document.getElementById(inputfield).innerText = '';
    return res;
  }
  else
  {
    if(!patt.test(val))
    {
      document.getElementById(inputfield).innerText = display;
      return false;
    }
    else
      document.getElementById(inputfield).innerText = '';
  }
}
