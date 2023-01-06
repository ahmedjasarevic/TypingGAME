var timer = document.getElementById("timer");
var word = document.getElementById("word");
var hint = document.getElementById("hint");
var holder = document.getElementById("holder");
var languageSelector = document.getElementById("language-selector");
var game = document.getElementById("game");

const score = document.querySelector('.score span')

var points = 0
var seconds = 60
var wordsArrayEnglish  = [  'apple',  'banana',  'orange',  'strawberry',  'grape',  'pear',  'mango',  'watermelon',  'pineapple',  'kiwi',  'lemon',  'lime',  'coconut',  'peach',  'apricot',  'plum',  'cherry',  'blackberry',  'raspberry',  'blueberry',  'huckleberry',  'boysenberry',  'elderberry',  'gooseberry',  'currant',  'cantaloupe',  'honeydew',  'fig',  'date',  'pomegranate'];
var wordsArrayBosnian  = [  'jabuka',  'banana',  'naranča',  'jagoda',  'grožđe',  'kruška',  'mango',  'dinja',  'ananas',  'kiwi',  'limun',  'limeta',  'kokos',  'breskva',  'kajsija',  'šljiva',  'češnja',  'malina',  'malina',  'borovnica',  'huckleberry',  'boysenberry',  'bobica',  'kupina',  'kantalupa',  'medvjeđe grožđe',  'smokva',  'datulja',  'granat'];


var wordsArray = wordsArrayEnglish;

var wordsArray = wordsArrayEnglish;

document.getElementById('english-button').addEventListener('click', function() {
  wordsArray = wordsArrayEnglish;
  languageSelector.style.display = 'none';
  game.style.display = 'block';
  updateWord();
  countDown();
  hint.innerHTML = "Press ENTER to confirm word"
});

document.getElementById('bosnian-button').addEventListener('click', function() {
  wordsArray = wordsArrayBosnian;
  languageSelector.style.display = 'none';
  game.style.display = 'block';
  updateWord();
  countDown();
  hint.innerHTML = "Pritisni ENTER da potvrdis rijec"
});

holder.onkeyup = function() {
  var correct = true;
  for (var i = 0; i < holder.value.length; i++) {
    if (holder.value[i] !== word.innerHTML[i]) {
      correct = false;
      break;
    }
  }
  if (correct) {
    holder.classList.remove('incorrect');
    holder.classList.add('correct');
  } else {
    holder.classList.remove('correct');
    holder.classList.add('incorrect');
  }
}

holder.onkeypress = function() {
  if (holder.value === word.innerHTML) {
    updateWord();
    points++;
    score.innerHTML = points
    holder.value = "";
    holder.classList.remove('incorrect');
    holder.classList.remove('correct');
  }
}

function updateWord() {
  wordsArray.sort(function() {
    return 0.5 - Math.random();
  });
  word.innerHTML = wordsArray[0];
}

function countDown() {
  var countDownTimer = setInterval(function() {
    seconds--;
    timer.innerHTML = seconds;

    if (seconds === 0) {
      alert("Game over");
      seconds = 60;
      points = 0;
      clearInterval(countDown);
    }
  }, 1000);
}

document.getElementById('restart-button').addEventListener('click', function() {
    seconds = 60;
    points = 0;
    score.innerHTML = points
    holder.value = "";
    holder.classList.remove('incorrect');
    holder.classList.remove('correct')
    updateWord();
    clearInterval(countDown);
    countDown();
  });