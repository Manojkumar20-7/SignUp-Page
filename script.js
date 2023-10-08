function Validate(){
    var pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var email=document.getElementById("email").value;

    var paspattern=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    var password=document.getElementById("pwd").value;
    var conpas=document.getElementById("conpas");

    if(!pattern.test(email))
    {
        alert("Invalid Email");
        return;
    }

    if(!paspattern.test(password))
    {
        alert("Invalid password format. Please make sure your password meets the criteria:\n\n" +
                "1. At least 8 characters\n" +
                "2. At least one uppercase letter\n" +
                "3. At least one special character (!@#$%^&*)\n" +
                "4. At least one number");
        return;
    }

    if(password != conpas)
    {
        alert("Password and Confirm Password should be same");
        return;
    }

}