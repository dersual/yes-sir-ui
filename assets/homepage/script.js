var signupButton = document.getElementById("signup");
var loginButton = document.getElementById("login");
var ownerOrFinderForm = document.getElementsByClassName("ownerOrFinder")[0];
var jobFinderButton = document.getElementById("job-finder");
var businessOwnerButton = document.getElementById("business-owner");
var signupForm = document.getElementById("signupForm");
var loginForm = document.getElementById("loginForm");
var isLogin;
var isJobFinder;

loginButton.addEventListener("click", function () {
  isLogin = true;
  displayFinderOrOwner();
});

signupButton.addEventListener("click", function () {
  isLogin = false;
  displayFinderOrOwner();
});

jobFinderButton.addEventListener("click", function () {
  isJobFinder = true;
  displayForms();
});

businessOwnerButton.addEventListener("click", function () {
  isJobFinder = false;
  displayForms();
});
function displayFinderOrOwner() { 
  ownerOrFinderForm.classList.remove("d-none");
  ownerOrFinderForm.classList.add("row");
  signupButton.classList.add("d-none");
  loginButton.classList.add("d-none"); 
  document.getElementById("restart").classList.remove("d-none") 
  document.getElementById("restart").classList.add("d-flex")
}

function displayForms() {
  if (isLogin) {
    loginForm.classList.remove("d-none");
    ownerOrFinderForm.classList.add("d-none");
  } else {
    signupForm.classList.remove("d-none");
    ownerOrFinderForm.classList.add("d-none");
  }
}

function displayDashboard() { 
    if(isJobFinder) {  
        window.location.href = "user-dashboard.html"
    } 
    else{  
        window.location.href = "business-dashboard.html"
    }
}
