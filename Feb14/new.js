var openingPage = document.querySelector('.container.opening');
var mainPage = document.querySelector('.container.main');
var nextBtn = document.querySelector('.btn-next');
var question = document.getElementById("question");
var yesBtn = document.getElementsByClassName("btn-yes")[0];
var noBtn = document.getElementsByClassName("btn-no")[0];
var gifContainer = document.getElementsByClassName("gif-container")[0];
var yesSize = 16;
var noNameIndex = 0;
var noNames = ["Ayaw mo?", "Maitanong man kaya?", "Mabait man ako ah", "Pagtoo", "Oo na kay!", "Dai mo ba nadaramay sa sakong kahimtang?", "Sige na man oh", "Pagtoo, papa-happyon taka", "Dai ka maaraman", "Dai ka baya iniwan", "Promisa iyan", "Peksman, mamatay man", "Isa pang dai?", "Makakakita ka talaga", "An taga mo ah", "Pag ikaw dai pumayag", "Butas iyan bubungan nindo", "Ayuson mo", "Julie", "Oo na kay, last na ini."];
const fallingWords = [ "Yieeeeeee!", "Thankyou!", "Yay!", "mwaaaaaa"];

function showMainPage() {
    openingPage.style.display = 'none';
    mainPage.style.display = 'flex';
}

function increaseYesSize() {
    yesSize += 15;
    yesBtn.style.fontSize = yesSize + "px";
}

function changeNoName() {
    noBtn.innerHTML = noNames[noNameIndex];
    noNameIndex = (noNameIndex + 1) % noNames.length;
    increaseYesSize();
}

function createFallingElement() {
    // Create a new element
    const fallingElement = document.createElement("div");
    fallingElement.className = "falling-element";
    document.body.appendChild(fallingElement);

    // Set initial position and animation
    const startPosition = Math.random() * window.innerWidth;
    fallingElement.style.left = startPosition + "px";
    fallingElement.style.top = "0";
    fallingElement.textContent = fallingWords[Math.floor(Math.random() * fallingWords.length)];
    fallingElement.style.animationDuration = Math.random() * 2 + 1 + "s";

    // Remove the element after animation completes
    fallingElement.addEventListener("animationend", () => {
        fallingElement.remove();
    });
}

function showGif() {
    question.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    gifContainer.style.display = "block";
    document.querySelector('.header-image').style.display = 'none';

    // Add party effect class to the gif container
    gifContainer.classList.add("party-effect");

    // Create and append falling elements
    for (let i = 0; i < 20; i++) {
        createFallingElement();
    }
}
