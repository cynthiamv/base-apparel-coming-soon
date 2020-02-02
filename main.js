const form = document.querySelector("form");
const userEmail = document.querySelector("#email");
const btnSubmit = document.querySelector("#btn-submit");
const emailMessage = document.querySelector(".error-message");


const re = /^([a-z\d\._-]+)@([a-z\d-_]+)\.([a-z]{2,8})([a-z]{2,8})?$/;

const emailValidation = (e) => {
    e.preventDefault();
    if(!userEmail.value) {
        emailMessage.innerHTML = `<p>Please enter an email</p>`
        userEmail.classList.add("error")
    } else if (!re.test(userEmail.value)) {
        emailMessage.innerHTML = `<p>Please enter a valid email</p>`
        userEmail.classList.add("error")
    } else {
        emailMessage.innerHTML = `You have been added to our newsletter list.`
        userEmail.classList.remove("error")
        emailMessage.classList.add("success-message")
    }
};
btnSubmit.addEventListener("click", emailValidation); 