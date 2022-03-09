let correct;
let score = 0;
// Inicializa el juego
game();

// Enlaza el click de los círculos a la función guess
$(".option").on("click", guess);
$(".close a").on("click", function () {
  $(".result").hide();
  $(".option").removeClass("scale");

  game();
});

function game() {
  correct = Math.floor(Math.random() * 2);
  $(".option").each(function (index) {
    let color = generateColor;
    $(this).css("background-color", color);

    if (index == correct) {
      $(".question").text(color);
    }
  });
}

function guess() {
  $(this).addClass("scale");

  let index = $(".option").index(this);
  if (index == correct) {
    $(".result.won").show();
    score++;
  } else {
    $(".result.lost").show();
    score = 0;
  }
  $(".score span").text(score);
}

function generateColor() {
  return `rgb( ${random()},  ${random()},  ${random()} )`;
}

function random() {
  return Math.floor(Math.random() * 255);
}
