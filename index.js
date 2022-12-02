var tracerPos = ["zero", "one", "two", "three"];
var formElements = [
  "firstFormPart",
  "secondFormPart",
  "thirdFormPart",
  "fourthFormPart",
];
let nbTracer = 0;
var emplacement;

var flagThemeLight = true;
if (flagThemeLight) {
  document.body.setAttribute("data-themeLight", "");
} else {
  document.body.removeAttribute("data-themeLight");
  document.getElementById("logo").style = "height: 50px;";
}

window.onkeydown = function (k) {
  if (k.code === "Enter") {
    nextStep();
  }
};

function nextStep() {
  if (nbTracer < 3) {
    document.getElementById("tracer").classList.add(tracerPos[++nbTracer]);
    document.getElementById(formElements[nbTracer]).classList.add("show");
  }

  if (nbTracer == 3) {
    document.getElementById("next").innerHTML = "envoyer";
  } else {
    document.getElementById("next").innerHTML = "suivant";
  }
}

function previousStep() {
  if (nbTracer > 0) {
    document.getElementById("tracer").classList.remove(tracerPos[nbTracer]);
    document.getElementById(formElements[nbTracer--]).classList.remove("show");
    document.getElementById("next").innerHTML = "suivant";
  }
}

document.body.onscroll = () => {
  if (flagThemeLight) {
    var posY = window.scrollY;
    if (posY > 20) {
      document.getElementById("logo").style = "height: 50px;";
    } else {
      document.getElementById("logo").style = "height: 65px;";
    }
  }
};

// header words
const positif = document.querySelectorAll("#positif div");
const negatif = document.querySelectorAll("#negatif div");
positif.forEach((e) => {
  const top = Math.round(
    Math.random() * (window.screen.height * 0.9 - window.screen.height * 1)
  );
  const left = Math.round(
    Math.random() * (window.screen.width * 0.9 - window.screen.width * 1)
  );
  e.style.top = `${top}px`;
  e.style.left = `${left}px`;
});
negatif.forEach((e) => {
  const top =
    Math.round(
      Math.random() * (window.screen.height * 0.8 - window.screen.height * 0.2)
    ) + 50;
  const left =
    Math.round(
      Math.random() * (window.screen.width * 0.8 - window.screen.width * 0.2)
    ) + 50;
  e.style.top = `${top}px`;
  e.style.left = `${left}px`;
});

function loadcookies() {
  if (!document.cookie) {
    uniqueId =
      Math.random().toString(36).substr(2, 9) +
      Math.random().toString(36).substr(2, 9) +
      Math.random().toString(36).substr(2, 9) +
      Math.random().toString(36).substr(2, 9);
    const cookie = `cookie=${uniqueId}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = cookie;
  }
  console.log(document.cookie);
}
