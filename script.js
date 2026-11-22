function calculate() {
  var lodge = document.getElementById("lodge");
  var nights = document.getElementById("nights").value;
  var rooms = document.getElementById("rooms").value;
  var result = document.getElementById("costResult");

  if (lodge.value == "") {
    result.innerHTML = "Choose a lodge to see the cost.";
    return;
  }
  if (nights < 1) {
    result.innerHTML = "The nights must be at least 1.";
    return;
  }
  if (rooms < 1) {
    result.innerHTML = "The rooms must be at least 1.";
    return;
  }

  var price = Number(lodge.value);
  var lodgeName = lodge.options[lodge.selectedIndex].text;
  var total = price * nights * rooms;

  result.innerHTML = "Lodge: " + lodgeName + "<br>" +
    "Nights: " + nights + "<br>" +
    "Rooms: " + rooms + "<br>" +
    "<strong>Total: M" + total + "</strong>";
}

setButtonText();
