var monsterPresets = {
    "bat": {
        "goofy_bat":{
            "hp": 32,
            "speed":0.1,
            "flee_speed":4,
            "attack_duration": [1,2],
            "damage": 18,
            "essence": 15,
            "variant_attack": false,
            "drops": [
                {
                    "item": "essence_drop",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_wing",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_essence_bat_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_essence_bat_main_idle_north",
                    "south": "spr_monster_essence_bat_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_essence_bat_main_alert_north",
                    "south": "spr_monster_essence_bat_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_essence_bat_main_fly_north",
                    "south": "spr_monster_essence_bat_main_fly_south"
                },
                "windup": {
                    "north": "spr_monster_essence_bat_main_windup_north",
                    "south": "spr_monster_essence_bat_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_essence_bat_main_attack_north",
                    "south": "spr_monster_essence_bat_main_attack_south"
                },
                "hurt": {
                    "north": "spr_monster_essence_bat_main_hurt_north",
                    "south": "spr_monster_essence_bat_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_essence_bat_main_hurt_north",
                    "south": "spr_monster_essence_bat_main_hurt_south"
                },
                "flee": {
                    "north": "spr_monster_essence_bat_main_fly_north",
                    "south": "spr_monster_essence_bat_main_fly_south"
                },
                "misc": {
                    "breath_east": "spr_fx_monster_essence_bat_breath_windup_east",
                    "breath_west": "spr_fx_monster_essence_bat_breath_windup_west",
                    "breath_north": "spr_fx_monster_essence_bat_breath_windup_north",
                    "breath_south": "spr_fx_monster_essence_bat_breath_windup_south"
                }
            }
        },
        "tab":{
            "hp": 32,
            "damage": 18,
            "essence": 15,
            "speed":-1,
            "flee_speed":-1,
            "attack_duration": [10,20],
            "windup_duration": [10,20],
            "variant_attack": false,
            "drops": [
                {
                    "item": "essence_drop",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_wing",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_essence_bat_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_essence_bat_main_idle_north",
                    "south": "spr_monster_essence_bat_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_essence_bat_main_alert_north",
                    "south": "spr_monster_essence_bat_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_essence_bat_main_fly_north",
                    "south": "spr_monster_essence_bat_main_fly_south"
                },
                "windup": {
                    "north": "spr_monster_essence_bat_main_windup_north",
                    "south": "spr_monster_essence_bat_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_essence_bat_main_attack_north",
                    "south": "spr_monster_essence_bat_main_attack_south"
                },
                "hurt": {
                    "north": "spr_monster_essence_bat_main_hurt_north",
                    "south": "spr_monster_essence_bat_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_essence_bat_main_hurt_north",
                    "south": "spr_monster_essence_bat_main_hurt_south"
                },
                "flee": {
                    "north": "spr_monster_essence_bat_main_fly_north",
                    "south": "spr_monster_essence_bat_main_fly_south"
                },
                "misc": {
                    "breath_east": "spr_fx_monster_essence_bat_breath_windup_east",
                    "breath_west": "spr_fx_monster_essence_bat_breath_windup_west",
                    "breath_north": "spr_fx_monster_essence_bat_breath_windup_north",
                    "breath_south": "spr_fx_monster_essence_bat_breath_windup_south"
                }
            }
        },
    },
    "bat_blue": {},
    "spirit": {
        "hellspirit": {
            "hp": 160,
            "damage": 28,
            "essence": 15,
            "coin_count": [
                6,
                10
            ],
            "teleport_duration": [
                5,
                6
            ],
            "teleport_distance_from_player": [
                1,
                5
            ],
            "projectile_life_time": [
                2400,
                4000
            ],
            "projectile_turn_rate": 10.0,
            "projectile_speed": 0.8,
            "projectile_damage": 30,
            "drops": [
                {
                    "item": "basic_wood",
                    "chance": 70,
                    "count_range": [
                        3,
                        5
                    ]
                },
                {
                    "item": "peat",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_core",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_flame_spirit_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "south": "spr_monster_flame_spirit_main_idle_south",
                    "north": "spr_monster_flame_spirit_main_idle_south"
                },
                "teleport": {
                    "south": "spr_monster_flame_spirit_main_disappear_south",
                    "north": "spr_monster_flame_spirit_main_disappear_south"
                },
                "windup": {
                    "south": "spr_monster_flame_spirit_main_windup_south",
                    "north": "spr_monster_flame_spirit_main_windup_south"
                },
                "attack": {
                    "south": "spr_monster_flame_spirit_main_attack_south",
                    "north": "spr_monster_flame_spirit_main_attack_south"
                },
                "tired": {
                    "south": "spr_monster_flame_spirit_main_idle_south",
                    "north": "spr_monster_flame_spirit_main_idle_south"
                },
                "dying": {
                    "south": "spr_monster_flame_spirit_main_hurt_south",
                    "north": "spr_monster_flame_spirit_main_hurt_south"
                },
                "hurt": {
                    "south": "spr_monster_flame_spirit_main_hurt_south",
                    "north": "spr_monster_flame_spirit_main_hurt_south"
                },
                "acknowledgment": {
                    "south": "spr_monster_flame_spirit_main_alert_south",
                    "north": "spr_monster_flame_spirit_main_alert_south"
                },
                "misc": {
                    "teleport_in": "spr_monster_flame_spirit_main_appear_south",
                    "teleport_out": "spr_monster_flame_spirit_main_disappear_south",
                    "projectile": "spr_monster_flame_spirit_projectile_main"
                }
            },
            "speed": 5.0,
            "idle_duration": [
                1,
                2
            ],
            "tired_duration": [
                1,
                2
            ]
        }
    },
    "stalagmite": {
        "knows_where_you_are":{
            "hp": 24,
            "attack_radius":384,
            "speed":0,
            "damage": 25,
            "essence": 5,
            "coin_count": [
                2,
                6
            ],
            "drops": [
                {
                    "item": "ore_copper",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_horn",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_stalagmite_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": "spr_nothing",
                "walk": "spr_nothing",
                "windup": "spr_monster_stalagmite_blue_windup",
                "attack": "spr_monster_stalagmite_blue_attack",
                "tired": "spr_monster_stalagmite_blue_tired",
                "flee": "spr_monster_stalagmite_blue_flee",
                "hurt": "spr_monster_stalagmite_blue_hurt",
                "dying": "spr_monster_stalagmite_blue_hurt",
                "misc": {
                    "ground_walk": "spr_monster_stalagmite_ground_blue_walk",
                    "ground_windup": "spr_monster_stalagmite_ground_blue_windup",
                    "ground_attack": "spr_monster_stalagmite_ground_blue_attack",
                    "ground_flee": "spr_monster_stalagmite_ground_blue_flee",
                    "giblits": "spr_part_rockclod_blue_projectile"
                }
            }
        },
        "happy_to_see_you":{
            "hp": 24,
            "attack_radius":4,
            "speed":10,
            "hide_timer": [1,1],
            "hurt":[1,1],
            "damage": 25,
            "essence": 5,
            "coin_count": [
                2,
                6
            ],
            "drops": [
                {
                    "item": "ore_copper",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_horn",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_stalagmite_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": "spr_nothing",
                "walk": "spr_nothing",
                "windup": "spr_monster_stalagmite_blue_windup",
                "attack": "spr_monster_stalagmite_blue_attack",
                "tired": "spr_monster_stalagmite_blue_tired",
                "flee": "spr_monster_stalagmite_blue_flee",
                "hurt": "spr_monster_stalagmite_blue_hurt",
                "dying": "spr_monster_stalagmite_blue_hurt",
                "misc": {
                    "ground_walk": "spr_monster_stalagmite_ground_blue_walk",
                    "ground_windup": "spr_monster_stalagmite_ground_blue_windup",
                    "ground_attack": "spr_monster_stalagmite_ground_blue_attack",
                    "ground_flee": "spr_monster_stalagmite_ground_blue_flee",
                    "giblits": "spr_part_rockclod_blue_projectile"
                }
            }
        },
    },
    "stalagmite_green": {
        
    },
    "stalagmite_purple": {
        "noescape": {
            "hp": 42,
            "damage": 35,
            "essence": 15,
            "coin_count": [
                5,
                10
            ],
            "speed": 4,
            "secondary_spikes": [
                [
                    16,
                    0
                ],
                [
                    -5,
                    16
                ],
                [
                    -17,
                    -10
                ],
                [
                    14,
                    -15
                ],
                [
                    10,
                    18
                ],
                [
                    -23,
                    5
                ],
                [
                    -1,
                    -25
                ],
                [
                    24,
                    6
                ],
                [
                    -14,
                    23
                ],
                [
                    -21,
                    -21
                ],
                [
                    25,
                    -16
                ],
                [
                    8,
                    30
                ],
                [
                    -33,
                    0
                ],
                [
                    8,
                    -34
                ],
                [
                    30,
                    17
                ],
                [
                    -27,
                    26
                ],
                [
                    -20,
                    -34
                ],
                [
                    38,
                    -11
                ],
                [
                    -1,
                    41
                ],
                [
                    -42,
                    -12
                ],
                [
                    21,
                    -39
                ],
                [
                    32,
                    32
                ],
                [
                    -41,
                    23
                ],
                [
                    -13,
                    -47
                ],
                [
                    49,
                    -1
                ],
                [
                    -14,
                    49
                ],
                [
                    -46,
                    -27
                ],
                [
                    38,
                    -39
                ],
                [
                    27,
                    47
                ],
                [
                    -55,
                    14
                ],
                [
                    -1,
                    -58
                ],
                [
                    57,
                    15
                ],
                [
                    -31,
                    52
                ],
                [
                    -44,
                    -44
                ],
                [
                    55,
                    -32
                ],
                [
                    16,
                    62
                ],
                [
                    -67,
                    -1
                ],
                [
                    17,
                    -66
                ],
                [
                    59,
                    34
                ],
                [
                    -50,
                    49
                ],
                [
                    -37,
                    -63
                ],
                [
                    70,
                    -19
                ],
                [
                    0,
                    74
                ],
                [
                    -74,
                    -20
                ],
                [
                    38,
                    -68
                ],
                [
                    55,
                    55
                ],
                [
                    -70,
                    40
                ],
                [
                    -22,
                    -80
                ],
                [
                    83,
                    -1
                ],
                [
                    -22,
                    81
                ],
                [
                    -75,
                    -44
                ],
                [
                    61,
                    -62
                ],
                [
                    44,
                    76
                ],
                [
                    -88,
                    23
                ],
                [
                    0,
                    -92
                ],
                [
                    89,
                    24
                ],
                [
                    -48,
                    81
                ],
                [
                    -68,
                    -68
                ],
                [
                    84,
                    -49
                ],
                [
                    25,
                    95
                ],
                [
                    -100,
                    0
                ],
                [
                    26,
                    -98
                ],
                [
                    89,
                    51
                ],
                [
                    -74,
                    73
                ],
                [
                    -53,
                    -92
                ],
                [
                    103,
                    -28
                ],
                [
                    0,
                    108
                ],
                [
                    -107,
                    -29
                ],
                [
                    55,
                    -97
                ],
                [
                    79,
                    79
                ],
                [
                    -99,
                    57
                ],
                [
                    -30,
                    -112
                ],
                [
                    -16,
                    0
                ],
                [
                    4,
                    -17
                ],
                [
                    16,
                    9
                ],
                [
                    -15,
                    14
                ],
                [
                    -11,
                    -19
                ],
                [
                    22,
                    -6
                ],
                [
                    0,
                    24
                ],
                [
                    -25,
                    -7
                ],
                [
                    13,
                    -24
                ],
                [
                    20,
                    20
                ],
                [
                    -26,
                    15
                ],
                [
                    -9,
                    -31
                ],
                [
                    32,
                    -1
                ],
                [
                    -9,
                    33
                ],
                [
                    -31,
                    -18
                ],
                [
                    26,
                    -27
                ],
                [
                    19,
                    33
                ],
                [
                    -39,
                    10
                ],
                [
                    0,
                    -42
                ],
                [
                    41,
                    11
                ],
                [
                    -22,
                    38
                ],
                [
                    -33,
                    -33
                ],
                [
                    40,
                    -24
                ],
                [
                    12,
                    46
                ],
                [
                    -50,
                    0
                ],
                [
                    13,
                    -50
                ],
                [
                    45,
                    26
                ],
                [
                    -39,
                    38
                ],
                [
                    -28,
                    -48
                ],
                [
                    54,
                    -15
                ],
                [
                    0,
                    58
                ],
                [
                    -58,
                    -16
                ],
                [
                    30,
                    -53
                ],
                [
                    43,
                    43
                ],
                [
                    -56,
                    31
                ],
                [
                    -17,
                    -63
                ],
                [
                    66,
                    0
                ],
                [
                    -18,
                    65
                ],
                [
                    -60,
                    -35
                ],
                [
                    49,
                    -50
                ],
                [
                    36,
                    62
                ],
                [
                    -71,
                    18
                ],
                [
                    -1,
                    -75
                ],
                [
                    73,
                    19
                ],
                [
                    -39,
                    67
                ],
                [
                    -56,
                    -56
                ],
                [
                    69,
                    -41
                ],
                [
                    21,
                    79
                ],
                [
                    -84,
                    0
                ],
                [
                    21,
                    -82
                ],
                [
                    74,
                    43
                ],
                [
                    -62,
                    61
                ],
                [
                    -45,
                    -77
                ],
                [
                    87,
                    -24
                ],
                [
                    -1,
                    91
                ],
                [
                    -90,
                    -25
                ],
                [
                    47,
                    -82
                ],
                [
                    67,
                    67
                ],
                [
                    -85,
                    48
                ],
                [
                    -26,
                    -96
                ],
                [
                    100,
                    -1
                ],
                [
                    -27,
                    97
                ],
                [
                    -90,
                    -52
                ],
                [
                    73,
                    -74
                ],
                [
                    52,
                    91
                ],
                [
                    -104,
                    27
                ],
                [
                    -1,
                    -109
                ],
                [
                    106,
                    28
                ],
                [
                    -56,
                    96
                ],
                [
                    -80,
                    -80
                ],
                [
                    98,
                    -58
                ],
                [
                    29,
                    111
                ]
            ],
            "drops": [
                {
                    "item": "ore_gold",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_horn",
                    "chance": 30,
                    "count_range": [
                        1,
                        3
                    ]
                },
                {
                    "cosmetic": "head_stalagmite_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": "spr_nothing",
                "walk": "spr_nothing",
                "windup": "spr_monster_stalagmite_purple_windup",
                "attack": "spr_monster_stalagmite_purple_attack",
                "tired": "spr_monster_stalagmite_purple_tired",
                "flee": "spr_monster_stalagmite_purple_flee",
                "hurt": "spr_monster_stalagmite_purple_hurt",
                "dying": "spr_monster_stalagmite_purple_hurt",
                "misc": {
                    "ground_walk": "spr_monster_stalagmite_ground_purple_walk",
                    "ground_windup": "spr_monster_stalagmite_ground_purple_windup",
                    "ground_attack": "spr_monster_stalagmite_ground_purple_attack",
                    "ground_flee": "spr_monster_stalagmite_ground_purple_flee",
                    "giblits": "spr_part_rockclod_purple_projectile",
                    "secondary_ground_windup": "spr_monster_stalagmite_purple_secondary_ground_windup",
                    "secondary_spike_windup": "spr_monster_stalagmite_purple_secondary_main_windup",
                    "secondary_ground_attack": "spr_monster_stalagmite_purple_secondary_ground_attack",
                    "secondary_spike_attack": "spr_monster_stalagmite_purple_secondary_main_attack",
                    "secondary_ground_tired": "spr_monster_stalagmite_purple_secondary_ground_tired",
                    "secondary_spike_tired": "spr_monster_stalagmite_purple_secondary_main_tired"
                }
            }
        },
        "celines_house": {
            "hp": 1,
            "damage": 100,
            "essence": 15,
            "speed": 8,
            "coin_count": [
                5,
                10
            ],
            "secondary_spikes": false,
            "hitbox": "spr_town_building_celine_spring",
            "hurtbox": "spr_town_building_celine_spring",
            "drops": [
                {
                    "item": "ore_gold",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_horn",
                    "chance": 30,
                    "count_range": [
                        1,
                        3
                    ]
                },
                {
                    "cosmetic": "head_stalagmite_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": "spr_nothing",
                "walk": "spr_nothing",
                "windup": "spr_monster_stalagmite_purple_windup",
                "attack": "spr_town_building_celine_spring",
                "tired": "spr_town_building_celine_spring",
                "flee": "spr_town_building_celine_spring",
                "hurt": "spr_town_building_celine_spring",
                "dying": "spr_town_building_celine_spring",
                "misc": {
                    "ground_walk": "spr_monster_stalagmite_ground_purple_walk",
                    "ground_windup": "spr_monster_stalagmite_ground_purple_windup",
                    "ground_attack": "spr_monster_stalagmite_ground_purple_attack",
                    "ground_flee": "spr_monster_stalagmite_ground_purple_flee",
                    "giblits": "spr_part_rockclod_purple_projectile",
                    "secondary_ground_windup": "spr_monster_stalagmite_purple_secondary_ground_windup",
                    "secondary_spike_windup": "spr_monster_stalagmite_purple_secondary_main_windup",
                    "secondary_ground_attack": "spr_monster_stalagmite_purple_secondary_ground_attack",
                    "secondary_spike_attack": "spr_monster_stalagmite_purple_secondary_main_attack",
                    "secondary_ground_tired": "spr_monster_stalagmite_purple_secondary_ground_tired",
                    "secondary_spike_tired": "spr_monster_stalagmite_purple_secondary_main_tired"
                }
            }
        },
        "conchshell": {
            "hp": 42,
            "damage": 35,
            "essence": 15,
            "coin_count": [
                5,
                10
            ],
            "secondary_spikes": [
             [-7.99, -0.31],
             [-11.96, -0.94],
             [-15.89, -1.88],
             [-19.75, -3.13],
             [-23.54, -4.68],
             [-9.07, -5.06],
             [-12.28, -7.5],
             [-15.31, -10.2],
             [-18.14, -13.14],
             [-20.75, -16.31],
             [-8.12, -8.87],
             [-10.35, -12.23],
             [-12.32, -15.78],
             [-14.03, -19.5],
             [-15.46, -23.37],
             [-5.98, -12.05],
             [-7.14, -15.93],
             [-8.0, -19.91],
             [-8.56, -23.97],
             [-8.81, -28.11],
             [-2.97, -14.46],
             [-3.06, -18.52],
             [-2.82, -22.59],
             [-2.27, -26.67],
             [-1.41, -30.74],
             [0.63, -15.99],
             [1.57, -19.94],
             [2.82, -23.83],
             [4.38, -27.66],
             [6.24, -31.39],
             [4.57, -16.55],
             [6.43, -20.17],
             [8.58, -23.66],
             [11.02, -27.01],
             [13.72, -30.2],
             [8.61, -16.14],
             [11.26, -19.24],
             [14.16, -22.16],
             [17.31, -24.87],
             [20.68, -27.36],
             [12.53, -14.78],
             [15.81, -17.23],
             [19.29, -19.43],
             [22.96, -21.39],
             [26.82, -23.08],
             [16.13, -12.55],
             [19.86, -14.24],
             [23.74, -15.65],
             [27.76, -16.77],
             [31.9, -17.6],
             [19.22, -9.54],
             [23.23, -10.41],
             [27.33, -10.98],
             [31.51, -11.24],
             [35.74, -11.19],
             [21.67, -5.88],
             [25.78, -5.92],
             [29.92, -5.64],
             [34.08, -5.05],
             [38.23, -4.13],
             [23.36, -1.72],
             [27.41, -0.94],
             [31.43, 0.16],
             [35.39, 1.57],
             [39.29, 3.29],
             [24.22, 2.77],
             [28.05, 4.33],
             [31.78, 6.19],
             [35.41, 8.36],
             [38.91, 10.81],
             [24.2, 7.43],
             [27.67, 9.69],
             [30.99, 12.24],
             [34.14, 15.06],
             [37.12, 18.15],
             [23.29, 12.08],
             [26.28, 14.96],
             [29.06, 18.09],
             [31.64, 21.47],
             [33.99, 25.07],
             [21.51, 16.55],
             [23.91, 19.95],
             [26.08, 23.55],
             [28.0, 27.35],
             [29.65, 31.33],
             [18.9, 20.7],
             [20.65, 24.48],
             [22.13, 28.43],
             [23.33, 32.53],
             [24.24, 36.76],
             [15.55, 24.37],
             [16.59, 28.42],
             [17.35, 32.58],
             [17.79, 36.84],
             [17.93, 41.17],
             [11.54, 27.45],
             [11.85, 31.62],
             [11.86, 35.86],
             [11.55, 40.15],
             [10.92, 44.45],
             [6.99, 29.82],
             [6.57, 34.0],
             [5.84, 38.18],
             [4.78, 42.36],
             [3.41, 46.5],
             [2.03, 31.41],
             [0.9, 35.46],
             [-0.55, 39.47],
             [-2.31, 43.41],
             [-4.38, 47.27],
             [-3.19, 32.15],
             [-5.0, 35.96],
             [-7.12, 39.67],
             [-9.53, 43.27],
             [-12.23, 46.73],
             [-8.54, 32.01],
             [-10.97, 35.47],
             [-13.69, 38.78],
             [-16.68, 41.93],
             [-19.94, 44.9],
             [-13.86, 30.98],
             [-16.85, 34.0],
             [-20.08, 36.82],
             [-23.57, 39.44],
             [-27.28, 41.83],
             [-19.02, 29.08],
             [-22.47, 31.57],
             [-26.13, 33.83],
             [-30.01, 35.85],
             [-34.08, 37.61],
             [-23.86, 26.35],
             [-27.68, 28.25],
             [-31.68, 29.88],
             [-35.84, 31.25],
             [-40.15, 32.32],
             [-28.27, 22.84],
             [-32.35, 24.1],
             [-36.57, 25.07],
             [-40.91, 25.75],
             [-45.36, 26.12],
             [-32.11, 18.63],
             [-36.35, 19.22],
             [-40.69, 19.51],
             [-45.09, 19.49],
             [-49.55, 19.14],
             [-35.29, 13.82],
             [-39.58, 13.73],
             [-43.92, 13.33],
             [-48.28, 12.61],
             [-52.65, 11.56],
             [-37.72, 8.51],
             [-41.96, 7.75],
             [-46.19, 6.67],
             [-50.39, 5.27],
             [-54.55, 3.55],
             [-39.33, 2.84],
             [-43.41, 1.43],
             [-47.43, -0.31],
             [-51.38, -2.35],
             [-55.23, -4.71],
             [-40.07, -3.08],
             [-43.89, -5.11],
             [-47.61, -7.45],
             [-51.21, -10.08],
             [-54.66, -13.01],
             [-39.92, -9.1],
             [-43.39, -11.7],
             [-46.72, -14.59],
             [-49.88, -17.76],
             [-52.85, -21.19],
             [-38.86, -15.1],
             [-41.9, -18.21],
             [-44.76, -21.58],
             [-47.41, -25.19],
             [-49.84, -29.05],
             [-36.9, -20.94],
             [-39.45, -24.48],
             [-41.77, -28.25],
             [-43.86, -32.23],
             [-45.68, -36.43],
             [-34.09, -26.48],
             [-36.08, -30.37],
             [-37.82, -34.46],
             [-39.29, -38.72],
             [-40.47, -43.15],
             [-30.46, -31.6],
             [-31.86, -35.76],
             [-32.97, -40.07],
             [-33.79, -44.52],
             [-34.31, -49.09],
             [-26.1, -36.19],
             [-26.86, -40.52],
             [-27.33, -44.96],
             [-27.49, -49.5],
             [-27.32, -54.11],
             [-21.07, -40.15],
             [-21.19, -44.56],
             [-21.0, -49.03],
             [-20.49, -53.55],
             [-19.65, -58.1],
             [-15.48, -43.38],
             [-14.96, -47.77],
             [-14.11, -52.18],
             [-12.95, -56.59],
             [-11.45, -60.99],
             [-9.43, -45.81],
             [-8.28, -50.09],
             [-6.8, -54.34],
             [-5.0, -58.55],
             [-2.88, -62.7],
             [-3.05, -47.38],
             [-1.28, -51.46],
             [0.79, -55.47],
             [3.19, -59.39],
             [5.89, -63.2],
             [3.55, -48.04],
             [5.89, -51.84],
             [8.52, -55.53],
             [11.46, -59.07],
             [14.68, -62.47],
             [10.23, -47.79],
             [13.09, -51.23],
             [16.24, -54.51],
             [19.66, -57.61],
             [23.34, -60.53],
             [16.88, -46.61],
             [20.2, -49.61],
             [23.79, -52.43],
             [27.62, -55.03],
             [31.69, -57.4],
             [23.34, -44.51],
             [27.07, -47.03],
             [31.03, -49.31],
             [35.2, -51.36],
             [39.58, -53.14],
             [29.52, -41.52],
             [33.57, -43.5],
             [37.82, -45.22],
             [42.25, -46.66],
             [46.85, -47.83],
             [35.28, -37.7],
             [39.57, -39.1],
             [44.03, -40.21],
             [48.63, -41.03],
             [53.36, -41.55],
             [40.51, -33.1],
             [44.97, -33.89],
             [49.55, -34.38],
             [54.24, -34.56],
             [59.01, -34.42],
             [45.11, -27.8],
             [49.65, -27.97],
             [54.27, -27.82],
             [58.95, -27.35],
             [63.67, -26.56],
             [48.99, -21.89],
             [53.53, -21.43],
             [58.1, -20.65],
             [62.68, -19.55],
             [67.26, -18.11],
             [52.08, -15.46],
             [56.53, -14.39],
             [60.96, -13.0],
             [65.37, -11.27],
             [69.72, -9.22],
             [54.31, -8.64],
             [58.58, -6.97],
             [62.8, -4.98],
             [66.94, -2.67],
             [71.0, -0.04],
             [55.64, -1.53],
             [59.66, 0.71],
             [63.58, 3.25],
             [67.38, 6.11],
             [71.06, 9.27],
             [56.03, 5.75],
             [59.72, 8.51],
             [63.27, 11.57],
             [66.67, 14.91],
             [69.9, 18.55],
             [55.46, 13.06],
             [58.76, 16.3],
             [61.88, 19.82],
             [64.82, 23.6],
             [67.54, 27.64],
             [53.94, 20.3],
             [56.79, 23.95],
             [59.43, 27.86],
             [61.84, 32.01],
             [64.01, 36.39],
             [51.49, 27.32],
             [53.83, 31.33],
             [55.93, 35.57],
             [57.78, 40.01],
             [59.37, 44.65],
             [48.13, 34.01],
             [49.93, 38.31],
             [51.46, 42.8],
             [52.71, 47.46],
             [53.68, 52.29],
             [43.91, 40.26],
             [45.14, 44.77],
             [46.07, 49.44],
             [46.71, 54.24],
             [47.03, 59.16],
             [38.91, 45.97],
             [39.53, 50.61],
             [39.85, 55.37],
             [39.86, 60.23],
             [39.54, 65.17],
             [33.18, 51.02],
             [33.2, 55.72],
             [32.9, 60.5],
             [32.27, 65.33],
             [31.31, 70.2],
             [26.82, 55.35],
             [26.23, 60.02],
             [25.31, 64.73],
             [24.06, 69.45],
             [22.47, 74.17],
             [19.93, 58.86],
             [18.73, 63.43],
             [17.21, 67.99],
             [15.36, 72.53],
             [13.17, 77.02],
             [12.6, 61.49],
             [10.83, 65.89],
             [8.72, 70.23],
             [6.3, 74.51],
             [3.55, 78.69],
             [4.96, 63.21],
             [2.63, 67.35],
             [-0.02, 71.4],
             [-2.98, 75.34],
             [-6.25, 79.15],
             [-2.89, 63.96],
             [-5.73, 67.79],
             [-8.88, 71.48],
             [-12.33, 75.02],
             [-16.07, 78.4],
             [-10.81, 63.75],
             [-14.13, 67.19],
             [-17.73, 70.46],
             [-21.61, 73.55],
             [-25.76, 76.43],
             [-18.7, 62.54],
             [-22.43, 65.55],
             [-26.43, 68.35],
             [-30.68, 70.93],
             [-35.18, 73.27],
             [-26.42, 60.37],
             [-30.52, 62.89],
             [-34.85, 65.17],
             [-39.4, 67.2],
             [-44.17, 68.97],
             [-33.86, 57.26],
             [-38.26, 59.24],
             [-42.85, 60.97],
             [-47.64, 62.42],
             [-52.6, 63.58],
             [-40.91, 53.23],
             [-45.53, 54.66],
             [-50.32, 55.8],
             [-55.27, 56.64],
             [-60.35, 57.18],
             [-47.46, 48.35],
             [-52.23, 49.2],
             [-57.14, 49.73],
             [-62.17, 49.96],
             [-67.29, 49.86],
             [-53.4, 42.69],
             [-58.25, 42.93],
             [-63.2, 42.86],
             [-68.23, 42.46],
             [-73.32, 41.73],
             [-58.64, 36.32],
             [-63.5, 35.96],
             [-68.42, 35.27],
             [-73.38, 34.25],
              [-78.35, 32.89],
              [-63.1, 29.32],
              [-67.9, 28.36],
              [-72.71, 27.07],
              [-77.52, 25.44],
              [-82.3, 23.48],
              [-66.72, 21.8],
              [-71.37, 20.26],
              [-76.0, 18.38],
              [-80.59, 16.17],
              [-85.11, 13.63],
              [-69.43, 13.86],
              [-73.87, 11.76],
              [-78.24, 9.32],
              [-82.54, 6.56],
              [-86.73, 3.47],
              [-71.18, 5.62],
              [-75.34, 2.97],
              [-79.4, 0.01],
              [-83.34, -3.26],
              [-87.13, -6.84],
              [-71.94, -2.83],
              [-75.77, -5.96], 
              [-79.45, -9.4], 
              [-82.97, -13.14], 
              [-86.31, -17.17]
            ],
            "drops": [
                {
                    "item": "ore_gold",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_horn",
                    "chance": 30,
                    "count_range": [
                        1,
                        3
                    ]
                },
                {
                    "cosmetic": "head_stalagmite_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": "spr_nothing",
                "walk": "spr_nothing",
                "windup": "spr_monster_stalagmite_purple_windup",
                "attack": "spr_monster_stalagmite_purple_attack",
                "tired": "spr_monster_stalagmite_purple_tired",
                "flee": "spr_monster_stalagmite_purple_flee",
                "hurt": "spr_monster_stalagmite_purple_hurt",
                "dying": "spr_monster_stalagmite_purple_hurt",
                "misc": {
                    "ground_walk": "spr_monster_stalagmite_ground_purple_walk",
                    "ground_windup": "spr_monster_stalagmite_ground_purple_windup",
                    "ground_attack": "spr_monster_stalagmite_ground_purple_attack",
                    "ground_flee": "spr_monster_stalagmite_ground_purple_flee",
                    "giblits": "spr_part_rockclod_purple_projectile",
                    "secondary_ground_windup": "spr_monster_stalagmite_purple_secondary_ground_windup",
                    "secondary_spike_windup": "spr_monster_stalagmite_purple_secondary_main_windup",
                    "secondary_ground_attack": "spr_monster_stalagmite_purple_secondary_ground_attack",
                    "secondary_spike_attack": "spr_monster_stalagmite_purple_secondary_main_attack",
                    "secondary_ground_tired": "spr_monster_stalagmite_purple_secondary_ground_tired",
                    "secondary_spike_tired": "spr_monster_stalagmite_purple_secondary_main_tired"
                }
            }
        },
    },
    "mushroom": {
        "tankshroom": {
            "hp": 96,
            "damage": 15,
            "essence": 5,
            "coin_count": [
                1,
                5
            ],
            "drops": [
                {
                    "item": "red_toadstool",
                    "chance": 70
                },
                {
                    "item": "monster_powder",
                    "chance": 30
                },
                {
                    "cosmetic": "head_mushroom_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_mushroom_main_idle_north",
                    "south": "spr_monster_mushroom_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_mushroom_main_alert_north",
                    "south": "spr_monster_mushroom_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_mushroom_main_walk_north",
                    "south": "spr_monster_mushroom_main_walk_south"
                },
                "windup_slide": {
                    "north": "spr_monster_mushroom_main_windup_slide_south",
                    "south": "spr_monster_mushroom_main_windup_slide_south"
                },
                "windup": {
                    "north": "spr_monster_mushroom_main_windup_south",
                    "south": "spr_monster_mushroom_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_mushroom_main_attack_south",
                    "south": "spr_monster_mushroom_main_attack_south"
                },
                "tired": {
                    "north": "spr_monster_mushroom_main_tired_south",
                    "south": "spr_monster_mushroom_main_tired_south"
                },
                "shell": {
                    "north": "spr_monster_mushroom_main_shield_enter_south",
                    "south": "spr_monster_mushroom_main_shield_enter_south"
                },
                "dying": {
                    "north": "spr_monster_mushroom_main_death_south",
                    "south": "spr_monster_mushroom_main_death_south"
                },
                "wiggle": {
                    "north": "spr_monster_mushroom_main_wiggle_south",
                    "south": "spr_monster_mushroom_main_wiggle_south"
                },
                "wiggle_exit": {
                    "north": "spr_monster_mushroom_main_wiggle_exit_south",
                    "south": "spr_monster_mushroom_main_wiggle_exit_south"
                },
                "explode": {
                    "north": "spr_monster_mushroom_main_death_capoff_south",
                    "south": "spr_monster_mushroom_main_death_capoff_south"
                },
                "misc": {
                    "sleep": "spr_monster_mushroom_main_sleep_south",
                    "attack_vfx": "spr_fx_monster_mushroom_spore_attack",
                    "shell_hit": "spr_monster_mushroom_main_shield_hit_south",
                    "enter_wiggle": "spr_monster_mushroom_main_wiggle_enter_south",
                    "hurt_wiggle": "spr_monster_mushroom_main_wiggle_hurt_south"
                }
            },
            "push_force": 100,
            "ari_bounce_distance": 100,
            "windup_friction": 5,
            "windup": [5, 10]
        }
    },
    "mushroom_green": {},
    "mushroom_blue": {},
    "mushroom_purple": {
        "ninja": {
            "hp": 96,
            "damage": 50,
            "essence": 20,
            "speed": 40,
            "spew_lava": true,
            "lava_damage": 1,
            "lava_angle": 90,
            "lava_distance": 16,
            "lava_timer": 300,
            "drops": [
                {
                    "item": "purple_mushroom",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_powder",
                    "chance": 30,
                    "count_range": [
                        1,
                        3
                    ]
                },
                {
                    "cosmetic": "head_mushroom_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_mushroom_purple_main_idle_north",
                    "south": "spr_monster_mushroom_purple_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_mushroom_purple_main_alert_north",
                    "south": "spr_monster_mushroom_purple_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_mushroom_purple_main_walk_north",
                    "south": "spr_monster_mushroom_purple_main_walk_south"
                },
                "windup_slide": {
                    "north": "spr_monster_mushroom_purple_main_windup_slide_south",
                    "south": "spr_monster_mushroom_purple_main_windup_slide_south"
                },
                "windup": {
                    "north": "spr_monster_mushroom_purple_main_windup_south",
                    "south": "spr_monster_mushroom_purple_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_mushroom_purple_main_attack_south",
                    "south": "spr_monster_mushroom_purple_main_attack_south"
                },
                "tired": {
                    "north": "spr_monster_mushroom_purple_main_tired_south",
                    "south": "spr_monster_mushroom_purple_main_tired_south"
                },
                "shell": {
                    "north": "spr_monster_mushroom_purple_main_shield_enter_south",
                    "south": "spr_monster_mushroom_purple_main_shield_enter_south"
                },
                "dying": {
                    "north": "spr_monster_mushroom_purple_main_death_south",
                    "south": "spr_monster_mushroom_purple_main_death_south"
                },
                "wiggle": {
                    "north": "spr_monster_mushroom_purple_main_wiggle_south",
                    "south": "spr_monster_mushroom_purple_main_wiggle_south"
                },
                "wiggle_exit": {
                    "north": "spr_monster_mushroom_purple_main_wiggle_exit_south",
                    "south": "spr_monster_mushroom_purple_main_wiggle_exit_south"
                },
                "explode": {
                    "north": "spr_monster_mushroom_purple_main_death_capoff_south",
                    "south": "spr_monster_mushroom_purple_main_death_capoff_south"
                },
                "misc": {
                    "sleep": "spr_monster_mushroom_purple_main_sleep_south",
                    "attack_vfx": "spr_fx_monster_mushroom_spore_attack",
                    "shell_hit": "spr_monster_mushroom_purple_main_shield_hit_south",
                    "enter_wiggle": "spr_monster_mushroom_purple_main_wiggle_enter_south",
                    "hurt_wiggle": "spr_monster_mushroom_purple_main_wiggle_hurt_south"
                }
            },
            "attack_radius": 704,
            "acknowledgment": [
                1,
                1
            ],
            "tired": [
                1,
                1
            ],
            "shadow_threshold": 0.1,
            "fade_in_rate": 0.1,
            "fade_out_rate": 0.1,
            "windup": [
                1,
                1
            ],
            "lava_count": 4,
            "wiggle": [
                1,
                1
            ],
            "push_force": 100,
            "ari_bounce_distance": 100
        }
    },
    "sapling": {
        "hayden": {
            "hp": 24,
            "damage": 10,
            "essence": 5,
            "coin_count": [
                1,
                5
            ],
            "drops": [
                {
                    "item": "sap",
                    "chance": 70
                },
                {
                    "item": "monster_fang",
                    "chance": 30
                },
                {
                    "cosmetic": "head_sapling_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_npc_hayden_specialanimation_spring_ride_idle_1_north",
                    "south": "spr_npc_hayden_specialanimation_spring_ride_idle_1_south"
                },
                "acknowledgment": {
                    "north": "spr_npc_hayden_specialanimation_spring_ride_jump_south",
                    "south": "spr_npc_hayden_specialanimation_spring_ride_jump_south"
                },
                "walk": {
                    "north": "spr_npc_hayden_specialanimation_spring_ride_walk_north",
                    "south": "spr_npc_hayden_specialanimation_spring_ride_walk_east"
                },
                "windup": {
                    "north": "spr_npc_hayden_specialanimation_spring_ride_run_east",
                    "south": "spr_npc_hayden_specialanimation_spring_ride_run_east"
                },
                "attack": {
                    "north": "spr_npc_hayden_specialanimation_spring_ride_jump_east",
                    "south": "spr_npc_hayden_specialanimation_spring_ride_jump_east"
                },
                "tired": {
                    "north": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east",
                    "south": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east"
                },
                "hurt": {
                    "north": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east",
                    "south": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east"
                },
                "splitting": {
                    "north": "spr_monster_sapling_main_hurt_north",
                    "south": "spr_monster_sapling_main_hurt_south"
                },
                "dying": {
                    "north": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east",
                    "south": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east"
                },
                "misc": {
                    "idle_variant": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east",
                    "landing_north": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east",
                    "landing_south": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east",
                    "sap_particle": "spr_part_sapling_bits",
                    "hit_back_north": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east",
                    "hit_back_south": "spr_npc_hayden_specialanimation_spring_ride_idle_2_east"
                }
            }
        }
    },
    "sapling_cool": {},
    "sapling_purple": {},
    "sapling_orange": {
        "sapma": {
            "hp": 1,
            "damage": 44,
            "essence": 20,
            "speed": 8,
            "attack_radius": 60,
            "max_jump_radius": 780,
            "sap_children_birth_timer": 1,
            "sap_children_birth_distance": 1,
            "sap_children": 20,
            "sap_children_species": "sapling_orange",
            "drops": [
                {
                    "item": "sap",
                    "chance": 70,
                    "count_range": [
                        1,
                        3
                    ]
                },
                {
                    "item": "monster_fang",
                    "chance": 30,
                    "count_range": [
                        1,
                        3
                    ]
                },
                {
                    "cosmetic": "head_sapling_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_sapling_orange_main_idle_north",
                    "south": "spr_monster_sapling_orange_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_sapling_orange_main_alert_north",
                    "south": "spr_monster_sapling_orange_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_sapling_orange_main_walk_north",
                    "south": "spr_monster_sapling_orange_main_walk_south"
                },
                "windup": {
                    "north": "spr_monster_sapling_orange_main_windup_north",
                    "south": "spr_monster_sapling_orange_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_sapling_orange_main_attack_jump_south",
                    "south": "spr_monster_sapling_orange_main_attack_jump_south"
                },
                "tired": {
                    "north": "spr_monster_sapling_orange_main_tired_north",
                    "south": "spr_monster_sapling_orange_main_tired_south"
                },
                "hurt": {
                    "north": "spr_monster_sapling_orange_main_hurt_north",
                    "south": "spr_monster_sapling_orange_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_sapling_orange_main_death_south",
                    "south": "spr_monster_sapling_orange_main_death_south"
                },
                "splitting": {
                    "north": "spr_monster_sapling_orange_main_split_south",
                    "south": "spr_monster_sapling_orange_main_split_south"
                },
                "misc": {
                    "idle_variant": "spr_monster_sapling_orange_main_idle_2_south",
                    "landing_north": "spr_monster_sapling_orange_main_land_north",
                    "landing_south": "spr_monster_sapling_orange_main_land_south",
                    "sap_particle": "spr_part_sapling_orange_bits",
                    "hit_back_north": "spr_monster_sapling_orange_main_hit_back_south",
                    "hit_back_south": "spr_monster_sapling_orange_main_hit_back_south"
                }
            },
            "free_fly": true
        }
    },
    "sapling_orange_mini": {},
    "sapling_pink": {},
    "barrel": {},
    "rock_stack": {},
    "rock_stack_lava": {
        "turbostack": {
            "hp": 85,
            "damage": 45,
            "essence": 15,
            "coin_count": [
                4,
                8
            ],
            "drops": [
                {
                    "item": "ore_stone",
                    "chance": 70,
                    "count_range": [
                        1,
                        2
                    ]
                },
                {
                    "item": "monster_shell",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_rockclod_hat",
                    "chance": 5
                }
            ],
            "super_drops": [
                {
                    "item": "ore_diamond",
                    "chance": 100,
                    "count_range": [
                        3,
                        5
                    ]
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_rock_stack_main_idle_north",
                    "east": "spr_monster_rock_stack_main_idle_east",
                    "south": "spr_monster_rock_stack_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_rock_stack_main_alert_north",
                    "east": "spr_monster_rock_stack_main_alert_east",
                    "south": "spr_monster_rock_stack_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_rock_stack_main_walk_north",
                    "east": "spr_monster_rock_stack_main_walk_east",
                    "south": "spr_monster_rock_stack_main_walk_south"
                },
                "hopping": {
                    "north": "spr_monster_rock_stack_main_launch_bottom_north",
                    "east": "spr_monster_rock_stack_main_launch_bottom_east",
                    "south": "spr_monster_rock_stack_main_launch_bottom_south"
                },
                "windup": {
                    "north": "spr_monster_rock_stack_main_windup_bottom_north",
                    "east": "spr_monster_rock_stack_main_windup_bottom_east",
                    "south": "spr_monster_rock_stack_main_windup_bottom_south"
                },
                "hurt": {
                    "north": "spr_monster_rock_stack_main_hurt_north",
                    "east": "spr_monster_rock_stack_main_hurt_east",
                    "south": "spr_monster_rock_stack_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_rock_stack_main_hurt_south",
                    "east": "spr_monster_rock_stack_main_hurt_south",
                    "south": "spr_monster_rock_stack_main_hurt_south"
                },
                "flying": {
                    "north": "spr_monster_rock_stack_main_fly_high_south",
                    "east": "spr_monster_rock_stack_main_fly_high_south",
                    "south": "spr_monster_rock_stack_main_fly_high_south"
                },
                "launching": {
                    "north": "spr_monster_rock_stack_main_fly_south",
                    "east": "spr_monster_rock_stack_main_fly_south",
                    "south": "spr_monster_rock_stack_main_fly_south"
                },
                "catching": {
                    "north": "spr_monster_rock_stack_main_launch_bottom_north",
                    "east": "spr_monster_rock_stack_main_launch_bottom_east",
                    "south": "spr_monster_rock_stack_main_launch_bottom_south"
                },
                "misc": {
                    "windup_top": "spr_monster_rock_stack_main_windup_top_south",
                    "windup_top_fx": "spr_fx_monster_rock_stack_top_windup_shine",
                    "landing_top": "spr_monster_rock_stack_main_catch_south"
                }
            },
            "rise_speed": -200,
            "fall_speed": 200,
            "fell_stall": [
                1,
                1
            ],
            "air_wait": [
                1,
                1
            ],
            "time_out": 1,
            "speed": 150,
            "air_speed_starting": 150,
            "air_speed_max": 150,
            "jump_speed": -200,
            "jump_gravity": 3,
            "rising_duration": 1,
            "air_speed": 150,
            "whistle_frame": 1
        }
    },
    "cat": {
        "cursed_cat": {
            "hp": 120,
            "damage": 35,
            "essence": 15,
            "coin_count": [
                6,
                10
            ],
            "aggro_radius": 384,
            "charge_range": 64,
            "attack_movement_speed": 6,
            "attack_movement_deccel": 0.2,
            "attack_movement_gate": 2,
            "attack_movement_gate_deccel": 0.2,
            "attack_stall_duration": [
                60,
                60
            ],
            "drops": [
                {
                    "item": "glass",
                    "chance": 70,
                    "count_range": [
                        3,
                        5
                    ]
                },
                {
                    "item": "ore_stone",
                    "chance": 70,
                    "count_range": [
                        3,
                        5
                    ]
                },
                {
                    "item": "obsidian",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_lava_cat_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_cat_main_idle_north",
                    "south": "spr_monster_cat_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_cat_main_acknowledgement_north",
                    "south": "spr_monster_cat_main_acknowledgement_south"
                },
                "walk": {
                    "north": "spr_monster_cat_main_walk_north",
                    "south": "spr_monster_cat_main_walk_south"
                },
                "windup": {
                    "north": "spr_monster_cat_main_windup_north",
                    "south": "spr_monster_cat_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_cat_main_attack_north",
                    "south": "spr_monster_cat_main_attack_south"
                },
                "hurt": {
                    "north": "spr_monster_cat_main_hurt_north",
                    "south": "spr_monster_cat_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_cat_main_hurt_north",
                    "south": "spr_monster_cat_main_hurt_south"
                },
                "tired": {
                    "north": "spr_monster_cat_main_idle_north",
                    "south": "spr_monster_cat_main_idle_south"
                },
                "misc": {
                    "rock_particle": "spr_part_rockclod_projectile",
                    "lava_bits": "spr_part_lava_cat_bits_lava",
                    "lava_bits_transition": "spr_part_lava_cat_bits_transition",
                    "lava_bits_stone": "spr_part_lava_cat_bits_stone",
                    "petrified_hurt_north": "spr_monster_cat_petrified_attack_north",
                    "petrified_hurt_south": "spr_monster_cat_petrified_attack_south"
                },
                "petrified": {
                    "north": "spr_monster_cat_petrified_walk_north",
                    "south": "spr_monster_cat_petrified_walk_south"
                }
            }
        }
    },
    "mimic": {},
    "enchantern": {
        "aggressive_lamp":{
            "hp": 24,
            "damage": 12,
            "essence": 5,
            "electrocute_kind":"blue",
            "windup": [10,20],
            "flee_timer": [10,20],
            "charge_speed":2,
            "flee_speed":5,
            "coin_count": [
                1,
                5
            ],
            "electrocute_kind": "yellow",
            "drops_balls": false,
            "drops": [
                {
                    "item": "glass",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_core",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_enchantern_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_enchantern_off_alert_north",
                    "south": "spr_monster_enchantern_off_alert_south"
                },
                "flicker_on": {
                    "north": "spr_monster_enchantern_state_transition_main_on_north",
                    "south": "spr_monster_enchantern_state_transition_main_on_south"
                },
                "charge": {
                    "north": "spr_monster_enchantern_on_charge_north",
                    "south": "spr_monster_enchantern_on_charge_south"
                },
                "flee": {
                    "north": "spr_monster_enchantern_off_flee_north",
                    "south": "spr_monster_enchantern_off_flee_south"
                },
                "go_home": {
                    "north": "spr_monster_enchantern_off_walk_north",
                    "south": "spr_monster_enchantern_off_walk_south"
                },
                "hurt": {
                    "north": "spr_monster_enchantern_off_hurt_north",
                    "south": "spr_monster_enchantern_off_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_enchantern_off_death_south",
                    "south": "spr_monster_enchantern_off_death_south"
                },
                "misc": {
                    "static_effect": "spr_fx_monster_enchantern_static",
                    "charge": "spr_fx_monster_enchantern_charge",
                    "charge_off_north": "spr_monster_enchantern_off_charge_north",
                    "charge_off_south": "spr_monster_enchantern_off_charge_south",
                    "attack_north": "spr_monster_enchantern_on_attack_north",
                    "attack_south": "spr_monster_enchantern_on_attack_south",
                    "gibs": "spr_part_enchantern_bits",
                    "proj_mask_index": "spr_monster_enchantern_projectile_main_loop",
                    "proj_main_start": "spr_monster_enchantern_floor_ball_main_start",
                    "proj_main_loop": "spr_monster_enchantern_floor_ball_main_loop",
                    "proj_main_fizzle": "spr_monster_enchantern_floor_ball_main_fizzle"
                }
            }
        },
        "a_moths_dream":{
            "hp": 24,
            "damage": 12,
            "essence": 5,
            "projectile_timer":[6000,12000],
            "attack_radius":384,
            "coin_count": [
                1,
                5
            ],
            "electrocute_kind": "yellow",
            "drops_balls": true,
            "drops": [
                {
                    "item": "glass",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_core",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_enchantern_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_enchantern_off_alert_north",
                    "south": "spr_monster_enchantern_off_alert_south"
                },
                "flicker_on": {
                    "north": "spr_monster_enchantern_state_transition_main_on_north",
                    "south": "spr_monster_enchantern_state_transition_main_on_south"
                },
                "charge": {
                    "north": "spr_monster_enchantern_on_charge_north",
                    "south": "spr_monster_enchantern_on_charge_south"
                },
                "flee": {
                    "north": "spr_monster_enchantern_off_flee_north",
                    "south": "spr_monster_enchantern_off_flee_south"
                },
                "go_home": {
                    "north": "spr_monster_enchantern_off_walk_north",
                    "south": "spr_monster_enchantern_off_walk_south"
                },
                "hurt": {
                    "north": "spr_monster_enchantern_off_hurt_north",
                    "south": "spr_monster_enchantern_off_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_enchantern_off_death_south",
                    "south": "spr_monster_enchantern_off_death_south"
                },
                "misc": {
                    "static_effect": "spr_fx_monster_enchantern_static",
                    "charge": "spr_fx_monster_enchantern_charge",
                    "charge_off_north": "spr_monster_enchantern_off_charge_north",
                    "charge_off_south": "spr_monster_enchantern_off_charge_south",
                    "attack_north": "spr_monster_enchantern_on_attack_north",
                    "attack_south": "spr_monster_enchantern_on_attack_south",
                    "gibs": "spr_part_enchantern_bits",
                    "proj_mask_index": "spr_monster_enchantern_projectile_main_loop",
                    "proj_main_start": "spr_monster_enchantern_floor_ball_main_start",
                    "proj_main_loop": "spr_monster_enchantern_floor_ball_main_loop",
                    "proj_main_fizzle": "spr_monster_enchantern_floor_ball_main_fizzle"
                }
            }
        },
        "jumpscare_lantern":{
            "hp": 24,
            "damage": 12,
            "essence": 5,
            "drops_balls":true,
            "projectile_timer":[1,60],
            "coin_count": [
                1,
                5
            ],
            "electrocute_kind": "yellow",
            "drops_balls": false,
            "drops": [
                {
                    "item": "glass",
                    "chance": 70,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "item": "monster_core",
                    "chance": 30,
                    "count_range": [
                        1,
                        1
                    ]
                },
                {
                    "cosmetic": "head_enchantern_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "flicker_on": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "charge": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "flee": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "go_home": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "hurt": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "dying": {
                    "north": "spr_monster_enchantern_off_idle_north",
                    "south": "spr_monster_enchantern_off_idle_south"
                },
                "misc": {
                    "static_effect": "spr_fx_monster_enchantern_static",
                    "charge": "spr_fx_monster_enchantern_charge",
                    "charge_off_north": "spr_monster_enchantern_off_idle_north",
                    "charge_off_south": "spr_monster_enchantern_off_idle_south",
                    "attack_north": "spr_monster_enchantern_on_idle_north",
                    "attack_south": "spr_monster_enchantern_on_idle_south",
                    "gibs": "spr_part_enchantern_bits",
                    "proj_mask_index": "spr_monster_enchantern_projectile_main_loop",
                    "proj_main_start": "spr_monster_enchantern_floor_ball_main_start",
                    "proj_main_loop": "spr_monster_enchantern_floor_ball_main_loop",
                    "proj_main_fizzle": "spr_monster_enchantern_floor_ball_main_fizzle"
                }
            }
        },
        "electric_chicken":{
            "hp": 24,
            "damage": 12,
            "essence": 5,
            "coin_count": [
                1,
                5
            ],
            "electrocute_kind": "yellow",
            "drops_balls": false,
            "drops": [
                {
                    "item":"egg",
                    "chance":85,
                    "count_range":[1,1]
                },
                {
                    "item":"golden_egg",
                    "chance":1,
                    "count_range":[1,1]
                }
            ],
            "sprites":{
                "idle": {
                    "north": "spr_animal_chicken_basic_female_idle_north",
                    "south": "spr_animal_chicken_basic_female_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_animal_chicken_basic_female_jump_north",
                    "south": "spr_animal_chicken_basic_female_jump_south"
                },
                "flicker_on": {
                    "north": "spr_animal_chicken_basic_female_idle_north",
                    "south": "spr_animal_chicken_basic_female_idle_south"
                },
                "charge": {
                    "north": "spr_animal_chicken_summer_female_jump_north",
                    "south": "spr_animal_chicken_summer_female_jump_south"
                },
                "flee": {
                    "north": "spr_animal_chicken_basic_female_walk_north",
                    "south": "spr_animal_chicken_basic_female_walk_south"
                },
                "go_home": {
                    "north": "spr_animal_chicken_basic_female_walk_north",
                    "south": "spr_animal_chicken_basic_female_walk_south"
                },
                "hurt": {
                    "north": "spr_animal_chicken_basic_female_flap_east",
                    "south": "spr_animal_chicken_basic_female_flap_east"
                },
                "dying": {
                    "north": "spr_animal_chicken_basic_female_sleep_east",
                    "south": "spr_animal_chicken_basic_female_sleep_east"
                },
                "misc": {
                    "static_effect": "spr_fx_monster_enchantern_static",
                    "charge": "spr_fx_monster_enchantern_charge",
                    "charge_off_north": "spr_animal_chicken_basic_female_jump_north",
                    "charge_off_south": "spr_animal_chicken_basic_female_jump_south",
                    "attack_north": "spr_animal_chicken_summer_female_jump_north",
                    "attack_south": "spr_animal_chicken_summer_female_jump_south",
                    "gibs": "spr_part_enchantern_bits",
                    "proj_mask_index": "spr_monster_enchantern_projectile_main_loop",
                    "proj_main_start": "spr_monster_enchantern_floor_ball_main_start",
                    "proj_main_loop": "spr_monster_enchantern_floor_ball_main_loop",
                    "proj_main_fizzle": "spr_monster_enchantern_floor_ball_main_fizzle"
                }
            },
            "tango":{
                "flicker_on": "SoundEffects/Animals/ChickenAAmbient/ChickenAAmbient1",
                "dying": "SoundEffects/Animals/ChickenUpsetReact/ChickenUpsetReact1",
                "misc": {
                    "active_footstep": "SoundEffects/Animals/ChickenHenriettaAmbient/ChickenHenriettaAmbient4",
                    "inactive_footstep": "SoundEffects/Animals/ChickenBAmbient/ChickenBAmbient5",
                    "active_loop": "SoundEffects/Animals/ChickenHenriettaCutscene/ChickenHenriettaAmbient3",
                    "wind_down": "SoundEffects/Animals/ChickenBAmbient/ChickenBAmbient5",
                    "turn_off": "SoundEffects/Animals/ChickenUpsetReact/ChickenUpsetReact2",
                    "spawn_orb": "SoundEffects/Animals/ChickenAAmbient/ChickenAAmbient2",
                    "weak_damage": "SoundEffects/Animals/ChickenUpsetReact/ChickenUpsetReact1",
                    "strong_damage": "SoundEffects/Animals/ChickenUpsetReact/ChickenUpsetReact3"
                }
            }
        },
    },
    "enchantern_blue": {},
    "rockclod": {},
    "copperclod": {},
    "rockclod_blue": {},
    "ironclod": {},
    "rockclod_green": {
        "suicideclod": {
            "hp": 32,
            "damage": 24,
            "essence": 15,
            "coin_count": [
                4,
                8
            ],
            "launcher": true,
            "launch_speed": 10,
            "launch_friction": 0.97,
            "launch_cancel_threshold": 0.5,
            "jump_speed": -2,
            "jump_gravity": 0.1,
            "jump_cap": -12,
            "reflect_speed": 3,
            "projectile_speed": 2.0,
            "drops": [
                {
                    "item": "ore_stone",
                    "chance": 70,
                    "count_range": [
                        4,
                        6
                    ]
                },
                {
                    "item": "monster_shell",
                    "chance": 30,
                    "count_range": [
                        1,
                        3
                    ]
                },
                {
                    "cosmetic": "head_rockclod_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_rockclod_green_main_idle_north",
                    "east": "spr_monster_rockclod_green_main_idle_east",
                    "south": "spr_monster_rockclod_green_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_rockclod_green_main_alert_north",
                    "east": "spr_monster_rockclod_green_main_alert_east",
                    "south": "spr_monster_rockclod_green_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_rockclod_green_main_walk_north",
                    "east": "spr_monster_rockclod_green_main_walk_east",
                    "south": "spr_monster_rockclod_green_main_walk_south"
                },
                "windup": {
                    "north": "spr_monster_rockclod_green_main_windup_north",
                    "east": "spr_monster_rockclod_green_main_windup_east",
                    "south": "spr_monster_rockclod_green_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_rockclod_green_main_attack_north",
                    "east": "spr_monster_rockclod_green_main_attack_east",
                    "south": "spr_monster_rockclod_green_main_attack_south"
                },
                "tired": {
                    "north": "spr_monster_rockclod_green_main_idle_north",
                    "east": "spr_monster_rockclod_green_main_idle_east",
                    "south": "spr_monster_rockclod_green_main_idle_south"
                },
                "hurt": {
                    "north": "spr_monster_rockclod_green_main_hurt_north",
                    "east": "spr_monster_rockclod_green_main_hurt_east",
                    "south": "spr_monster_rockclod_green_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_rockclod_green_main_death_south",
                    "east": "spr_monster_rockclod_green_main_death_east",
                    "south": "spr_monster_rockclod_green_main_death_south"
                },
                "misc": {
                    "projectile": "spr_monster_rockclod_green_projectile_main",
                    "rock_particle": "spr_part_rockclod_green_projectile",
                    "fall": "spr_monster_rockclod_green_main_falling_death_south"
                },
                "flying": {
                    "north": "spr_monster_rockclod_green_main_flying_attack_north",
                    "east": "spr_monster_rockclod_green_main_flying_attack_east",
                    "south": "spr_monster_rockclod_green_main_flying_attack_south"
                }
            },
            "death_explosion_count": 73,
            "death_explosion_angle": 5,
            "speed": 4.0
        }
    },
    "silverclod": {},
    "rockclod_red": {
        "bomberclod": {
            "hp": 48,
            "damage": 36,
            "coin_count": [
                6,
                12
            ],
            "essence": 20,
            "attack_sequence": 73,
            "attack_legion": 1,
            "attack_sequence_turn": 5,
            "attack_sequence_image_speed": 2,
            "projectile_speed": 4.0,
            "death_explosion_count": 9,
            "death_explosion_angle": 45,
            "death_explosion_speed": 1.8,
            "death_explosion_delay": 30,
            "drops": [
                {
                    "item": "ore_stone",
                    "chance": 70,
                    "count_range": [
                        6,
                        12
                    ]
                },
                {
                    "item": "monster_shell",
                    "chance": 30,
                    "count_range": [
                        1,
                        4
                    ]
                },
                {
                    "cosmetic": "head_rockclod_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_rockclod_red_main_idle_north",
                    "east": "spr_monster_rockclod_red_main_idle_east",
                    "south": "spr_monster_rockclod_red_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_rockclod_red_main_alert_north",
                    "east": "spr_monster_rockclod_red_main_alert_east",
                    "south": "spr_monster_rockclod_red_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_rockclod_red_main_walk_north",
                    "east": "spr_monster_rockclod_red_main_walk_east",
                    "south": "spr_monster_rockclod_red_main_walk_south"
                },
                "windup": {
                    "north": "spr_monster_rockclod_red_main_windup_north",
                    "east": "spr_monster_rockclod_red_main_windup_east",
                    "south": "spr_monster_rockclod_red_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_rockclod_red_main_attack_north",
                    "east": "spr_monster_rockclod_red_main_attack_east",
                    "south": "spr_monster_rockclod_red_main_attack_south"
                },
                "tired": {
                    "north": "spr_monster_rockclod_red_main_idle_north",
                    "east": "spr_monster_rockclod_red_main_idle_east",
                    "south": "spr_monster_rockclod_red_main_idle_south"
                },
                "hurt": {
                    "north": "spr_monster_rockclod_red_main_hurt_north",
                    "east": "spr_monster_rockclod_red_main_hurt_east",
                    "south": "spr_monster_rockclod_red_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_rockclod_red_main_death_south",
                    "east": "spr_monster_rockclod_red_main_death_east",
                    "south": "spr_monster_rockclod_red_main_death_south"
                },
                "misc": {
                    "projectile": "spr_monster_rockclod_red_projectile_main",
                    "rock_particle": "spr_part_rockclod_red_projectile"
                },
                "flying": {
                    "north": "spr_monster_ironclod_main_walk_north",
                    "east": "spr_monster_ironclod_main_walk_east",
                    "south": "spr_monster_ironclod_main_walk_south"
                }
            },
            "bomber": true,
            "bomb_ammo": 7300000,
            "bomb_chance": 98,
            "bomb_projectile_speed": 4.0,
            "bomb_stall": 0,
            "bomb_delay": 0,
            "split_angle": 45,
            "split_depth": 4,
            "split_distance": 5
        },
        "killerclod": {
            "hp": 48,
            "damage": 36,
            "coin_count": [
                6,
                12
            ],
            "essence": 20,
            "attack_sequence": 91,
            "attack_legion": 2,
            "attack_sequence_turn": 188,
            "attack_sequence_image_speed": 16,
            "projectile_speed": 2.0,
            "death_explosion_count": 9,
            "death_explosion_angle": 45,
            "death_explosion_speed": 1.8,
            "death_explosion_delay": 30,
            "drops": [
                {
                    "item": "ore_stone",
                    "chance": 70,
                    "count_range": [
                        6,
                        12
                    ]
                },
                {
                    "item": "monster_shell",
                    "chance": 30,
                    "count_range": [
                        1,
                        4
                    ]
                },
                {
                    "cosmetic": "head_rockclod_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_rockclod_red_main_idle_north",
                    "east": "spr_monster_rockclod_red_main_idle_east",
                    "south": "spr_monster_rockclod_red_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_rockclod_red_main_alert_north",
                    "east": "spr_monster_rockclod_red_main_alert_east",
                    "south": "spr_monster_rockclod_red_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_rockclod_red_main_walk_north",
                    "east": "spr_monster_rockclod_red_main_walk_east",
                    "south": "spr_monster_rockclod_red_main_walk_south"
                },
                "windup": {
                    "north": "spr_monster_rockclod_red_main_windup_north",
                    "east": "spr_monster_rockclod_red_main_windup_east",
                    "south": "spr_monster_rockclod_red_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_rockclod_red_main_attack_north",
                    "east": "spr_monster_rockclod_red_main_attack_east",
                    "south": "spr_monster_rockclod_red_main_attack_south"
                },
                "tired": {
                    "north": "spr_monster_rockclod_red_main_idle_north",
                    "east": "spr_monster_rockclod_red_main_idle_east",
                    "south": "spr_monster_rockclod_red_main_idle_south"
                },
                "hurt": {
                    "north": "spr_monster_rockclod_red_main_hurt_north",
                    "east": "spr_monster_rockclod_red_main_hurt_east",
                    "south": "spr_monster_rockclod_red_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_rockclod_red_main_death_south",
                    "east": "spr_monster_rockclod_red_main_death_east",
                    "south": "spr_monster_rockclod_red_main_death_south"
                },
                "misc": {
                    "projectile": "spr_monster_rockclod_red_projectile_main",
                    "rock_particle": "spr_part_rockclod_red_projectile"
                },
                "flying": {
                    "north": "spr_monster_ironclod_main_walk_north",
                    "east": "spr_monster_ironclod_main_walk_east",
                    "south": "spr_monster_ironclod_main_walk_south"
                }
            },
            "bomber": true,
            "bomb_ammo": 7300000,
            "bomb_chance": 98,
            "bomb_projectile_speed": 2.0,
            "bomb_stall": 0,
            "bomb_delay": 0,
            "split_angle": 90,
            "split_depth": 2,
            "split_distance": 20
        },
        "ziggy": {
            "hp": 48,
            "damage": 36,
            "coin_count": [
                6,
                12
            ],
            "essence": 20,
            "attack_sequence": 4,
            "attack_legion": 4,
            "attack_sequence_turn": 90,
            "attack_sequence_image_speed": 2,
            "projectile_speed": 1,
            "death_explosion_count": 9,
            "death_explosion_angle": 45,
            "death_explosion_speed": 1.8,
            "death_explosion_delay": 30,
            "drops": [
                {
                    "item": "ore_stone",
                    "chance": 70,
                    "count_range": [
                        6,
                        12
                    ]
                },
                {
                    "item": "monster_shell",
                    "chance": 30,
                    "count_range": [
                        1,
                        4
                    ]
                },
                {
                    "cosmetic": "head_rockclod_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_rockclod_red_main_idle_north",
                    "east": "spr_monster_rockclod_red_main_idle_east",
                    "south": "spr_monster_rockclod_red_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_rockclod_red_main_alert_north",
                    "east": "spr_monster_rockclod_red_main_alert_east",
                    "south": "spr_monster_rockclod_red_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_rockclod_red_main_walk_north",
                    "east": "spr_monster_rockclod_red_main_walk_east",
                    "south": "spr_monster_rockclod_red_main_walk_south"
                },
                "windup": {
                    "north": "spr_monster_rockclod_red_main_windup_north",
                    "east": "spr_monster_rockclod_red_main_windup_east",
                    "south": "spr_monster_rockclod_red_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_rockclod_red_main_attack_north",
                    "east": "spr_monster_rockclod_red_main_attack_east",
                    "south": "spr_monster_rockclod_red_main_attack_south"
                },
                "tired": {
                    "north": "spr_monster_rockclod_red_main_idle_north",
                    "east": "spr_monster_rockclod_red_main_idle_east",
                    "south": "spr_monster_rockclod_red_main_idle_south"
                },
                "hurt": {
                    "north": "spr_monster_rockclod_red_main_hurt_north",
                    "east": "spr_monster_rockclod_red_main_hurt_east",
                    "south": "spr_monster_rockclod_red_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_rockclod_red_main_death_south",
                    "east": "spr_monster_rockclod_red_main_death_east",
                    "south": "spr_monster_rockclod_red_main_death_south"
                },
                "misc": {
                    "projectile": "spr_monster_rockclod_red_projectile_main",
                    "rock_particle": "spr_part_rockclod_red_projectile"
                },
                "flying": {
                    "north": "spr_monster_ironclod_main_walk_north",
                    "east": "spr_monster_ironclod_main_walk_east",
                    "south": "spr_monster_ironclod_main_walk_south"
                }
            },
            "bomber": true,
            "bomb_ammo": 7300000,
            "bomb_chance": 98,
            "bomb_projectile_speed": 4.0,
            "bomb_stall": 0,
            "bomb_delay": 0,
            "split_angle": 90,
            "split_depth": 6,
            "split_distance": 40,
            "attack_radial_degree": 45,
            "split_speed": 4.2
        }
    },
    "goldclod": {
        "clusterclod": {
            "hp": 48,
            "damage": 28,
            "essence": 20,
            "coin_count": [
                6,
                12
            ],
            "split_depth": 6,
            "split_angle": 225,
            "split_distance": 20,
            "split_depreciation": 1.25,
            "projectile_speed": 1,
            "drops": [
                {
                    "item": "ore_gold",
                    "count_range": [
                        1,
                        3
                    ],
                    "exclusive": false
                },
                {
                    "item": "monster_shell",
                    "chance": 25,
                    "count_range": [
                        1,
                        4
                    ]
                },
                {
                    "item": "ore_diamond",
                    "chance": 5
                },
                {
                    "cosmetic": "head_oreclod_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_goldclod_main_idle_north",
                    "east": "spr_monster_goldclod_main_idle_east",
                    "south": "spr_monster_goldclod_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_goldclod_main_alert_north",
                    "east": "spr_monster_goldclod_main_alert_east",
                    "south": "spr_monster_goldclod_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_goldclod_main_walk_north",
                    "east": "spr_monster_goldclod_main_walk_east",
                    "south": "spr_monster_goldclod_main_walk_south"
                },
                "windup": {
                    "north": "spr_monster_goldclod_main_windup_north",
                    "east": "spr_monster_goldclod_main_windup_east",
                    "south": "spr_monster_goldclod_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_goldclod_main_attack_north",
                    "east": "spr_monster_goldclod_main_attack_east",
                    "south": "spr_monster_goldclod_main_attack_south"
                },
                "tired": {
                    "north": "spr_monster_goldclod_main_idle_north",
                    "east": "spr_monster_goldclod_main_idle_east",
                    "south": "spr_monster_goldclod_main_idle_south"
                },
                "hurt": {
                    "north": "spr_monster_goldclod_main_hurt_north",
                    "east": "spr_monster_goldclod_main_hurt_east",
                    "south": "spr_monster_goldclod_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_goldclod_main_death_south",
                    "east": "spr_monster_goldclod_main_death_east",
                    "south": "spr_monster_goldclod_main_death_south"
                },
                "misc": {
                    "projectile": "spr_monster_goldclod_projectile_main",
                    "rock_particle": "spr_part_goldclod_projectile"
                },
                "flying": {
                    "north": "spr_monster_ironclod_main_walk_north",
                    "east": "spr_monster_ironclod_main_walk_east",
                    "south": "spr_monster_ironclod_main_walk_south"
                }
            },
            "bomber": true,
            "bomb_ammo": 1000,
            "bomb_chance": 100,
            "bomb_projectile_speed": 1.0,
            "bomb_stall": 0,
            "bomb_delay": 0,
            "tired": [
                0,
                1
            ],
            "attack_legion": 2,
            "attack_sequence": 6,
            "split_speed": 1.2
        },
        "goldbomber": {
            "hp": 48,
            "damage": 28,
            "essence": 20,
            "coin_count": [
                6,
                12
            ],
            "split_depth": 4,
            "split_angle": 45,
            "split_distance": 5,
            "split_depreciation": 1.25,
            "projectile_speed": 4.0,
            "drops": [
                {
                    "item": "ore_gold",
                    "count_range": [
                        1,
                        3
                    ],
                    "exclusive": false
                },
                {
                    "item": "monster_shell",
                    "chance": 25,
                    "count_range": [
                        1,
                        4
                    ]
                },
                {
                    "item": "ore_diamond",
                    "chance": 5
                },
                {
                    "cosmetic": "head_oreclod_hat",
                    "chance": 5
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_monster_goldclod_main_idle_north",
                    "east": "spr_monster_goldclod_main_idle_east",
                    "south": "spr_monster_goldclod_main_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_monster_goldclod_main_alert_north",
                    "east": "spr_monster_goldclod_main_alert_east",
                    "south": "spr_monster_goldclod_main_alert_south"
                },
                "walk": {
                    "north": "spr_monster_goldclod_main_walk_north",
                    "east": "spr_monster_goldclod_main_walk_east",
                    "south": "spr_monster_goldclod_main_walk_south"
                },
                "windup": {
                    "north": "spr_monster_goldclod_main_windup_north",
                    "east": "spr_monster_goldclod_main_windup_east",
                    "south": "spr_monster_goldclod_main_windup_south"
                },
                "attack": {
                    "north": "spr_monster_goldclod_main_attack_north",
                    "east": "spr_monster_goldclod_main_attack_east",
                    "south": "spr_monster_goldclod_main_attack_south"
                },
                "tired": {
                    "north": "spr_monster_goldclod_main_idle_north",
                    "east": "spr_monster_goldclod_main_idle_east",
                    "south": "spr_monster_goldclod_main_idle_south"
                },
                "hurt": {
                    "north": "spr_monster_goldclod_main_hurt_north",
                    "east": "spr_monster_goldclod_main_hurt_east",
                    "south": "spr_monster_goldclod_main_hurt_south"
                },
                "dying": {
                    "north": "spr_monster_goldclod_main_death_south",
                    "east": "spr_monster_goldclod_main_death_east",
                    "south": "spr_monster_goldclod_main_death_south"
                },
                "misc": {
                    "projectile": "spr_monster_goldclod_projectile_main",
                    "rock_particle": "spr_part_goldclod_projectile"
                },
                "flying": {
                    "north": "spr_monster_ironclod_main_walk_north",
                    "east": "spr_monster_ironclod_main_walk_east",
                    "south": "spr_monster_ironclod_main_walk_south"
                }
            },
            "bomber": true,
            "bomb_ammo": 1000,
            "bomb_chance": 100,
            "bomb_projectile_speed": 1.0,
            "bomb_stall": 0,
            "bomb_delay": 0,
            "tired": [
                0,
                1
            ],
            "attack_legion": 2
        }
    },
    "rockclod_purple": {
        "adeline": {
            "hp": 1000,
            "damage": 50,
            "essence": 25,
            "drops": [
                {
                    "item": "ore_stone",
                    "count": [
                        1,
                        2
                    ],
                    "exclusive": false
                },
                {
                    "item": "ore_pink_diamond",
                    "chance": 5
                },
                {
                    "item": "perfect_pink_diamond",
                    "chance": 1
                }
            ],
            "sprites": {
                "idle": {
                    "north": "spr_npc_adeline_autumn_idle_north",
                    "east": "spr_npc_adeline_autumn_idle_east",
                    "south": "spr_npc_adeline_autumn_idle_south"
                },
                "acknowledgment": {
                    "north": "spr_npc_adeline_autumn_blink_south",
                    "east": "spr_npc_adeline_autumn_blink_south",
                    "south": "spr_npc_adeline_autumn_blink_south"
                },
                "walk": {
                    "north": "spr_npc_adeline_autumn_walk_north",
                    "east": "spr_npc_adeline_autumn_walk_east",
                    "south": "spr_npc_adeline_autumn_walk_south"
                },
                "windup": {
                    "north": "spr_npc_adeline_autumn_sit_north",
                    "east": "spr_npc_adeline_autumn_sit_east",
                    "south": "spr_npc_adeline_autumn_sit_south"
                },
                "attack": {
                    "north": "spr_npc_adeline_autumn_action_north",
                    "east": "spr_npc_adeline_autumn_kiss_east",
                    "south": "spr_npc_adeline_autumn_kiss_east"
                },
                "tired": {
                    "north": "spr_npc_adeline_autumn_idle_north",
                    "east": "spr_npc_adeline_autumn_idle_east",
                    "south": "spr_npc_adeline_autumn_idle_south"
                },
                "hurt": {
                    "north": "spr_npc_adeline_specialanimation_autumn_think_loop_south",
                    "east": "spr_npc_adeline_specialanimation_autumn_think_loop_south",
                    "south": "spr_npc_adeline_specialanimation_autumn_think_loop_south"
                },
                "dying": {
                    "north": "spr_npc_adeline_specialanimation_autumn_faint_south",
                    "east": "spr_npc_adeline_specialanimation_autumn_faint_south",
                    "south": "spr_npc_adeline_specialanimation_autumn_faint_south"
                },
                "misc": {
                    "projectile": "spr_decor_alda_pot_replica_spring_blue_south",
                    "rock_particle": "spr_ui_item_caldosian_chocolate_cake"
                },
                "flying": {
                    "north": "spr_monster_ironclod_main_walk_north",
                    "east": "spr_monster_ironclod_main_walk_east",
                    "south": "spr_monster_ironclod_main_walk_south"
                }
            },
            "attack_sequence": 6,
            "attack_sequence_image_speed": 16,
            "bomber": true,
            "bomb_sprite": "spr_npc_eiland_spring_idle_east",
            "bomb_ammo": 10,
            "bomb_chance": 50,
            "bomb_projectile_speed": 2
        }
    },
    "mistrilclod": {}
}

var presetGifs = {
    "bomberclod": "https://i.imgur.com/hWde7H8.gif",
    "hellspirit": "https://i.imgur.com/PBQj4KD.gif",
    "ninja": "https://i.imgur.com/ifSwFZX.gif",
    "sapma": "https://i.imgur.com/M8XQpJa.gif",
    "suicideclod": "https://i.imgur.com/abluHU3.gif",
    "hayden": "https://i.imgur.com/VlS6iBd.gif",
    "celines_house": "https://i.imgur.com/g7jF7pA.gif",
    "noescape": "https://i.imgur.com/nR0rZhm.gif",
    "conchshell": "https://i.imgur.com/IAshcJv.gif",
    "clusterclod": "https://i.imgur.com/EY6s3EO.gif",
    "goldbomber": "https://i.imgur.com/bd6mwc5.gif",
    "cursed_cat": "https://i.imgur.com/fnGuLFC.gif",
    "ziggy": "https://i.imgur.com/7EcbPAU.gif",
    "killerclod": "https://i.imgur.com/mD94K06.gif",
    "knows_where_you_are": "https://i.imgur.com/fYi64Tm.gif",
    "happy_to_see_you": "https://i.imgur.com/pU4tc4Z.gif",
    "goofy_bat": "https://i.imgur.com/Oa2hV4v.gif",
    "tab": "https://i.imgur.com/PTt9jxJ.gif",
    "aggressive_lamp": "https://i.imgur.com/4d30mIE.gif",
    "a_moths_dream": "https://i.imgur.com/Kea3bVP.gif",
    "electric_chicken": "https://i.imgur.com/iS4Q6l5.gif"
}

export { monsterPresets, presetGifs }