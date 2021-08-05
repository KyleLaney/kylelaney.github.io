let score = 10; //score starts at 10, will decrease if user loses round
let highScore = score;//highest user score
let numOfGuess  = 0;//number of user guesses, will increment every round
let secretNum = Math.floor(Math.random() * 100) + 1;//secret number = random integer between 1-100


const userInput = Number(document.querySelector('.userInput').value);//get user input

document.querySelector('.check').addEventListener('click', myFun(){
    if(userInput = secretNum){//user wins if input = secret number
        document.querySelector('.scores').textContent = "&#128540;Please enter a valid number";
    }else if(userInput < secretNum){//if input less than secret number
        document.querySelector('.scores').textContent = "&#129321;Too low!";
    }else if(userInput > secretNum){//if input greater than secret number
        document.querySelector('.scores').textContent = "&#128526;Too High!";
    }else{//none of the above cases are met, therefore error
        document.querySelector('.scores').textContent = "ERROR";
    }


})