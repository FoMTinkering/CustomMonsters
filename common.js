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

for (var proto in Object.keys(monsterPrototypes)) {
    var option = document.createElement("option");
    option.value = proto;
    selector.appendChild(option);
}
    
