import { monsterPrototypes } from "./Monsters/utils.js";
import { monsterPresets } from "./Monsters/presets.js";
import { defaultMonsters } from "./Monsters/default.js";

const background = {
    "light":"hsl(205, 55%, 83%)",
    "dark":"hsl(222, 32%, 15%)"
}

function switchDisplay(el) {
    if (el.innerHTML == "Dark Mode") {
        el.innerHTML = "Light Mode";
        document.body.style.backgroundColor = background["dark"];
        el.style.backgroundColor = background["dark"];
        el.style.color = background["light"];
    } else {
        el.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = background["light"];
        el.style.backgroundColor = background["light"];
        el.style.color = background["dark"];
    }
}


var selector = document.getElementById("selector");
var presets = document.getElementById("preset-selector");


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

var monsterSelector = document.createElement("select");
monsterSelector.id = "monster-select";
monsterSelector.addEventListener("change", () => setTimeout(() => updatePresetSelector(), 10));
selector.appendChild(monsterSelector);

var presetSelector = document.createElement("select");
presetSelector.size = 1;
presetSelector.id = "preset-select";
// presetSelector.addEventListener("change", () => setTimeout(() => updatePresetSelector(), 10));
presets.appendChild(presetSelector);




var displayButton = document.getElementById("displaymode")
displayButton.addEventListener("click", () => switchDisplay(displayButton))

var availableMonsters = monsterPresets;
Object.keys(availableMonsters).forEach((monster) => {
    availableMonsters[monster]["default"] = defaultMonsters[monster];
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
        monsterSelector.appendChild(option);
    }
    if (!isEmpty)
        monsterSelector.removeChild(monsterSelector.children[0]) // remove first one last to avoid nullifying the selector
}

function updatePresetSelector() {
    var monster = monsterSelector.value;
    var isEmpty = presetSelector.children.length == 0;
    for (var i = presetSelector.children.length-1; i > 0; i--)
        presetSelector.removeChild(presetSelector.children[0])
    for (var preset of availableMonsters[monster]) {
        var option = document.createElement("option");
        option.value = preset;
        option.innerHTML = preset;
        presetSelector.appendChild(option);
    }
    if (!isEmpty)
        presetSelector.removeChild(presetSelector.children[0]) // remove first one last to avoid nullifying the selector
}


