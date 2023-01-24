function show_popup(){
  document.querySelector('.popup').style.display="flex";
}
function close_popup(){
  document.querySelector('.popup').style.display='none';
}
// CALCULATOR
function licz() {
  let suma = 0;
  if (document.getElementById("option1").checked) {suma = suma + 25}
  if (document.getElementById("option2").checked) {suma = suma + 22}
  if (document.getElementById("option3").checked) {suma = suma + 35}
  if (document.getElementById("option4").checked) {suma = suma + 25}
  if (document.getElementById("option5").checked) {suma = suma + 27}
  if (document.getElementById("radio1").checked) {suma = suma * 2}
  if (document.getElementById("option2").checked) {suma = suma * 3}
  document.getElementById("total").value = suma;
  }

// E-MAIL REGEX
  function ValidateEmail(inputText)
  {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
  {
  document.form.email.focus();
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  document.form.email.focus();
  return false;
  }
  }