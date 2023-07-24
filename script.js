const word = "train" //randomize
const wordArray = word.split('')


alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// const wordList = JSON.parse(./wordle.json)

const gameIsOn = true
const won = false

const guess1 = ''
const guess2 = ''
const guess3 = ''
const guess4 = ''
const guess5 = ''
const guess6 = ''

const guess1Div = document.getElementById('first-row');
const guess2Div = document.getElementById('second-row');
const guess3Div = document.getElementById('third-row');
const guess4Div = document.getElementById('fourth-row');
const guess5Div = document.getElementById('fifth-row');

const gameBody = document.querySelector('.game-body')

// console.log(guess1=== true);


body = document.querySelector('body')
// body.addEventListener("keydown", hi)
// function hi(e){
//     console.log('hi');
//     console.log(e['key']);
//     console.log(e);
//     const keyPressed = e['key']
//     const newh1 = document.createElement('h1')
//     body.appendChild(newh1)
//     newh1.innerText = keyPressed
// }

//once return is pressed row is locked in

// console.log(gameBody.children);



// for (row of gameBody.children){
//     row.classList.add("is-locked");
// }

// console.log(gameBody.children);

// while (gameIsOn) {
    // }
body.addEventListener("keydown", addLetter)

//if gameIsOn false, tell correct word and whether won or lost in amount of correct guesses, offer to play again


//if square is last child ...


// guess1Div.classList.add('is-locked')

function addLetter(e){
    if (e['key'] == 'Backspace'){
        removeLastLetter()
    }
    if (e['key'] == 'Enter'){ //check if real word, than add locked-in class to row, add all letters to guess1 than checkGuess()
        // console.log('hi');
    }
    for (row of gameBody.children){
        // console.log(row);
        if (row.classList.contains('is-locked')){//returns true if row has class is-locked
            continue //if row is locked skip to next row
        }
        else{
            for (square of row.children){
                if (square.innerText == '' && alphabet.includes(e['key'])){
                    square.innerText = e['key']
                    break //adds letter only once to first empty square
                }
                else{//if square is not empty

                    if (e['key'] == 'Enter'){
                        if (checkRowIsFull(row)){ //returns true if row is full of letters
                            if(checkIfRealWord(row)){//if real word, row is-locked, if not warn that word is invalid, than check guess

                                row.classList.add('is-locked')
                                checkGuess(row) //returns true if guess is right, tell user they were right, if false, check if user out of guesses to say gameover

                            }


                            else{alert('Not a valid word')}
                            

                        }//else{continue}//disregards enter if row is not full, redundant

                    }
                    continue//continues if square has letter already
                }
            }
            break //only do it to current row
        } 
    }
}

function checkRowIsFull(row){
    let nonEmptySquares = 0
    for (square of row.children){
        if (square.innerText != ''){
            nonEmptySquares++
        }
    }
    if (nonEmptySquares == 5){
        return true
    }
    else{
        return false
    }
}
//could've done while .innertext !=''
function removeLastLetter(){ //backspace key
    let i = -1;
    for (row of gameBody.children){
        if (row.classList.contains('is-locked')){
            continue
        }
        else{
            for (square of row.children){
                if (row.children[4].innerText != ''){
                    row.children[4].innerText =''
                    break
                }
                if (square.innerText != ''){//square has letter
                    i++
                }
                else{
                    row.children[i].innerText='' //deletes letter from square before first empty one
                }
            }
        }
    }
}

function checkIfRealWord(){
    return true
}


function checkGuess(row){
    let guess=[]
    for (square of row.children){
        guess.push(square.innerText);
    }
    for (i=0;i<5;i++){
        if (guess[i]==wordArray[i]){
            row.children[i].classList.add('green')
        }
        else if(wordArray.includes(guess[i])){
            row.children[i].classList.add('yellow')
        }
    }
}
