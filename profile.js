let navpp = document.getElementById("navpp");
let pp = document.getElementById("pp");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userTel = document.getElementById("userTel");
let logout = document.getElementById("logout");

let Profile_Picture = localStorage.getItem("Profile_Picture");
let First_Name = localStorage.getItem("First_Name");
let Last_Name = localStorage.getItem("Last_Name");
let Email = localStorage.getItem("Email");
let Tel = localStorage.getItem("Tel");

let Full_Name = `${First_Name} ${Last_Name}`;
userName.textContent = Full_Name;
userEmail.textContent = Email;
userTel.textContent = Tel;
navpp.src = Profile_Picture;
pp.src = Profile_Picture;

logout.onclick = (e) => {
    e.preventDefault();
    location = "COC Sign in.html"
}