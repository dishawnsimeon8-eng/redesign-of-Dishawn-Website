const hour = new Date().getHours();
let message;
// Displays a text on a time of day

if (hour < 12) {
    message = "Good Morning! Welcome to my website!";
} else if (hour < 18) {
    message = "Good Afternoon! Welcome to my website!";
} else {
    message = "Good Evening! Welcome to my website!";
}


document.getElementById("welcomeMessage").textContent = message;
// Displays the text to a colour 
document.querySelector("p").style.backgroundColor = "red";
document.querySelector("p").style.backgroundColor = "#ffcc00";
document.querySelector("p").style.backgroundColor = "rgb(0, 128, 255)";

const now = new Date();
//Displays the date in real time 

document.getElementById("datetime").textContent =
    "Date and Time: " + now.toLocaleString();
    function updateDateTime() {
    const now = new Date();
    document.getElementById("datetime").textContent =
        " Date and Time: " + now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);


const toggleButton = document.getElementById("themeToggle");
// Displays the Dark or Light mode at the click of a button
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }
});
const boldText = document.getElementById("boldText").textContent ="Pic of TAMCC buildings";
//Text is hovered when mouse is over it
boldText.addEventListener("mouseover", () => {
    boldText.style.backgroundColor = "yellow";
    boldText.style.color = "black";
});

boldText.addEventListener("mouseout", () => {
    boldText.style.backgroundColor = "";
    boldText.style.color = "";
});
