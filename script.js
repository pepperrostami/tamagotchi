//defining Tamagotchi class using constructor function, so property values will be called on any time a new tamagotchi is created. Properties for tamagotchi correspond to status bars for hunger, boredom, illness, sleepiness.
class Tamagotchi {
    constructor () {
    this.hunger = 5;
    this.boredom = 5;
    this.illness = 5;
    this.energybar = 5;
    }
}
//initalizing new instance of a tamagotchi object using the class defined previously.
let tamagotchi = new Tamagotchi();

//Functions and event listeners to update status bars
document.addEventListener("DOMContentLoaded", function () {
    const updateStatusBars = () => {
        const { hunger, boredom, illness, energybar } = tamagotchi;
        document.getElementById("hungerValue").textContent = hunger;
        document.getElementById("happinessValue").textContent = boredom;
        document.getElementById("healthValue").textContent = illness;
        document.getElementById("energyValue").textContent = energybar;

        document.getElementById("hunger").style.width = (hunger * 10) + "%";
        document.getElementById("happiness").style.width = (boredom * 10) + "%";
        document.getElementById("health").style.width = (illness * 10) + "%";
        document.getElementById("energy").style.width = (energybar * 10) + "%";

        if (energybar === 0) {
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
        if (tamagotchi.energybar < 10) tamagotchi.energybar++;
        updateStatusBars();
    });

    document.getElementById("play").addEventListener("click", function() {
        if (tamagotchi.boredom < 10) tamagotchi.boredom++;
        if (tamagotchi.energybar > 0) tamagotchi.energybar--;
        updateStatusBars();
    });
    document.getElementById("cure").addEventListener("click", function() {
        if (tamagotchi.illness < 10) tamagotchi.illness++;
        if (tamagotchi.boredom < 10) tamagotchi.boredom++;
        updateStatusBars();
    });
    document.getElementById("lullaby").addEventListener("click", function() {
        if (tamagotchi.energybar > 0) tamagotchi.energybar--;
        if (tamagotchi.boredom < 10) tamagotchi.boredom++;
        updateStatusBars();
    });

    updateStatusBars();
    updateStatusAutomatically();
    setInterval(updateStatusAutomatically, 20000);
});