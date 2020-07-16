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

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title2").text("Game Over, Press Any Key to Restart");
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
