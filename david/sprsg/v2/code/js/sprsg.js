// Word handling function
function handleAddWord(word) {
if (!window.words) {
window.words = [];
}
if (window.settings.breakdown) {
var currentwords = word.split(" ");
for (i = 0; i < currentwords.length; i++) {
window.words.push(currentwords[i]);
}
// finished for ()
}
// finished if (window.settings.breakdown)
else {
window.words[window.words.length] = word;
}
// Just cleaning up
document.getElementById("wordtoadd").value = "";
}
// Display words handling function
function handleDisplayWords(display) {
var worddisplayel = document.getElementById("worddisplay");
if (display == true && window.words) {
for (i = 0; i < window.words.length; i++) {
worddisplayel.innerHTML = worddisplayel.innerHTML + window.words[i] + (i == (window.words.length - 1) ? "" : "<br><br>");
}
// For loop done
}
// If (display == true && window.words) done
if (display == false && window.words) {
worddisplayel.innerHTML = "";
}
// If (display == false && window.words) done
}
// Generate handling function
function handleGenerate() {
var scriptdisplayel = document.getElementById("scriptdisplay");
scriptdisplayel.innerHTML = "";
var linescountel = document.getElementById("linescount");
var linescount = (Number(linescountel.value));
var wordsperlinecountel = document.getElementById("wordsperlinecount");
var wordsperlinecount = (Number(wordsperlinecountel.value));
// document.getElementById() and other stuff done
for (j = 0; j < linescount; j++) {
window.linearray = [];
for (i = 0; i < wordsperlinecount; i++) {
window.linearray[i] = window.words[((Math.floor((Math.random() * window.words.length))))];
}
// For loop for creating line array done
var line = window.linearray.join(" ");
scriptdisplayel.innerHTML = scriptdisplayel.innerHTML + "<br><br>" + line;
}
// For loop for whole script done
}
function isEnter(eobj) {
if (eobj.keyCode) {
var key = eobj.keyCode;
}
else if (eobj.key) {
var key = eobj.key;
}
else if (eobj.keyIdentifier) {
var key = eobj.keyIdentifier;
}
// Done with cross-browser deprecated annoyingness, now onto detecting enter keypress
if (key == 13) {
handleAddWord((document.getElementById("wordtoadd")).value);
}
}
// End isEnter function
function displaySettings(display) {
var settingsdiv = document.getElementById("settings");
if (!window.settings) {
window.settings = {};
}
if (display) {
settingsdiv.innerHTML = "<input type='checkbox' onclick='breakdown(this.checked);' " + (window.settings.breakdown ? "checked" : "") + ">Word breakdown";
settingsdiv.innerHTML = settingsdiv.innerHTML + "<br><br><input type='checkbox' onclick='altword(this.checked);' " + (window.settings.altword ? "checked" : "") + ">Alternate word system";
}
// Done if (display)
else {
settingsdiv.innerHTML = "";
}
}
function breakdown(on) {
window.settings.breakdown = on;
}
function altword(on) {
window.settings.altword = on;
document.getElementById("altaddword").style.display = (on ? "block" : "none");
document.getElementById("defaddword").style.display = (on ? "none" : "block");
}
function handleAltAddWord(rawwords) {
window.words = [];
var encwords = encodeURIComponent(rawwords).split("%0A");
// Starting for loop
for (var i = 0; i < encwords.length; i++) {
window.words.push(decodeURIComponent(encwords[i]));
}
// End for loop
}
