const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const button = document.querySelector('.btn');
const spanColor = document.querySelector('.color'); 
const nav = document.getElementById('navbar');

// Function that returns a random value between 0 to 4
function getRandom(max) {
    let randNum = Math.random() * 100;
    randNum = Math.floor(randNum);
    return (randNum % max);
}

button.addEventListener('click', function(){
    let hexCol = '#';
    const totalHexDig = 6;
    for (let i = 0; i < totalHexDig; i++) {
        hexCol += hex[getRandom(16)];
    }
    spanColor.textContent = hexCol;
    document.body.style.backgroundColor = hexCol;
    spanColor.style.color = hexCol;

    nav.style.backgroundColor = 'white';
});