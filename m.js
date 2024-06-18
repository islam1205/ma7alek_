var password = document.getElementById("password");
var email = document.getElementById("email");
function welcome() {
  if (email.value != "ma7alek") {
    alert("wrong email");
  } else if (password.value != "0000") {
    alert("wrong password");
  } else {
    alert("welcome");
    window.location.href="file:///I:/web/%D9%85%D9%88%D9%82%D8%B9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%82%20%D8%A7%D9%84%D8%A7%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A/shoping.html"
  }
}
