const word = "train"


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


// console.log(guess1=== true);


body = document.querySelector('body')
body.addEventListener("keydown", hi)

function hi(e){
    console.log('hi');
    console.log(e['key']);
    console.log(e);
    const keyPressed = e['key']
    const newh1 = document.createElement('h1')
    body.appendChild(newh1)
    newh1.innerText = keyPressed
}





//once return is pressed row is locked in







