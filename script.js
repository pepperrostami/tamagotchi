//defining Tamagotchi class using constructor function, so property values will be called on any time a new tamagotchi is created. Properties for tamagotchi correspond to status bars for hunger, happiness, health, sleepiness. Setting all values to 5 as a baseline, but they should be able to go from 0-10.
class Tamagotchi {
    constructor() {
        this.hunger = 5;
        this.happiness = 5;
        this.health = 5;
        this.energy = 5;
    }
}
//initalizing new instance of a tamagotchi object using the class & constructor defined previously.
let tamagotchi = new Tamagotchi();

//initalizing new variable to track the tamagotchi's age in minutes, setting baseline to 0 so it will count up from 0 as it ages.
let ageInMinutes = 0;

//This line waits for the HTML document to finish loading before executing the code inside the function. It ensures that the JavaScript code only runs when the webpage is fully loaded.
document.addEventListener("DOMContentLoaded", function () {

    // const welcomeWindow = document.getElementById("welcomeWindow");
    // const playButton = document.getElementById("playButton");

    // const hideWelcomeWindow = () => {
    //     welcomeWindow.style.display - "none";
    // };

    // const activateGameFunctions = () => {
    //     updateStatusBars();
    //     updateStatusAutomatically();
    //     setInterval(updateAge, 60000);
    //     setInterval(updateStatusAutomatically, 20000);
    // };

    // playButton.addEventListener("click", function () {
    //     console.log("play button clicked");
    //     hideWelcomeWindow();
    //     activateGameFunctions();
    // });

    //***makes the other functions not work for some reason. Need to revisit. Prompt for user to start playing with the tamagotchi before all of the other automatic functions can run
    // const startPlaying = confirm("Are you ready to start playing with your new tamagotchi?");
    // if (startPlaying) {
    //     updateStatusBars();
    //     updateStatusAutomatically();

    //     setInterval(updateAge, 60000);
    //     setInterval(updateStatusAutomatically, 20000);
    // }

    //This line defines a function called updateStatusBars that updates the status bars of the Tamagotchi based on its current properties.
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

            //This line checks if the Tamagotchi's happiness is 0, health is 10 (maximum), or hunger is 10 (maximum). If any of these conditions are true, it changes the appearance of the webpage to indicate that the Tamagotchi is in a critical state.
        } else if (happiness === 0 || health === 0 || hunger === 10) {
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

            //Defining default state.
        } else {
            document.body.style.backgroundColor = "";
            document.querySelector(".tamagotchi").style.backgroundImage = "url('https://64.media.tumblr.com/5c2611691378fe716a13d76b289bd8da/c26cb1404eaa7a2a-0f/s540x810/a7ce0d191d095c32341353270f1197e334b8b2b6.jpg')";
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

        if (hunger === 0) {
            document.getElementById("hunger").style.display = "none";
        } else {
            document.getElementById("hunger").style.display = "block";
        }

        if (happiness === 0) {
            document.getElementById("happiness").style.display = "none";
        } else {
            document.getElementById("happiness").style.display = "block";
        }

        if (health === 0) {
            document.getElementById("health").style.display = "none";
        } else {
            document.getElementById("health").style.display = "block";
        }
        
        if (energy === 0) {
            document.getElementById("energy").style.display = "none";
        } else {
            document.getElementById("energy").style.display = "block";
        }
    };

    //Setting up event listeners for the buttons on the webpage (feed, play, cure, lullaby) and defining functions to update the Tamagotchi's properties based on the button clicks.
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

    document.getElementById("feed").addEventListener("click", function () {
        if (tamagotchi.hunger < 10) tamagotchi.hunger--;
        if (tamagotchi.energy < 10) tamagotchi.energy++;
        tamagotchi.hunger = Math.max(0, tamagotchi.hunger);
        tamagotchi.hunger = Math.min(10, tamagotchi.hunger);
        tamagotchi.energy = Math.max(0, tamagotchi.energy);
        tamagotchi.energy = Math.min(10, tamagotchi.energy);
        updateStatusBars();
    });

    document.getElementById("play").addEventListener("click", function () {
        if (tamagotchi.happiness < 10) tamagotchi.happiness++;
        if (tamagotchi.energy > 0) tamagotchi.energy--;
        tamagotchi.happiness = Math.max(0, tamagotchi.happiness);
        tamagotchi.happiness = Math.min(10, tamagotchi.happiness);
        tamagotchi.energy = Math.max(0, tamagotchi.energy);
        tamagotchi.energy = Math.min(10, tamagotchi.energy);
        updateStatusBars();
    });
    document.getElementById("cure").addEventListener("click", function () {
        if (tamagotchi.health < 10) tamagotchi.health++;
        if (tamagotchi.happiness < 10) tamagotchi.happiness++;
        tamagotchi.happiness = Math.max(0, tamagotchi.happiness);
        tamagotchi.happiness = Math.min(10, tamagotchi.happiness);
        tamagotchi.health = Math.max(0, tamagotchi.health);
        tamagotchi.health = Math.min(10, tamagotchi.health);
        updateStatusBars();
    });
    document.getElementById("lullaby").addEventListener("click", function () {
        if (tamagotchi.energy > 0) tamagotchi.energy--;
        if (tamagotchi.happiness < 10) tamagotchi.happiness++;
        tamagotchi.happiness = Math.max(0, tamagotchi.happiness);
        tamagotchi.happiness = Math.min(10, tamagotchi.happiness);
        tamagotchi.energy = Math.max(0, tamagotchi.energy);
        tamagotchi.energy = Math.min(10, tamagotchi.energy);
        updateStatusBars();
    });

    const tamagotchiNameInput = document.getElementById("tamagotchiName");
    let tamagotchiName = "";

    tamagotchiNameInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            tamagotchiName = tamagotchiNameInput.value;
            tamagotchiNameInput.value = tamagotchiName;
            tamagotchiNameInput.disabled = true;
        }
    });

