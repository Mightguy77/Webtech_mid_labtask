let darkMode = false;

function toggleTheme() {
  if (darkMode) {

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    document.getElementById("themeBtn").innerHTML = "Dark Mode";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("themeBtn").innerHTML = "Light Mode";

  }
  darkMode = !darkMode;
}

function setGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = document.getElementById("greeting");

  if (hour < 12) {
    greeting.innerHTML = "Good Morning";
  } else if (hour < 18) {
    greeting.innerHTML = "Good Afternoon";
  } else {
    greeting.innerHTML = "Good Evening";
  }
}

let about, projects, contact;
let nameTF, emailTF, msgTF;
let nameERR, emailERR, msgERR, successMSG;

function initPage() {
  setGreeting();

  about = document.getElementById("about");
  projects = document.getElementById("projects");
  contact = document.getElementById("contact");

  nameTF = document.getElementById("nameTF");
  emailTF = document.getElementById("emailTF");
  msgTF = document.getElementById("msgTF");

  nameERR = document.getElementById("nameERR");
  emailERR = document.getElementById("emailERR");
  msgERR = document.getElementById("msgERR");
  successMSG = document.getElementById("successMSG");
}

function showSection(section) {

  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";


  document.getElementById(section).style.display = "block";
}

function validateForm() {
  let valid = true;

  if (nameTF.value.trim() === "") {
    nameERR.innerHTML = "Required";
    valid = false;
  } else {
    nameERR.innerHTML = "";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailTF.value.match(emailPattern)) {
    emailERR.innerHTML = "Invalid email";
    valid = false;
  } else {
    emailERR.innerHTML = "";
  }

  if (msgTF.value.trim().length < 10) {
    msgERR.innerHTML = "Message too short";
    valid = false;
  } else {
    msgERR.innerHTML = "";
  }

  if (valid) {
    successMSG.innerHTML = "Message sent successfully!";
    nameTF.value = "";
    emailTF.value = "";
    msgTF.value = "";
  } else {
    successMSG.innerHTML = "";
  }
}
