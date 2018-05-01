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
