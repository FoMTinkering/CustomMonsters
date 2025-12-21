import { monsterPrototypes, monsterToPrototype, parseMonsters } from "./Monsters/utils.js";
import { monsterPresets, presetGifs } from "./Monsters/presets.js";
import { defaultMonsters } from "./Monsters/default.js";

function switchDisplay(el) {
    el.innerHTML = el.innerHTML == "Dark Mode" ? "Light Mode" : "Dark Mode";
    s = document.getElementById("stylesheet");

    // make different stylesheet once I'm completely done
    // if (s.getAttribute("class") == "page") {
    //     s.href = s.href.includes("custommonsters_light.css") ? "../custommonsters_dark.css" : "../custommonsters_light.css";
    // } else {
    //     s.href = s.href.includes("custommonsters_light.css") ? "custommonsters_dark.css" : "custommonsters_light.css";
    // }
    
}


var selector = document.getElementById("selector");
var presets = document.getElementById("preset-selector");
var exportDiv = document.getElementById("export");

var prototypeSelector = document.createElement("select");
prototypeSelector.id = "proto-select";
for (var proto of Object.keys(monsterPrototypes)) {
    var option = document.createElement("option");
    option.value = proto;
    option.innerHTML = proto;
    prototypeSelector.appendChild(option);
}
prototypeSelector.addEventListener("change", () => setTimeout(() => updateMonsterSelector(), 10));
selector.appendChild(prototypeSelector);

const monsterSelector = document.createElement("select");
monsterSelector.id = "monster-select";
monsterSelector.addEventListener("change", () => setTimeout(() => updatePresetSelector(), 10));
selector.appendChild(monsterSelector);

const monsterGif = document.getElementById("monster-gif");
const presetSelector = document.createElement("select");
presetSelector.size = 1;
presetSelector.id = "preset-select";
presetSelector.addEventListener("change", () => setTimeout(() => {
    var preset = presetSelector.value;
    if (Object.keys(presetGifs).includes(preset))
        monsterGif.src = presetGifs[preset];
    else 
        monsterGif.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
}, 10));
// presetSelector.addEventListener("change", () => setTimeout(() => updatePresetSelector(), 10));
presets.appendChild(presetSelector);


const presetButtonsDiv = document.createElement("div");
presetButtonsDiv.id = "presets-buttons-wrapper";
presets.appendChild(presetButtonsDiv);

const selectPresetButton = document.createElement("button");
selectPresetButton.id = "select-preset-button";
selectPresetButton.innerHTML = "Confirm Choice";
selectPresetButton.addEventListener("click", () => confirmPreset());
presetButtonsDiv.appendChild(selectPresetButton);

const exportPresetButton = document.createElement("button");
const exportPresetLink = document.createElement("a");
exportPresetButton.id = "export-preset-button";
exportPresetButton.innerHTML = "Export Preset";
exportPresetButton.addEventListener("click", () => exportPreset());
presetButtonsDiv.appendChild(exportPresetButton);


const exportModButton = document.createElement("button");
const exportModLink = document.createElement("a");
exportModButton.id = "export-mod-button";
exportModButton.innerHTML = "Export Mod";
exportModButton.addEventListener("click", () => exportMod());
exportDiv.appendChild(exportModButton);



const displayButton = document.getElementById("displaymode")
displayButton.addEventListener("click", () => switchDisplay(displayButton))

const modZipButton = document.createElement("button");
const modZipLink = document.createElement("a");
modZipButton.id = "mod-zip-button";
modZipButton.innerHTML = "Download Mod Folder(if you don't have it already)";
modZipLink.href = "https://github.com/FoMTinkering/CustomMonsters/releases/download/v1.0/CustomMonsters.zip"
modZipButton.addEventListener("click", () => modZipLink.click())
selector.appendChild(modZipButton)

const availableMonsters = monsterPresets;
Object.keys(availableMonsters).forEach((monster) => {
    availableMonsters[monster]["default"] = defaultMonsters[monster];
});





const confirmedChoices = {};
monsterPrototypes["all_monsters"].forEach((monster) => {
    confirmedChoices[monster] = "default";
});

function updateMonsterSelector() {
    var proto = prototypeSelector.value;
    var isEmpty = monsterSelector.children.length == 0;
    for (var i = monsterSelector.children.length-1; i > 0; i--)
        monsterSelector.removeChild(monsterSelector.children[0])
    for (var monster of monsterPrototypes[proto]) {
        var option = document.createElement("option");
        option.value = monster;
        option.innerHTML = monster;
        if (confirmedChoices[monster] != "default")
            option.innerHTML += "*";
        monsterSelector.appendChild(option);
    }
    if (!isEmpty)
        monsterSelector.removeChild(monsterSelector.children[0]) // remove first one last to avoid nullifying the selector
    updatePresetSelector()
}

function updatePresetSelector() {
    var monster = monsterSelector.value;
    var isEmpty = presetSelector.children.length == 0;
    for (var i = presetSelector.children.length-1; i > 0; i--)
        presetSelector.removeChild(presetSelector.children[0])
    for (var preset of Object.keys(availableMonsters[monster])) {
        var option = document.createElement("option");
        option.value = preset;
        if (confirmedChoices[monster] == preset)
            option.style.backgroundColor = "#cfffa482";
        option.innerHTML = preset;
        presetSelector.appendChild(option);
    }
    if (!isEmpty)
        presetSelector.removeChild(presetSelector.children[0]) // remove first one last to avoid nullifying the selector
    presetSelector.size = presetSelector.children.length;
}

function confirmPreset() {
    var preset = presetSelector.value;
    var monster = monsterSelector.value;
    confirmedChoices[monster] = preset;
    setTimeout(() => recolorPresets(), 10);
}

function exportPreset() {
    // thanks to https://stackoverflow.com/a/30800715
    var preset = presetSelector.value;
    var monster = monsterSelector.value;
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(availableMonsters[monster][preset]));
    exportPresetLink.setAttribute("href", dataStr);
    exportPresetLink.setAttribute("download", preset+".json");
    exportPresetLink.click()
}

function exportMod() {
    var fiddle = {};
    console.log(confirmedChoices);
    console.log(availableMonsters);
    Object.keys(confirmedChoices).forEach((monster) => {
        var preset = confirmedChoices[monster];
        fiddle[monster] = availableMonsters[monster][preset];
    })
    fiddle = parseMonsters(fiddle);
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fiddle));
    exportModLink.setAttribute("href", dataStr);
    exportModLink.setAttribute("download", "customMonsters.json");
    exportModLink.click()
}



function recolorPresets() {
    for (var option of presetSelector.children) {
        if (option.value == presetSelector.value)
            option.style.backgroundColor = "#cfffa482";
        else
            option.style.backgroundColor = "";
    }
    if (presetSelector.value != "default") {
        [...monsterSelector.children].forEach((option) => {
            if ((option.value == monsterSelector.value)  && (option.innerHTML[option.innerHTML.length-1] != "*"))
                option.innerHTML += "*";
        })
    } else {
        [...monsterSelector.children].forEach((option) => {
            if ((option.value == monsterSelector.value) && (option.innerHTML[option.innerHTML.length-1] == "*") )
                option.innerHTML = option.innerHTML.slice(0,-1);
        })
    }
}