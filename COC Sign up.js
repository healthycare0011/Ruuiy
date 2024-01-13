//passwordHideShow
let eye = document.getElementById("eye");
let eyeSlash = document.getElementById("eyeSlash");
let password = document.getElementById("password");
let request = document.getElementById("request");

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

//localStorage
function fileOpen() {
  let fileInput = document.getElementById("fileInput");
  fileInput.click();
}

fileInput.onchange = function () {
  let fr = new FileReader();
  fr.readAsDataURL(fileInput.files[0]);
  fr.onload = function () {
    const url = fr.result;
    localStorage.setItem("Profile_Picture", url);
  };
};

request.onclick = (e) => {
  e.preventDefault();
  let First_Name = document.getElementById("fname").value;
  let Last_Name = document.getElementById("lname").value;
  let Tel = document.getElementById("tel").value;
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;

  localStorage.setItem("First_Name", First_Name);
  localStorage.setItem("Last_Name", Last_Name);
  localStorage.setItem("Tel", Tel);
  localStorage.setItem("Email", Email);
  localStorage.setItem("Password", Password);
  location = "Clash of cash.html";
}
