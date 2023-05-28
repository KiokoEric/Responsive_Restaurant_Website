let nameError = document.querySelector("#nameError");
let phoneError = document.querySelector("#phoneError");
let emailError = document.querySelector("#emailError");
let fullname = document.querySelector("#fullName");
let phone = document.querySelector("#phoneNumber");
let email = document.querySelector("#email");
let Button = document.querySelector(".Button")


function validatename() {

    if (fullname.length == 0 ) {
        nameError.innerHTML = "Name is required"
    }
    else if (!fullname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name"
    }
    else {
        nameError.innerHTML = "valid"
    }
}
