var word = "";
var transit = ['bart', 'muni', 'train', 'bike', 'segway', 'hoverboard'];
var fruit = ['blueberry', 'pineapple', 'dragonfruit', 'guava', 'pomegranite', 'banana'];
var religion = ['zoroastrianism', 'zion', 'quran', 'confession', 'vishnu', 'messiah'];
var guesses = 7;
var guessedLetters = [];

function start() {
    var value = document.getElementById("boxMode").value;
    outputWord = document.getElementById("outputWord").innerHTML;
    newGame();
    if(value == 0){
        word = transit[Math.floor(Math.random() * transit.length)];
    }
    if(value == 1){
        word = fruit[Math.floor(Math.random() * fruit.length)];
    }
    if(value == 2){
        word = religion[Math.floor(Math.random() * religion.length)];
    }
    printWord();
    guessLetter();
    console.log(word);
}
function guessLetter(){
    var images = document.getElementById("images").value;
    var newGuess = document.getElementById("selectLetter").value;
    var outputWord = document.getElementById("outputWord").innerHTML;
    if(guessedLetters.indexOf(newGuess) >= 0){
        //inform user
        document.getElementById("messages").innerHTML = "Repetitive guess, please try again.";
        return;
    }
    guessedLetters.push(newGuess);
    printWord();
    console.log(guesses);
    //if it's a wrong guess, do these things
    if(word.indexOf(newGuess) == -1) {
        document.getElementById("wrongLetters").innerHTML += newGuess;
        if(guesses !== 0){
            document.getElementById("images").innerHTML = "<img src='images/" + guesses + ".jpg'>";
            guesses -= 1;
        }
        document.getElementById("numberOfGuesses").innerHTML = "Guesses remaining:" + guesses;
    }
    if (word.indexOf("_")){
        if (guesses == 0){
            //images = "<img src='images/" + 1 + ".jpg'>"
            document.getElementById("messages").innerHTML = "YOU LOST!";
            return
        }
    }
    if (word == outputWord){
        document.getElementById("messages").innerHTML = "YOU WON!";
        return;
    }
}
function printWord(){
    var outputWord = "";
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) == -1) {
            outputWord += "_";
        } else {
            outputWord += word[i];
        }
    }
    document.getElementById("outputWord").innerHTML = outputWord;
    return outputWord;
}
function newGame(){
    //outputWord, guessedLetters, image, messages, guesses count
    guessedLetters = [];
    document.getElementById("wrongLetters").innerHTML = [];
    wrongLetters = [];
    document.getElementById("outputWord").innerHTML = [];
    guesses = 7;
    document.getElementById("images").innerHTML = "<img src='images/" + guesses + ".jpg'>";
    messages = [];
}
