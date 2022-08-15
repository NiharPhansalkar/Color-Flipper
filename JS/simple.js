const allColors = ['red', 'blue', 'rgba(43, 232, 143)', '#f6f621']

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
    // Get random number between 0 - 3 and access allColors to display a color

    const myRand = getRandom(4);
    
    document.body.style.backgroundColor = allColors[myRand];
    spanColor.textContent = allColors[myRand];
    spanColor.style.color = allColors[myRand];
    
    nav.style.backgroundColor = 'white';
});