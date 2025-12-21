var monsterPresets = {
    "bat": {},
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
    "stalagmite": {},
    "stalagmite_green": {},
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
    "enchantern": {},
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
    "bomberclod":"https://i.imgur.com/hWde7H8.gif",
    "hellspirit":"https://i.imgur.com/PBQj4KD.gif",
    "ninja":"https://i.imgur.com/ifSwFZX.gif",
    "sapma":"https://i.imgur.com/M8XQpJa.gif",
    "suicideclod":"https://i.imgur.com/abluHU3.gif",
    "hayden":"https://i.imgur.com/VlS6iBd.gif",
    "celines_house":"https://i.imgur.com/g7jF7pA.gif",
}

export { monsterPresets, presetGifs }