const formButton = document.getElementById('button');

formButton.onclick = function() {
event.preventDefault();
const name = document.getElementById('name');
const email = document.getElementById('Email');
let className = name.classList;
let classEmail = email.classList;
if (name.value === "") {
	className.add ("alert");
  } else {className.remove ("alert");
  }
if (email.value === "") {
	classEmail.add ("alert");
  } else {classEmail.remove ("alert");
  }
if (name.value != "" && email.value != "") {
	alert("Thank you, your message is sent!")
  }
}