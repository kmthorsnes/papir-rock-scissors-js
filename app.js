// Logic

var score = 0;
var playerChoice;

var readable = {
  '0': 'Rock',
  '1': 'Paper',
  '2': 'Scissors'
};

// Creates random number 0-3
var cpuChoice = Math.floor(Math.random() * 3);
console.log('cpuChoice', cpuChoice);
