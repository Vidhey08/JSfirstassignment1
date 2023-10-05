 // Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const btnNoun1 = document.getElementById("noun1");
const btnVerb = document.getElementById("verb");
const btnAdjective = document.getElementById("adjective");
const btnNoun2 = document.getElementById("noun2");
const btnSetting = document.getElementById("setting");
const btnPlayback = document.getElementById("playback");
const btnRandom = document.getElementById("random");
const btnReset = document.getElementById("reset");

// Constants for p tag to display query selectors
const displayNoun1 = document.getElementById("choosenNoun1");
const displayVerb = document.getElementById("choosenVerb");
const displayAdjective = document.getElementById("choosenAdjective");
const displayNoun2 = document.getElementById("choosenNoun2");
const displaySetting = document.getElementById("choosenSetting");
const displayStory = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The cat", "The dog", "Mom", "My teacher", "The turkey"];
const verbs = ["Kissed", "danced with", "ate", "saw", "sat on"];
const adjectives = ["a fat", "a goofy", "a scary", "a slimy", "a funny"];
const nouns2 = ["worm", "cow", "monkey", "frog", "goat"];
const settings = ["in my shoes", "in my spaghetti", "on the chair", "in my soup", "on the moon"];

// Variables for count to grab array elements
let countNoun1 = 0;
let countVerb = 0;
let countAdjective = 0;
let countNoun2 = 0;
let countSetting = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    displayNoun1.textContent = nouns1[countNoun1];
    countNoun1 = (countNoun1 + 1) % nouns1.length;
}

function verb_on_click() {
    displayVerb.textContent = verbs[countVerb];
    countVerb = (countVerb + 1) % verbs.length;
}

function adjective_on_click() {
    displayAdjective.textContent = adjectives[countAdjective];
    countAdjective = (countAdjective + 1) % adjectives.length;
}

function noun2_on_click() {
    displayNoun2.textContent = nouns2[countNoun2];
    countNoun2 = (countNoun2 + 1) % nouns2.length;
}

function setting_on_click() {
    displaySetting.textContent = settings[countSetting];
    countSetting = (countSetting + 1) % settings.length;
}

function playback_on_click() {
    displayStory.textContent = `${displayNoun1.textContent} ${displayVerb.textContent} ${displayAdjective.textContent} ${displayNoun2.textContent} ${displaySetting.textContent}`;
}

function random_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    displayStory.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
}

function reset_on_click() {
    displayNoun1.textContent = "";
    displayVerb.textContent = "";
    displayAdjective.textContent = "";
    displayNoun2.textContent = "";
    displaySetting.textContent = "";
    displayStory.textContent = "";
}

/* Event Listeners
-------------------------------------------------- */
btnNoun1.addEventListener("click", noun1_on_click);
btnVerb.addEventListener("click", verb_on_click);
btnAdjective.addEventListener("click", adjective_on_click);
btnNoun2.addEventListener("click", noun2_on_click);
btnSetting.addEventListener("click", setting_on_click);
btnPlayback.addEventListener("click", playback_on_click);
btnRandom.addEventListener("click", random_on_click);
btnReset.addEventListener("click", reset_on_click);
