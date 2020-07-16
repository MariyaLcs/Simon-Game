let gamePattern = [];
let userClickedPattern = [];
let level = 0;
var started = false;
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  let audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();

  level++;
  $("#level-title2").text("Level " + level);
}

$(document).keydown(function () {
  if (!started) {
    $("#level-title2").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$("#btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
