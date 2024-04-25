//defining Tamagotchi class using constructor function, so property values will be called on any time a new tamagotchi is created. Properties for tamagotchi correspond to status bars for hunger, boredom, illness, sleepiness.
    class Tamagotchi {
        constructor () {
        this.hunger = 5;
        this.boredom = 5;
        this.illness = 5;
        this.sleepiness = 5;
        }
    }
//initalizing new instance of a tamagotchi object using the class defined previously.
    let tamagotchi = new Tamagotchi();

//Functions and event listeners to update status bars
    document.addEventListener("DOMContentLoaded", function () {
        let hunger = 5;
        let happiness = 5;
        let health = 5;
        let energy = 5;

    function updateStatusBars() {
        document.getElementById("hungerValue").textContent = hunger;
        document.getElementById("happinessValue").textContent = happiness;
        document.getElementById("healthValue").textContent = health;
        document.getElementById("energyValue").textContent = energy;
    }

    document.getElementById("feed").addEventListener("click", function() {
        if (hunger < 10) hunger--;
        if (happiness < 10) happiness++;
        updateStatusBars();
    });

    document.getElementById("play").addEventListener("click", function() {
        if (happiness <10) happiness++;
        if (energy > 0) energy--;
        updateStatusBars();
    });
    document.getElementById("cure").addEventListener("click", function () {
        if (health < 10) health++;
        if (happiness < 10) happiness++;
        updateStatusBars();
    });
    document.getElementById("lullaby").addEventListener("click", function() {
        if (energy > 0) energy--;
        if (happiness < 10) happiness++;
        updateStatusBars();
    });
    updateStatusBars();
    });
