const word = "train"

const gameIsOn = true

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


body.addEventListener("keydown", addLetter)

function addLetter(e){
    for (row of gameBody.children){
        // console.log(row);
        if (row.classList.contains('is-locked')){//returns true if row has class is-locked
            continue //if row is locked skip to next row
        }
        else{
            for (square of row.children){
                if (square.innerText == ''){
                    square.innerText = e['key']
                }
                else{//if square is not empty
                    break
                }
            }
            break //only do it to current row
        } 
    }
}





