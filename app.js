const form  = document.querySelector('.form');
const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");



form.addEventListener("submit", function(e){
    e.preventDefault();

    const fnameValue = firstName.value.trim();
    const lnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue= password.value.trim();

    if(fnameValue === ""){
        setError(firstName, "First Name cannot be empty"); 
     }else{
         setSuccess(firstName);
    }
    

    if(lnameValue === "") {
        setError(lastName, "Last Name cannot be empty");
    }else{
        setSuccess(lastName);
    }
    

    if(emailValue === ""){
        setError(email, "Email cannot be blank");
    } 
    else if(!isEmail(emailValue)){
        setError(email, "Look like this is not an email");
    }else{
        setSuccess(email);
    }

    if(passwordValue === ""){
        setError(password, "Password cannot be empty");
    }else{
        setSuccess(password);
    }
    
});

function setError(input, error){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.classList.add("error");
    formControl.classList.add("error");

    small.textContent = error;
}

function setSuccess(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.classList.add("success");

     small.classList.add("success");
     small.textContent = "";
}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}