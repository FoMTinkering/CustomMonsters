import { monsterPrototypes } from "./Monsters/utils.js";

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

var protoTypeSelector = document.createElement("select");
protoTypeSelector.id = "proto-select";
for (var proto of Object.keys(monsterPrototypes)) {
    var option = document.createElement("option");
    option.value = proto;
    option.innerHTML = proto;
    protoTypeSelector.appendChild(option);
}
protoTypeSelector.addEventListener("change", () => setTimeout(() => updateMonsterSelector(), 10));
selector.appendChild(protoTypeSelector);

var monsterSelector = document.createElement("select");
monsterSelector.id = "monster-select";
selector.appendChild(monsterSelector);

function updateMonsterSelector() {
    var proto = protoTypeSelector.value;
    for (var child of monsterSelector.children)
        monsterSelector.removeChild(child);
    for (var monster of monsterPrototypes[proto]) {
        var option = document.createElement("option");
        option.value = monster;
        option.innerHTML = monster;
        monsterSelector.appendChild(option);
    }
}

var displayButton = document.getElementById("displaymode")
displayButton.addEventListener(() => switchDisplay(displayButton))

fetch("./Monsters/default.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
