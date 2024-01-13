let navpp = document.getElementById("navpp");

let Profile_Picture = localStorage.getItem("Profile_Picture");

navpp.src = Profile_Picture;

navpp.onclick = (e) => {
    e.preventDefault();
    location = "profile.html"
}