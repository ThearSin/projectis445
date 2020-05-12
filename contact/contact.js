function validateForm() 
{
    var regexpname = /^[a-zA-Z]{1,20}+$/; 
    var regexpemail = /^[a-zA-Z]value.indexOf("@")/;  
    var regexpphonenumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var x = document.forms["contact"]["name"].value;
    var y=document.forms["contact"]["email"].value;
    var z=document.forms["contact"]["phonenumber"].value;
    if((x.match(regexpname))&&(y.match(regexpemail)&&(z.match(regexpphonenumber))) 
{
    window.location.assign("confirm.html")
}
    else
{
    alert(" Name must be filled out");
        return false;
}
}