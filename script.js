//create Tamagotchi object constructor function
    function Tamagotchi () {
          this.hunger = 5;
          this.boredom = 5;
          this.illness = 5;
          this.sleepiness = 5;
    }

//Functions for each action's effect on the status bars
    Tamagotchi.prototype.feed = function() {
        if (this.hunger > 10) {
            this.hunger--;
        }
        this.updateStatusBars();
    }

    Tamagotchi.prototype.play = function() {
        if (this.boredom > 0) {
            this.boredom--;
        }
        this.updateStatusBars();
    }
    Tamagotchi.prototype.cure = function() {
        if (this.illness > 0) {
          this.illness--;
        }
        this.updateStatusBars();
      }
      
    Tamagotchi.prototype.lullaby = function() {
        if (this.sleepiness < 10) {
          this.sleepiness++;
        }
        this.updateStatusBars();
    }
      
    Tamagotchi.prototype.updateStatusBars = function() {
        document.getElementById('hunger-bar').style.width = (this.hunger * 10) + '%';
        document.getElementById('boredom-bar').style.width = (this.boredum * 10) + '%';
        document.getElementById('illness-bar').style.width = (this.illness * 10) + '%';
        document.getElementById('sleep-bar').style.width = (this.sleepiness * 10) + '%';
      }
    
//bind click event listeners to buttons
document.getElementById('feed').addEventListener('click', function() {
    Tamagotchi.feed();
});

document.getElementById('play').addEventListener('click', function() {
    Tamagotchi.play();
});

document.getElementById('cure').addEventListener('click', function() {
    Tamagotchi.cure();
});
document.getElementById('lullaby').addEventListener('click', function() {
    Tamagotchi.lullaby();
});

//initalize new tamagotchi object
let tamagotchi = new Tamagotchi();
