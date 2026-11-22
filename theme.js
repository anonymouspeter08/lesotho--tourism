if (localStorage.getItem("theme") == "dark") {
  document.documentElement.setAttribute("data-bs-theme", "dark");
}

function setButtonText() {
  var button = document.getElementById("themeButton");

  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    button.innerHTML = "Light mode";
  } else {
    button.innerHTML = "Dark mode";
  }
}

function changeTheme() {
  var theme = "dark";

  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    theme = "light";
  }

  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
  setButtonText();
}
