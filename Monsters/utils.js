
var monsterPrototypes = {
    "bat":["bat", "bat_blue"],
    "spirit":["spirit"],
    "mite":["stalagmite", "stalagmite_green", "stalagmite_purple"],
    "shroom":["mushroom", "mushroom_green", "mushroom_blue", "mushroom_purple"],
    "sap":["sapling", "sapling_cool", "sapling_purple", "sapling_orange", "sapling_orange_mini", "sapling_pink"],
    "barrel":["barrel"],
    "rock_stack":["rock_stack", "rock_stack_lava"],
    "cat":["cat"],
    "mimic":["mimic"],
    "enchantern":["enchantern", "enchantern_blue"],
    "clod":["rockclod", "copperclod", "rockclod_blue", "ironclod", "rockclod_green", "silverclod", "rockclod_red", "goldclod", "rockclod_purple", "mistrilclod"]
}

var all_monsters = [];
Object.values(monsterPrototypes).forEach((variants) => {all_monsters = all_monsters.concat(variants)});
monsterPrototypes["all_monsters"] = all_monsters;

export { monsterPrototypes };