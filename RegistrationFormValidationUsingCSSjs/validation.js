function validate(){

   let form = document.AdmissionForm;

if( form.fname.value == "" )
   {
     alert( "Enter Your First Name!" );
     form.fname.focus() ;
     return;
   }


if( form.lname.value == "" )
   {
     alert( "Enter Your Last Name!" );
     form.lname.focus() ;
     return;
   }
  

if ( ( AdmissionForm.sex[0].checked == false ) && ( AdmissionForm.sex[1].checked == false ) )
   {
   alert ( "Choose Your Gender: Male or Female" );
   return false;
   }  


if( form.fathername.value == "" )
   {
     alert( "Enter Your Father Name!" );
     form.fathername.focus() ;
     return;
   }
  

if( form.dob.value == "" )
   {
     alert( "Enter your DOB!" );
     form.dob.focus() ;
     return;
   }


if( form.mobileno.value == "" ||isNaN( form.mobileno.value) ||form.mobileno.value.length != 10 )
   {
     alert( "Enter your Mobile No. in the format 123." );
     form.mobileno.focus() ;
     return;
   }

   return( true );


if( form.hs.value == "" )
   {
     alert( "Enter Your High School Name!" );
     form.hs.focus() ;
     return;
   }


if( form.paddress.value == "" )
   {
     alert( "Enter Your Permanent Address!" );
     form.paddress.focus() ;
     return;
   }


if( form.pincode.value == "" || isNaN( form.pincode.value) || form.pincode.value.length != 6 )
   {
     alert( "Enter your pincode in format ######." );
     form.pincode.focus() ;
     return;
   }


if( form.year.value == "-1" )
   {
     alert( "Enter Your City!" );
     form.year.focus() ;
     return;
   }  


  var email = form.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
{
     alert("Enter your correct email ID")
     form.emailid.focus() ;
     return;
}


if( form.course.value == "-1" )
   {
     alert( "Enter Your Course!" );
         return;
   }  

   
}
   
