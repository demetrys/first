function touchRock() {
  var userName = prompt("Як тебе звати?");
    if (userName) {
      alert("Здоровеньки були, " + userName + ".");
      document.getElementById("rockImg").src="img/rock_happy.png";
    }
}
