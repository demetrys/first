function touchRock() {
  var userName = prompt("Як тебе звати?");
    if (userName) {
      alert("Здоровенькі були, " + userName + ".");
      document.getElementById("rockImg").src="img/rock_happy.png";
    }
}
