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
}
}
};
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
