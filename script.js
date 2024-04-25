  //Functions for tamagotchi statuses
    // document.getElementById("feed").addEventListener("click", function() {

    // });

    // document.getElementById("play").addEventListener("click", function() {

    // });

    // document.getElementById("medicine").addEventListener("click", function() {

    // });

    // document.getElementById("attention").addEventListener("click", function() {

    // });

    // document.getElementById("discipline").addEventListener("click", function() {

    // });

    // document.getElementById("health-meter").addEventListener("click", function() {

    // });

    class Tamagotchi {
        constructor() {
          this.hunger = 5;
          this.boredom = 5;
          this.illness = 5;
          this.sleep = 5;
        }
    }
      
    //     feed() {
    //       if (this.hunger < 10) {
    //         this.hunger++;
    //       }
    //       this.updateStatusBars();
    //     }
      
    //     play() {
    //       if (this.boredom < 10) {
    //         this.boredom++;
    //       }
    //       this.updateStatusBars();
    //     }
      
    //     cure() {
    //       if (this.illness > 0) {
    //         this.illness--;
    //       }
    //       this.updateStatusBars();
    //     }
      
    //     lullaby() {
    //       if (this.sleep < 10) {
    //         this.sleep++;
    //       }
    //       this.updateStatusBars();
    //     }
      
    //     updateStatusBars() {
    //       document.getElementById('hunger-bar').style.width = (this.hunger * 10) + '%';
    //       document.getElementById('boredom-bar').style.width = (this.boredom * 10) + '%';
    //       document.getElementById('illness-bar').style.width = (this.illness * 10) + '%';
    //       document.getElementById('sleep-bar').style.width = (this.sleep * 10) + '%';
    //     }
    //   }
      
    //   const tamagotchi = new Tamagotchi();
      
      // Example usage:
      // tamagotchi.feed(); // Feed the Tamagotchi
      // tamagotchi.play(); // Play with the Tamagotchi
      // tamagotchi.cure(); // Give medicine to the Tamagotchi
      // tamagotchi.lullaby(); // Sing a lullaby to the Tamagotchi

//Functions for status bars on baby tamagotchi monitor actions
    // document.addEventListener('DOMContentLoaded', function() {
    //     const feedBtn = document.getElementById('feed');
    //     const hungerBar = document.getElementById('hunger-bar');
    
    //     let hungerLevel = 0; // Initial hunger level
    //     const maxHungerLevel = 100; // Maximum hunger level
    
    //     // Function to update the hunger bar
    //     function updateHungerBar() {
    //         const percentage = (hungerLevel / maxHungerLevel) * 100;
    //         hungerBar.style.width = percentage + '%';
    //     }
    
    //     // Event listener for the feed button
    //     feedBtn.addEventListener('click', function() {
    //         if (hungerLevel < maxHungerLevel) {
    //             hungerLevel += 10; // Increase hunger level by 10 (can adjust as needed)
    //             updateHungerBar();
    //         }
    //     });
    // });