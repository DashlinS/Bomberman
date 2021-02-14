// PSEUDO CODE
/*
1.Start by having user click on either image which will allow them to pick a character.
2.when pressed, the title and choices will disappear and will show the character you have chosen to move
3.using key press functions have the character move on the screen
4.reset screen so player can choose a new character
5.Enjoy the small victories
*/

document.querySelector('.firstImage').addEventListener('click', removeBomberMan)
document.querySelector('.secondImage').addEventListener('click', removePrettyBomber)
document.querySelector('.newChar').addEventListener('click', reset)
let vertical = 0
let horizontal = 0

// var position = document.querySelector('.container').position = "absolute";
// var xLimit = 1400;
// var yLimit = 650;
// var offset = 16;



// REMOVE IMAGES
function removeBomberMan(){
  document.querySelector('.firstImage img').style.display = "none"
  document.querySelector('.secondImage img').style.display = "none"
  document.querySelector('h1').style.display = "none"
  document.querySelector('.newChar').innerHTML = '<h4><a href="#">Choose A New Character!</a></h4>'
  selectBomberMan()
}

function removePrettyBomber(){
  document.querySelector('.firstImage img').style.display = "none"
  document.querySelector('.secondImage img').style.display = "none"
  document.querySelector('h1').style.display = "none"
  document.querySelector('.newChar').innerHTML = '<h4><a href="#">Choose A New Character!</a></h4>'
  selectPrettyBomber()
}

// LOAD PLAYERS
function selectBomberMan(){
  document.querySelector('.midFloat').innerHTML = "<img src='./images/bombermanlogo.png'>"
}

function selectPrettyBomber(){
  document.querySelector('.midFloat').innerHTML = "<img src='./images/prettybomber.png'>"
  
} 

// CHARACTER MOVEMENT
document.addEventListener('keydown', (e) => {
  let character = document.querySelector('.midFloat img');
    if(e.code === 'ArrowUp'){
      goUp(character)
      
    }
    else if(e.code === 'ArrowDown'){
      goDown(character)
     
    }
    else if(e.code === 'ArrowLeft'){
      goLeft(character)
    }
    else if(e.code === 'ArrowRight'){
      goRight(character)
    }
    else {
      console.log('wrong key')
    }
})

//MOVING CHAR UP FUNCTIONS
function goUp(character){
  horizontal -= 10
  character.style.marginTop = `${horizontal}px`
  // if(position.top - offset >= 0){
  //   character.style('top', position.top - offset + 'px')
  // }
}

//MOVING CHAR DOWN FUNCTIONS
function goDown(character){
  horizontal += 10
  character.style.marginTop = `${horizontal}px`
}

//MOVING CHAR LEFT FUNCTIONS
function goLeft(character){
  vertical -= 10
  moveCharLeft(character)
  character.style.marginLeft = `${vertical}px`
}

function moveCharLeft(character){
  character.style.transform = 'scaleX(1)'
}

//MOVING CHAR RIGHT FUNCTIONS
function goRight(character){
  vertical += 10
  moveCharRight(character)
  character.style.marginLeft = `${vertical}px`
}

function moveCharRight(character){
  character.style.transform = 'scaleX(-1)'
}


// RESET
function reset(){
  location.reload();
  return false;
}