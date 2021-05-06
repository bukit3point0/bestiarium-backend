const creatureTypes = [
    {
        "creature_id": 1,
        "name":"Wretched Aqrabuamelu",
        "detail": [
            "Large monsterous humanoid (sands beast), neutral evil, CR",
            "4"
        ],
        "armorType": {
            "number": 16,
            "stat": ["+2", "dex"],
            "natural": ["+5", "natural"],
            "size": ["-1", "size"]
        },
        "hitPoints": {
            "top": 37,
            "bottom": 65,
            "die": "5d12",
            "diePlus": "5"
        },
        "speed": "40 ft.",
        "secondary": [
            {
                "name": "Fort",
                "qualifier": "+2"
            },
            {
                "name": "Ref",
                "qualifier": "+6"
            },
            {
                "name": "Will",
                "qualifier": "+4"
            }
        ],
        "primaryStats": {
            "str": [18, "+4"],
            "dex": [14, "+2"],
            "con": [12, "+1"],
            "int": [4, "-3"],
            "wis": [10, "+0"],
            "cha": [16, "+3"]
        },
        "attacks": ["2 Claws +8 (1d6+4, Blighted)", "Sting +6", "(1d4+2 plus poison DC 15, 10 ft. reach)"],
        "bonuses": {
            "bab": "+5",
            "cmd": 22,
            "cmb": "+10"
        },
        "feats": ["Multiattack", "Improved Initiative", "Combat Reflexes"],
        "vulnerability": "Thresholds",
        "skills": ["Perception +8"],
        "specialQualities": "Undersized Weapons",
        "languages": "Tuvok",
        "specialAttacks": [
            {
                "name": "Sting.",
                "description": "Aqrabuamelu venom simply dissolves flesh. Creatures failing the save suffer 2d6 damage and 2 points of strength damage."},
            {
                "name": "Terrifying Gaze,",
                "description": "Gaze attack, fear effect. Will save DC 12 or become shaken while in aqrabuamelu’s presence."
            },
            {
                "name": "Vulnerability to Thresholds",
                "description": "Aqrabuamelu cannot move passed a well-established threshold which is being actively guarded without first defeating those who defend it. Those with the authority to guard the boundary may clearly announce this, forcing the aqrabuamelu to roll twice for any d20 roll and take the lesser of the two results for the duration of the encounter."}
        ]
    },
    {
        "creature_id": 1,
        "name":"Noble Aqrabuamelu",
        "detail": [
            "Large monsterous humanoid (sands beast), neutral evil, CR",
            "8"
        ],
        "armorType": {
            "number": 23,
            "stat": ["+4", "dex"],
            "natural": ["+8", "natural"],
            "size": ["-1", "size"]
        },
        "hitPoints": {
            "top": 85,
            "bottom": 140,
            "die": "10d12",
            "diePlus": "20"
        },
        "speed": "40 ft.",
        "secondary": {
            "fortitude": ["Fort", "+5"],
            "ref": ["Ref","+9"],
            "willpower": ["Will", "+7"]
        },
        "primaryStats": {
            "str": [22, "+6"],
            "dex": [17, "+3"],
            "con": [14, "+2"],
            "int": [12, "+1"],
            "wis": [10, "+0"],
            "cha": [18, "+4"]
        },
        "attacks": ["2 Claws +15 (1d6+6, Blighted)", "Sting +13", "(1d4+3 plus poison DC 17, 10 ft. reach), or Longbow +11/+11/+6 (1d8+6 plus poison DC 17)"],
        "bonuses": {
            "bab": "+10/+5",
            "cmd": 30,
            "cmb": "+17"
        },
        "feats": ["Multiattack", "Combat Reflexes", "Point-Blank Shot", "Rapid Shot", "Power Attack"],
        "vulnerability": "Thresholds",
        "skills": ["Perception +13", "Intimidate +17", "Survival +13", "Climb +19", "Craft (Man-Bone Weapons) +14"],
        "specialQualities": "Undersized Weapons",
        "typicalEquipment": ["chain shirt and barding", "composite longbow", "traveler's severed feet"],
        "senses": ["Perception +13", "Mythic Sight"],
        "languages": "Tuvok",
        "specialAttacks": [
            {
                "name": "Sting.",
                "description": "See wretched aqrabuamelu. Additoinally a noble aqrabuamelu may as a swift action drip poison in to its quiver, causing all ranged attacks this round to carry the same venom as the stinger."
            },
            {
                "name": "Death Gaze.",
                "description": "Gaze attack, fear and death effect. Will save DC 19 or become shaken and gain 1 negative level while in the aqrabuamelu’s presence."
            },
            {
                "name": "Mythic Sight.", 
                "description": "Creatures with Mythic Sight are blessed by the Gods to see and know the deeds men have done. Upon viewing anyone who has not disguised themselves they know the person’s name and a general summary of their notable deeds and titles. Against anyone who has disguised themselves they only know that they are traveling under false pretenses, but no more."
            },
            {
                "name": "Vulnerability to Thresholds",
                "description": "See wretched aqrabuamelu."
            }
        ]
    }
]

exports.creatureTypes = creatureTypes

exports.seed = function (knex) {
    return knex('creatureTypes').insert(creatureTypes)
}