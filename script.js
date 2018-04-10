const formButton = document.getElementById('button');

formButton.onclick = function() {
event.preventDefault();
const name = document.getElementById('name');
const email = document.getElementById('Email');
const form = document.getElementById('form');
const message = document.getElementById('formMessage');
let className = name.classList;
let classEmail = email.classList;
let classForm = form.classList;
let classMessage = message.classList;
if (name.value === "") {
	className.add ("alert");
  } else {className.remove ("alert");
  }
if (email.value === "") {
	classEmail.add ("alert");
  } else {classEmail.remove ("alert");
  }
if (name.value != "" && email.value != "") {
	classForm.add ("form__submitted");
	classForm.remove ("form");
	classMessage.add ("form__message");
	classMessage.remove ("message__notsubmitted");
  }
}