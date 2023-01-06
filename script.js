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

// Add the disabled attribute to the input element
holder.setAttribute('disabled', true);
holder.setAttribute('placeholder', 'Press start to begin typing');

var countDownTimer = null;
var wordsArray = wordsArrayEnglish;

document.getElementById('english-button').addEventListener('click', function() {
  wordsArray = wordsArrayEnglish;
  languageSelector.style.display = 'none';
  game.style.display = 'block';
  updateWord();
});

document.getElementById('bosnian-button').addEventListener('click', function() {
  wordsArray = wordsArrayBosnian;
  languageSelector.style.display = 'none';
  game.style.display = 'block';
  updateWord();
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


document.getElementById('restart-button').addEventListener('click', function() {
  // Clear the countDownTimer interval
  clearInterval(countDownTimer);
  countDownTimer = null;

  // Reset the seconds variable
  seconds = 60;
  
  // Update the timer display
  timer.innerHTML = seconds;
  
  // Reset the points and score display
  points = 0;
  score.innerHTML = points;
  
  // Clear the input field
  holder.value = "";
  
  // Start the timer
  countDown();
});

document.getElementById('start-button').addEventListener('click', function() {
  holder.removeAttribute('disabled');
  holder.removeAttribute('placeholder');
  countDown();
});

function updateWord() {
  wordsArray.sort(function() {
    return 0.5 - Math.random();
  });
  word.innerHTML = wordsArray[0];
}



function countDown() {
  if (countDownTimer === null) {
    countDownTimer = setInterval(function() {
      seconds--;
      timer.innerHTML = seconds;
  
      if (seconds === 0) {
        clearInterval(countDownTimer);
      }
    }, 1000);
  }
}