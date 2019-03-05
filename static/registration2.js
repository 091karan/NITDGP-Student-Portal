


// Validation of the Sign Up form
function validateSignUp(inputfield)
{
  var patt;
  switch(inputfield)
  {
    case 'backlogs': patt = /^[\d]{1,2}$/;
                    display = "* Please enter a number!";
                    break;

    case 'roll': patt = /^[A-Z0-9]+$/; 
                display = "* Please use capital alphanumerics for roll number!"; 
                break;

    case 'dept': display = "* Please choose valid option for branch!"; 
                  break;

    case 'sem': display = "* Please choose valid option for semester!";
                 break;

    case 'graduation': patt = /^(20[1-2][0-9])$/; 
                      display = "* Graduation year must contain digits";
                       break;
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

  else if(inputfield == 'sgpa'){
    patt2 = /^[0-9]\.([0-9]+)$/ ;
    if (!patt2.test(val))
    {
      document.getElementById(inputfield).innerText = "Please enter in decimal format";
        return false;
    }

    else{
        document.getElementById(inputfield).innerText = '';
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
 




function semester(){

  var sem_value2 = (document.forms["signup"]["sem"].value)[0];
  var sem_value = sem_value2;
  while (sem_value < 8)
  {
    var st = "Sem" + sem_value;
    document.getElementById(st).style.display ="none";
    sem_value++;
  }

  while (sem_value2 >=1)
  {
    sem_value2--;
    var st1 ="Sem" + sem_value2;
    document.getElementById(st1).style.display ="block";
    
  }


  

}


function  submit_validation(){

  var x = document.querySelectorAll('input');
  console.log(x);

}





