function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;      
    var email = document.reg_form.email;    
    var mobile = document.reg_form.mobile;     
    var enquiry = document.reg_form.enquiry;  

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    

    if (isNaN(fname)!= true) {    
        alert("Invalid Name");    
        fname.focus();    
        return false;    
    } 

    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    if (isNaN(lname)!= true) {    
        alert("Invalid Last Name");    
        fname.focus();    
        return false;    
    }    
  
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }  
    if (isNaN(mobile)==false) {    
        alert("Please Enter a Valid Phone Number");    
        fname.focus();    
        return false;    
    }    


    if (enquiry.value.length <= 0) {    
        alert("Fill out your Enquiry");    
        mobile.focus();    
        return false;    
    }    
    alert("Yor Enquiry has been Recorded. Press Reset");    
        mobile.focus();    
        return false;

}    

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

} 

form.addEventListener('submit', (e) => {
    let message = []
    if(fname.value==='' || fname.value ==null){
        messages.push('Name is required')
    }
    if(messages.lenth > 0) {
        e.preventDefault()
        errorElement.innerText= messages.join(', ')
    }
})