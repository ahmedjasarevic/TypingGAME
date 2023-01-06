var timer = document.getElementById("timer");
var word = document.getElementById("word");
var holder = document.getElementById("holder");

var points = 0
var seconds = 60
var wordsArrayEnglish  = [  'apple',  'banana',  'orange',  'strawberry',  'grape',  'pear',  'mango',  'watermelon',  'pineapple',  'kiwi',  'lemon',  'lime',  'coconut',  'peach',  'apricot',  'plum',  'cherry',  'blackberry',  'raspberry',  'blueberry',  'huckleberry',  'boysenberry',  'elderberry',  'gooseberry',  'currant',  'cantaloupe',  'honeydew',  'fig',  'date',  'pomegranate'];
var wordsArrayBosnian  = [  'jabuka',  'banana',  'naranča',  'jagoda',  'grožđe',  'kruška',  'mango',  'dinja',  'ananas',  'kiwi',  'limun',  'limeta',  'kokos',  'breskva',  'kajsija',  'šljiva',  'češnja',  'malina',  'malina',  'borovnica',  'huckleberry',  'boysenberry',  'bobica',  'kupina',  'kantalupa',  'medvjeđe grožđe',  'smokva',  'datulja',  'granat'];


var wordsArray = wordsArrayEnglish;

document.getElementById('english-button').addEventListener('click', function() {
  wordsArray = wordsArrayEnglish;
  updateWord();
});

document.getElementById('bosnian-button').addEventListener('click', function() {
  wordsArray = wordsArrayBosnian;
  updateWord();
});

function updateWord() {
  wordsArray.sort(function(){return 0.5 - Math.random()});
  word.innerHTML = wordsArray[0];
}

updateWord();

holder.onkeypress = function(){
    if(holder.value == word.innerHTML){
        wordsArray.sort(function(){return 0.5 - Math.random()});
        word.innerHTML = wordsArray[0];
        points++;
        holder.value = "";
    }
}

function countDown(){
    points = 0;
    seconds = 60;
    var countDownTimer = setInterval(() => {
        seconds--;
        timer.innerHTML = seconds;

        if(seconds === 0){
            alert("Game over");
            seconds = 60;
            points = 0;
            clearInterval(countDownTimer);
        }

    }, 1000);
  }
