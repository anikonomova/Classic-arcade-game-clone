points = document.getElementById('score');
//getting the endGame modal
let modal = document.getElementById('modal');
const close = document.querySelector(".close");
const replayGame = document.querySelector('.replayButton');

//adding the f5 arrow
const f5 = document.querySelector('.restart');
f5.addEventListener('click', restart);


class Player {
  constructor (x, y) {
    this.sprite = 'images/char-pink-girl.png';
    this.y = 400;
    this.x = 200;
    this.width = 50;
    this.height = 50;
    this.score = 0;
    }

update(dt) {
    this.reset();
    }

render() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
//the code is borrowed from https://stackoverflow.com/questions/4416505/how-to-take-keyboard-input-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
handleInput(pressedKey) {
  switch (pressedKey) {
    case 'up':
    if(this.y > -10) {
    this.y -=70;
  }
    break;
    case 'down':
    if (this.y < 400) {
      this.y +=70;
    }
    break;
    case 'left':
    if (this.x > 0) {
    this.x -=70;
  }
    break;
    case 'right':
    if (this.x < 400) {
    this.x +=70;
  }
    break;
  }
}

reset() {
  if (this.y < 1) {
    this.y = 400;
    this.x = 200;
    this.score += 10;
	points.innerHTML = this.score;}
}
};
// Place the player object in a variable called player

let player = new Player (200, 400);
// Enemies our player must avoid
class Enemy {
  constructor (x,y,speed) {
    // Variables applied to each of our instances go here,
    this.y = y;
    this.x = x;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  }

  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.collide();
    if (this.x < 505) {
      this.x += this.speed * dt;
    } else {
      this.x = -100;
    }
};

  collide() {
      if (player.x < this.x + 50 && player.x + 50 > this.x &&
       player.y < this.y + 50 && player.y + 50 > this.y) {
      player.x = 200;
      player.y = 400;
      life --;
      hideHearts();
    }
}
// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
};

// Place all enemy objects in an array called allEnemies
const allEnemies = [];

let enemy1 = new Enemy (-500,60, (Math.random() * 100));
let enemy2 = new Enemy (-400, 140, (Math.random() * 200));
let enemy3 = new Enemy (-250, 220, (Math.random() * 300));
let enemy4 = new Enemy (-390, 60, (Math.random() * 150));
let enemy5 = new Enemy (-100, 220, (Math.random() * 220));
let enemy6 = new Enemy (-150, 220, (Math.random() * 300));
let enemy7 = new Enemy (-50, 60, (Math.random() * 130));

// Place all enemy objects in an array called allEnemies

allEnemies.push(enemy1,enemy2,enemy3,enemy4,enemy5, enemy6, enemy7);

//Losing lives
let state = document.querySelector('.state');
let lives = state.querySelectorAll('li');
let life = 3;

let allLives = Array.from(lives);

function hideHearts () {
  if (life === 2) {
    allLives[2].classList.add('hide');
  } else if (life === 1) {
    allLives[1].classList.add('hide');
  } else if (life === 0) {
    allLives[0].classList.add('hide');
  } else if (life === -1) {
    endGame();
  }
}

//showing the modal
function endGame() {

    modal.style.display = 'block';

    finalScore = document.querySelector("#score").innerHTML;

        document.querySelector('.finalScore').innerHTML = finalScore;
replay();
closeModal();
};

//closing the modal on 'X'
function closeModal(e){
    close.addEventListener("click", function(){
        modal.style.display = "none";
        for (let enemy of allEnemies) {
          enemy.speed = 0;
        }
    });
};

//replaying at Try again?
function replay(e){
replayGame.addEventListener("click", function(){
    modal.style.display = "none";
    restart();
  });

};

function restart() {
 location.reload(true);
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
