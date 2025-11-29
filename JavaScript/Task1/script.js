const nameTF = document.getElementById("nameTF")
const email = document.getElementById("email")
const passwordTF = document.getElementById("passwordTF")
const Cpassword = document.getElementById("Cpassword")
const numberTF = document.getElementById("numberTF")

const nameERR = document.getElementById("nameERR")
const emailERR = document.getElementById("emailERR")
const passwordERR = document.getElementById("passwordERR")
const CpasswordERR = document.getElementById("CpasswordERR")
const numberERR = document.getElementById("numberERR")

function formValidate() {
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /\S+@\S+\.\S+/;

    let hasERR = false;

    if (nameTF.value.trim() === "") {
        hasERR = true;
        nameERR.innerHTML = "Name cannot be empty";
        nameERR.style.color = "red"

    }
    else {
        if (!nameRegex.test(nameTF.value)) {
            hasERR = true;
            nameERR.innerHTML = "name cannot have any special char or numbers";
            nameERR.style.color = "red";
        }
    }


    if (email.value.trim() === "") {
        hasERR = true;
        emailERR.innerHTML = "email should not be empty";
        emailERR.style.color = "red";
    }
    else {
        if (!emailRegex.test(email.value)) {
            hasERR = true;
            emailERR.innerHTML = "email pattern did not match";
            emailERR.style.color = "red";
        }
    }


    if (passwordTF.length < 6) {
        hasERR = true;
        passwordERR.innerHTML = "Password must be at least 6 characters";

        
    }


    if (passwordTF.value !== Cpassword.value) {
        CpasswordERR.innerText = "Passwords do not match";
        hasERR= false;
    }

    


    return !hasERR
}
