function validate()
{
    const F_name=document.getElementById("Fi_name").value;
    const L_name=document.getElementById("La_name").value;
    const address=document.getElementById("address").value;
    const phone=document.getElementById("phone").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("pass").value;
    const F_nameError=document.getElementById("Fi_Name-Error");
    const L_nameError=document.getElementById("La_Name-Error");
    const phoneError=document.getElementById("Phone-Error");
    const emailError=document.getElementById("Email-Error");
    const addressError=document.getElementById("Address-Error");
    const passError=document.getElementById("Pass-Error");
    F_nameError.textContent="";
    L_nameError.textContent="";
    phoneError.textContent="";
    emailError.textContent="";
    addressError.textContent="";
    passError.textContent="";
    let nameregex = /^[a-zA-Z0-9_]{4,19}$/;
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let phoneregex=/^\d{10}$/;
        if(F_name=="" || (!nameregex.test(F_name)))
        {
            F_nameError.textContent="Please  enter your First Name is between 4 to 19 characters long and can contain letters";
            return false;
        }
        if(L_name=="" || (!nameregex.test(L_name)))
        {
            L_nameError.textContent="Please enter your Last Name is between 4 to 19 characters long and can be contain letters";
            return false;
        }
        if(address=="")
        {
            addressError.textContent="Please Enter your address";
            return false;
        }
        if(email=="" || (!emailregex.test(email)))
        {
            emailError.textContent="please enter your email matches @symbol can include letters, numbers, and certain special characters like ., %, +, -.";
            return false;
        }
        if(password=="" || (!passwordregex.test(password)))
        {
            passError.textContent="please enter your  pasword atleast one lowercase,uppercase digit  8 characters properly";
            return false;
        }
    return true;
}