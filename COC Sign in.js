//passwordHideShow
let eye = document.getElementById("eye");
let eyeSlash = document.getElementById("eyeSlash");
let password = document.getElementById("password");
let request = document.getElementById("request");
let error = document.getElementById("error");

eye.onclick = function () {
  eye.style.display = "none";
  eyeSlash.style.display = "block";
  if ((password.type = "password")) {
    password.type = "text";
  }
};
eyeSlash.onclick = function () {
  eyeSlash.style.display = "none";
  eye.style.display = "block";
  if ((password.type = "text")) {
    password.type = "password";
  }
};

let lsEmail = localStorage.getItem("Email");
let lsPassword = localStorage.getItem("Password");

request.onclick = (e) => {
  e.preventDefault();
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;
  if(Email !== lsEmail || Password !== lsPassword){
    error.style.display = "block";
  }
  else{
    location = "Clash of cash.html";
  }
}

email.addEventListener("focus", () => {
    error.style.display = "none";
    box.style.height = "340px";
});

password.addEventListener("focus", () => {
    error.style.display = "none";
});
