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
    const updateStatusBars = () => {
        const { hunger, boredom, illness, sleepiness } = tamagotchi;
        document.getElementById("hungerValue").textContent = hunger;
        document.getElementById("happinessValue").textContent = boredom;
        document.getElementById("healthValue").textContent = illness;
        document.getElementById("energyValue").textContent = sleepiness;

        document.getElementById("hunger").style.width = (hunger * 10) + "%";
        document.getElementById("happiness").style.width = (boredom * 10) + "%";
        document.getElementById("health").style.width = (illness * 10) + "%";
        document.getElementById("energy").style.width = (sleepiness * 10) + "%";

        if (sleepiness === 0) {
            document.body.style.backgroundColor = "black";
            document.querySelector(".tamagotchi").style.backgroundImage = "none";
            document.querySelector(".buttons").style.backgroundColor = "blue";
            document.querySelectorAll(".buttons button").forEach(button => {
                button.style.backgroundColor = "blue";
                button.style.color = "black";
            });
            document.querySelectorAll(".status-bar").forEach(bar => {
                bar.style.backgroundColor = "blue";
                bar.style.color = "black";
                bar.style.borderColor = "black";
            });

            document.getElementById("logo").style.display = "none";
        } else {
            document.body.style.backgroundColor = "";
            document.querySelector(".tamagotchi").style.backgroundImage = "";
            document.querySelectorAll(".buttons button").forEach(button => {
                button.style.backgroundColor = "hotpink";
                button.style.color = "white";
            });
            document.querySelectorAll(".status-bar").forEach(bar => {
                bar.style.backgroundColor = "hotpink";
                bar.style.color = "white";
                bar.style.borderColor = "black";
            });
            document.getElementById("logo").style.display = "block";
        }
    };

    const updateStatusAutomatically = () => {
        tamagotchi.boredom--;
        tamagotchi.illness--;
        tamagotchi.hunger++;
        tamagotchi.energy++;

        tamagotchi.boredom = Math.max(tamagotchi.boredom, 0);
        tamagotchi.illness = Math.max(tamagotchi.illness, 0);
        tamagotchi.hunger = Math.min(tamagotchi.hunger, 10);
        tamagotchi.energy = Math.min(tamagotchi.energy, 10);

        updateStatusBars();
    };

    document.getElementById("feed").addEventListener("click", function() {
        if (tamagotchi.hunger < 10) tamagotchi.hunger--;
        if (tamagotchi.boredom < 10) tamagotchi.boredom++;
        updateStatusBars();
    });

    document.getElementById("play").addEventListener("click", function() {
        if (tamagotchi.boredom < 10) tamagotchi.boredom++;
        if (tamagotchi.sleepiness > 0) tamagotchi.sleepiness--;
        updateStatusBars();
    });
    document.getElementById("cure").addEventListener("click", function() {
        if (tamagotchi.illness < 10) tamagotchi.illness++;
        if (tamagotchi.boredom < 10) tamagotchi.boredom++;
        updateStatusBars();
    });
    document.getElementById("lullaby").addEventListener("click", function() {
        if (tamagotchi.sleepiness > 0) tamagotchi.sleepiness--;
        if (tamagotchi.boredom < 10) tamagotchi.boredom++;
        updateStatusBars();
    });

    updateStatusBars();
    updateStatusAutomatically();
    setInterval(updateStatusAutomatically, 20000);
});