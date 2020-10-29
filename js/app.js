const form = document.querySelector("[data-form]");
const firstName = document.querySelector("[data-fn]");
const lastName = document.querySelector("[data-ln]");
const email = document.querySelector("[data-email]");
const password = document.querySelector("[data-password]");

function getUserInput(e) {
  e.preventDefault();

  const fnInput = firstName.value.trim();
  const lnInput = lastName.value.trim();
  const mailInput = email.value.trim();
  const passInput = password.value.trim();

  checkInput(fnInput, lnInput, mailInput, passInput);
}

function checkInput(fnInput, lnInput, mailInput, passInput) {
  if (fnInput === "") {
    errorHandler(firstName, "First Name cannot be empty");
  }
  if (lnInput === "") {
    errorHandler(lastName, "Last Name cannot be empty");
  }

  if (mailInput === "") {
    errorHandler(email, "Required");
  } else if (validateEmail(mailInput) === false) {
    errorHandler(email, "Looks like this is not an email");
  }

  if (passInput === "") {
    errorHandler(password, "Password cannot be empty");
  }
}

function errorHandler(field, errorMsg) {
  const remove = document.querySelectorAll(" input");
  const formControl = field.parentNode;
  const errorText = formControl.querySelector(".error-text");

  if (field) {
    formControl.classList.add("error");
    errorText.innerText = errorMsg;
  }

  remove.forEach((ele) => {
    ele.addEventListener("input", () => ele.parentNode.classList.remove("error"));
  });
}

// validateEmail() stackoverflow https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(value) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

form.addEventListener("submit", getUserInput);
