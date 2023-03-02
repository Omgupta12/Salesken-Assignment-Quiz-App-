// get all users data from localStorage
var userData = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("form").addEventListener("submit", signupFun);

// submit form
function signupFun() {
  event.preventDefault();

  let signupSuccess = true;

  // get value from input
  var obj = {
    user_name: document.getElementById("user_name").value,
    user_email: document.getElementById("user_email").value,
    user_password: document.getElementById("user_password").value,
  };

  // check if user already exist
  userData.map((el) => {
    if (el.user_email == obj.user_email) {
      signupSuccess = false;
    }
  });

  if (signupSuccess) {
    // add to local storage
    userData.push(obj);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup Successfull");
    // redirect to login
    window.open("login.html", "_self");
  } else {
    alert("Email is already registered, Use Different Email!");
  }
}