// Not working for some reason- age keeps counting up even after tamagotchi dies
    const updateAge = () => {
        const hunger = tamagotchi.hunger;
        const health = tamagotchi.health;
        const happiness = tamagotchi.happiness;

        if (hunger < 10 || health > 0 || happiness > 0) {
        ageInMinutes++;
        document.getElementById("ageValue").textContent = ageInMinutes;
        }
    };

    const updateGifVisibility = () => {
        const egg = document.getElementById("egg");
        const caterpillar = document.getElementById("caterpillar");
        const cocoon = document.getElementById("cocoon");
        const butterfly = document.getElementById("butterfly");
        const win = document.getElementById("win");
        const age = parseInt(document.getElementById("ageValue").textContent);
        const happiness = tamagotchi.happiness;
        const health = tamagotchi.health;
        const hunger = tamagotchi.hunger;
        const energy = tamagotchi.energy;
    
        // Hide all GIFs initially
        egg.style.display = "none";
        caterpillar.style.display = "none";
        cocoon.style.display = "none";
        butterfly.style.display = "none";
        win.style.display = "none";
    
        // Determine which GIF to display based on Tamagotchi's age and status
        if (age < 1 && energy > 0) {
            egg.style.display = "block";
        } else if (age >= 1 && age <= 2 && energy > 0) {
            caterpillar.style.display = "block";
        } else if (age > 2 && age <= 3 && energy > 0) {
            cocoon.style.display = "block";
        } else if (age > 3 && age <= 4 && energy > 0) {
            butterfly.style.display = "block";
        } else if (age > 4 && energy > 0) {
            win.style.display = "block";
            win.classList.add('animateWin');
            setTimeout(() => {
                win.style.display = "none";
            }, 5000);
        }

        if (happiness === 0 || health === 0 || hunger === 10) {
            egg.style.display = "none";
            caterpillar.style.display = "none";
            cocoon.style.display = "none";
            butterfly.style.display = "none";
            win.style.display = "none";
        }
    };

    // Call the function initially
    updateGifVisibility();
    
    // Update the GIF visibility whenever Tamagotchi's age changes
    const tamagotchiAgeSpan = document.getElementById("ageValue");
    tamagotchiAgeSpan.addEventListener("DOMSubtreeModified", updateGifVisibility);
    
    // Call the function to check and hide GIFs whenever Tamagotchi's status changes
    const statusBars = document.querySelectorAll(".status-bar");
    statusBars.forEach(bar => {
    bar.addEventListener("DOMSubtreeModified", updateGifVisibility);
    });

    const welcomeWindow = document.getElementById("welcomeWindow");
    const playButton = document.getElementById("playButton");

    const hideWelcomeWindow = () => {
        welcomeWindow.style.display = "none";
    };

    const activateGameFunctions = () => {
        updateStatusBars();
        updateStatusAutomatically();
        setInterval(updateAge, 60000);
        setInterval(updateStatusAutomatically, 20000);
    };

    playButton.addEventListener("click", function () {
        console.log("play button clicked");
        hideWelcomeWindow();
        activateGameFunctions();
    });

    //Setting up a timer that updates the Tamagotchi's age every minute (60,000 milliseconds).
    // setInterval(updateAge, 60000);

    //Calling the updateStatusBars function to initially set up the appearance of the webpage based on the Tamagotchi's properties.
    // updateStatusBars();

    //Calling the updateStatusAutomatically function to automatically update the Tamagotchi's properties over time, simulating its needs changing without user interaction.
    // updateStatusAutomatically();

    //Setting up a timer that automatically updates the Tamagotchi's properties every 20 seconds (20,000 milliseconds).
    // setInterval(updateStatusAutomatically, 20000);
});


