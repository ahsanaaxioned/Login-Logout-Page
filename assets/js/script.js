// global variable declaration strat here
const form = document.querySelector(".my-form"),
  hamburger = document.querySelector(".hamburger"),
  navbar = document.querySelector(".navbar"),
  btn = document.querySelector(".btn"),
  wrapper = document.querySelector(".wrapper")
  login = document.querySelector(".login"),
  email = document.querySelector(".username"),
  password = document.querySelector(".Password"),
  usernameRegex = /^([A-za-z-0-9._]{4,})([A-za-z\@?\s]{1,})/,
  passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{5,16}$/,
  emailRegex = /^([A-Za-z0-9]{3,})\@([A-Za-z]{3,})\.([A-Za-z]{2,6})$/,
  isLogin = false
  user_name = "teamaxioned",
  email_login = "axioned@gmail.com",
  passLogin = "prdxn@0442022",
  data = JSON.parse(localStorage.getItem("userlogin")),
  html = document.querySelector("html"),
  obj = {
    usernameData: user_name,
    emailData: email_login,
    passwordData: passLogin,
    is_login : isLogin
  };
let array = [];

// global variable declaration end here
// hamburger event start here
if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    html.classList.toggle("hidden");
  });
};
// hamburger event end here
array.push(obj);
const ls = JSON.stringify(array);
localStorage.setItem("userlogin", ls);

// submit event start here
if (login) {
  login.addEventListener("click", (e) => {
    e.preventDefault();
    const fail = document.querySelectorAll(".fail");
    if ((email.value) && (password.value) && (fail.length === 0)) {
      // setting href to home page here
      data.forEach((element, index) => {
        if (((email.value === element.usernameData) ||
          (email.value === element.emailData))
          && ((password.value === element.passwordData))) {
          window.location.href = "./index.html";
        }else{
          const failMsg = document.createElement("span");
          failMsg.className = "wrong";
          failMsg.innerText = "please enter a valid details"
          wrapper.insertBefore(failMsg,wrapper.children[1]);
        }
      });
    } else {
      validate(email, usernameRegex, emailRegex);
      validate(password, passwordRegex);
    }
  });
};
// submit event end here
// button event start here for redirect to login page
if(btn){
  btn.addEventListener("click",()=>{
    window.location.href= "http://127.0.0.1:5500/login.html";
  });
  };
  // button event end here for redirect to login page
// function for validating start here
function validate(field, userRegEx, emailRegEx) {
  const inputGroup = field.parentElement;
  error = inputGroup.querySelector(".error"),
    str = field.value;
  if (str === "") {
    inputGroup.classList.add("fail");
    error.innerText = "*field is required";
    inputGroup.classList.remove("success");
  } else if (str.length < 5 || str.length > 40) {
    inputGroup.classList.add("fail");
    error.innerText = "*it must be between 5 to 40 characters";
  } else if (!(userRegEx.test(str) || emailRegEx.test(str))) {
    inputGroup.classList.add("fail");
    inputGroup.classList.remove("success");
    error.innerText = "*please enter a valid username or email";
  } else {
    inputGroup.classList.remove("fail");
    inputGroup.classList.add("success");
  }
};
// function for validating end here
// input event start here
if (email) {
  email.addEventListener("blur", () => {
    validate(email, usernameRegex, emailRegex);
  });
};

if (password) {
  password.addEventListener("blur", () => {
    validate(password, passwordRegex);
  })
};
// input event end here
