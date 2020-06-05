var phrases = {
phrase1: "I said don't press the button.",
phrase2: "Seriously, stop.",
phrase3: "I mean it!",
phrase3: "Are you going to do this all day?",
phrase4: "No means no!",
phrase5: "Why don't you listen to me?",
phrase6: "God, you don't stop!",
};

function buttonPress() {
  //document.getElementById("changing_text").innerHTML = phrases[(Math.random() * 6) - 1];
  var topText = document.getElementById("changing_text");
  if (topText.innerHTML == "Don't press the button.") {
    topText.innerHTML = phrases.phrase1;
  } else if (topText.innerHTML == phrases.phrase1) {
    topText.innerHTML = phrases.phrase2;
  } else if (topText.innerHTML == phrases.phrase2) {
    topText.innerHTML = phrases.phrase3;
  } else if (topText.innerHTML == phrases.phrase3) {
      topText.innerHTML = phrases.phrase4;
  } else if (topText.innerHTML == phrases.phrase4) {
      topText.innerHTML = phrases.phrase5;
  } else if (topText.innerHTML == phrases.phrase5) {
      topText.innerHTML = phrases.phrase6;
    }
};
