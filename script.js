//defining Tamagotchi class using constructor function, so property values will be called on any time a new tamagotchi is created. Properties for tamagotchi correspond to status bars for hunger, happiness, health, sleepiness.
class Tamagotchi {
    constructor () {
    this.hunger = 5;
    this.happiness = 5;
    this.health = 5;
    this.energy = 5;
    }
}
//initalizing new instance of a tamagotchi object using the class defined previously.
let tamagotchi = new Tamagotchi();
let ageInMinutes = 0;

//Functions and event listeners to update status bars
document.addEventListener("DOMContentLoaded", function () {
    const updateStatusBars = () => {
        const { hunger, happiness, health, energy } = tamagotchi;
        const hungerBar = document.getElementById("hunger");
        const happinessBar = document.getElementById("happiness");
        const healthBar = document.getElementById("health");
        const energyBar = document.getElementById("energy");

        document.getElementById("hungerValue").textContent = hunger;
        document.getElementById("happinessValue").textContent = happiness;
        document.getElementById("healthValue").textContent = health;
        document.getElementById("energyValue").textContent = energy;

        document.getElementById("hunger").style.width = (hunger * 10) + "%";
        document.getElementById("happiness").style.width = (happiness * 10) + "%";
        document.getElementById("health").style.width = (health * 10) + "%";
        document.getElementById("energy").style.width = (energy * 10) + "%";

//***Not working- can't figure out why. Conditional statements to change the status bar colors for health to change green if 8 or above, orange if 6 or above, and red if 3 and below. The default should stay hot pink if the status is a 4-5. 
        // if (health <= 3) {
        //     document.querySelectorAll(".status-bar.health").forEach(bar => {
        //         bar.style.backgroundColor = "red";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "red";
        //     });
        // } else if (health >= 8) {
        //     document.querySelectorAll(".status-bar.health").forEach(bar => {
        //         bar.style.backgroundColor = "lightgreen";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "green";
        //     });
        // } else if (health >= 6) {
        //     document.querySelectorAll(".status-bar.health").forEach(bar => {
        //         bar.style.backgroundColor = "orange";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "orange";
        //     });
        // }

//***Not working- can't figure out why. Conditional statements to change the status bar colors for happiness to change green if 8 or above, orange if 6 or above, and red if 3 and below. The default should stay hot pink if the status is a 4-5. 
        // if (happiness <= 3) {
        //     document.querySelectorAll(".status-bar.happiness").forEach(bar => {
        //         bar.style.backgroundColor = "red";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "red";
        //     });
        // } else if (happiness >= 8) {
        //     document.querySelectorAll(".status-bar.happiness").forEach(bar => {
        //         bar.style.backgroundColor = "lightgreen";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "green";
        //     });
        // } else if (happiness <= 5) {
        //     document.querySelectorAll(".status-bar.happiness").forEach(bar => {
        //         bar.style.backgroundColor = "orange";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "orange";
        //     });
        // }
        
//***Not working- can't figure out why. Conditional statements to change the status bar colors for hunger to change red if 8 or above, orange if 6-7, and green if 3 and below. The default should stay hot pink if the status is a 4-5.
        // if (hunger >= 8) {
        //     document.querySelectorAll(".status-bar.hunger").forEach(bar => {
        //         bar.style.backgroundColor = "red";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "red";
        //     });
        // } else if (hunger <= 3) {
        //     document.querySelectorAll(".status-bar.hunger").forEach(bar => {
        //         bar.style.backgroundColor = "lightgreen";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "green";
        //     });
        // } else if (hunger >= 6) {
        //     document.querySelectorAll(".status-bar.hunger").forEach(bar => {
        //         bar.style.backgroundColor = "orange";
        //         bar.style.color = "white";
        //         bar.style.borderColor = "orange";
        //     });
        // }

        //conditional statement to make the tamagotchi sleep if energy hits 0 - changing images to a new background image and logo image edited in photoshop to look more like a "night mode"
        if (energy === 0) {
            document.body.style.backgroundColor = "black";
            document.querySelector(".tamagotchi").style.backgroundImage = "url('https://64.media.tumblr.com/d5d87141717d8311d342bada5e00efc1/9a8073cd6aba1d11-7d/s540x810/4c98aa4b651f28856793de6da7d4268f89d442de.jpg')";
            document.querySelector("#logo").src = "https://64.media.tumblr.com/184612d8de498b005ba2393125bdb7b4/3f41d779c1c85dbb-0b/s540x810/64fc94dbf6d5da2d4e5f78a52dde2c8caa13eb18.jpg";
            document.querySelector(".buttons").style.backgroundColor = "rgba(255, 105, 180, 0)";
            document.querySelectorAll(".buttons button").forEach(button => {
                button.style.backgroundColor = "blue";
                button.style.color = "black";
            });
            document.querySelectorAll(".status-bar").forEach(bar => {
                bar.style.backgroundColor = "blue";
                bar.style.color = "black";
                bar.style.borderColor = "black";
            });
        } else if (happiness === 0 || health === 10 || hunger === 10){
            document.querySelector(".tamagotchi").style.backgroundImage = "url('https://64.media.tumblr.com/032f6b79deb5aabce2c6116114520f25/89c508b446d2dcd7-ff/s540x810/99e8bd14c5200ff7ec5c5521962e47dc8aa18405.jpg')";
            document.querySelector("#logo").src = "https://64.media.tumblr.com/5b43352b589b78ce5450487b35428f76/3034577bfb8ea1f4-a0/s540x810/db7a38fdca234d0bbe9107514694038a63c36430.jpg";
            document.querySelector(".buttons").style.backgroundColor = "rgba(255, 105, 180, 0)";
            document.querySelectorAll(".buttons button").forEach(button => {
                button.style.backgroundColor = "lightgrey";
                button.style.color = "darkgrey";
            });
            document.querySelectorAll(".status-bar").forEach(bar => {
                bar.style.backgroundColor = "lightgrey";
                bar.style.color = "darkgrey";
                bar.style.borderColor = "darkgrey";
            });
        } else {
            document.body.style.backgroundColor = "";
            document.querySelector(".tamagotchi").style.backgroundImage = "url('https://64.media.tumblr.com/a8bd77e1ab2a9c9e67a3a217fcfab2ad/663fcee30b7e2c09-b6/s540x810/9a0ea448af16925717990e93adeef7675c6a695c.jpg')";
            document.querySelector("#logo").src = "https://64.media.tumblr.com/befc9d8f70b56de8c45d188a00cfe152/f6a6b536489e1a55-29/s540x810/170f4f797486440308869711103c5e27743797ef.jpg";
            document.querySelectorAll(".buttons button").forEach(button => {
                button.style.backgroundColor = "hotpink";
                button.style.color = "white";
            });
            document.querySelectorAll(".status-bar").forEach(bar => {
                bar.style.backgroundColor = "hotpink";
                bar.style.color = "white";
                bar.style.borderColor = "black";
            });
        }
    };

    const updateStatusAutomatically = () => {
        tamagotchi.happiness--;
        tamagotchi.health--;
        tamagotchi.hunger++;
        tamagotchi.energy++;

        tamagotchi.happiness = Math.max(tamagotchi.happiness, 0);
        tamagotchi.health = Math.max(tamagotchi.health, 0);
        tamagotchi.hunger = Math.min(tamagotchi.hunger, 10);
        tamagotchi.energy = Math.min(tamagotchi.energy, 10);

        updateStatusBars();
    };

    document.getElementById("feed").addEventListener("click", function() {
        if (tamagotchi.hunger < 10) tamagotchi.hunger--;
        if (tamagotchi.energy < 10) tamagotchi.energy++;
        updateStatusBars();
    });

    document.getElementById("play").addEventListener("click", function() {
        if (tamagotchi.happiness < 10) tamagotchi.happiness++;
        if (tamagotchi.energy > 0) tamagotchi.energy--;
        updateStatusBars();
    });
    document.getElementById("cure").addEventListener("click", function() {
        if (tamagotchi.health < 10) tamagotchi.health++;
        if (tamagotchi.happiness < 10) tamagotchi.happiness++;
        updateStatusBars();
    });
    document.getElementById("lullaby").addEventListener("click", function() {
        if (tamagotchi.energy > 0) tamagotchi.energy--;
        if (tamagotchi.happiness < 10) tamagotchi.happiness++;
        updateStatusBars();
    });

    const tamagotchiNameInput = document.getElementById("tamagotchiName");
    let tamagotchiName = "";

    tamagotchiNameInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            tamagotchiName = tamagotchiNameInput.value;
            tamagotchiNameInput.value = tamagotchiName;
            tamagotchiNameInput.disabled = true;
        }
    });

    const updateAge = () => {
        ageInMinutes++;
        document.getElementById("ageValue").textContent = ageInMinutes;
    };

    setInterval(updateAge, 60000);

    updateStatusBars();
    updateStatusAutomatically();
    setInterval(updateStatusAutomatically, 20000);
});