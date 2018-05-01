// Logic

var score = 0;
var playerChoice;

var readable = {
  '0': 'Rock',
  '1': 'Paper',
  '2': 'Scissors'
};

// Creates random number 0-3
var cpuChoice = {
  init: function() {
    this.store = Math.floor(Math.random() * 3);
    this.text = readable[this.store];
  },
  store: '',
  text:  ''
};

cpuChoice.init();
console.log('cpuchoice:', cpuChoice.store, cpuChoice.text);


// Declare a winner

var order = [0, 1, 2, 0];

// adds conditionals

var chooseWinner = function(player, cpu){
  if(order[player] === order[cpu]) {
    return 'Tied game. Try again?';
  }
  if(order[player] === order[cpu + 1]) {
    score++;
    return "Hooray, you are the winner!";
  } else {
    score--;
    return "Bummer! You lost this time";
  }
}

console.log(chooseWinner(2, 0));
