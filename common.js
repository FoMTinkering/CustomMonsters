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
    protoTypeSelector.appendChild(option);
}
protoTypeSelector.addEventListener("change", (e) => updateMonsterSelector(e));
selector.appendChild(protoTypeSelector);

var monsterSelector = document.createElement("select");
monsterSelector.id = "monster-select";
selector.appendChild(monsterSelector);

function updateMonsterSelector(e) {
    console.log(e); // does this show the event?
}


