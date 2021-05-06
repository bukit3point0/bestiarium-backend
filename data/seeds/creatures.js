const creatures = [
    {
        "id" : 1,
        "name" : "Aqrabuamelu, the Scorpion-Man",
        "backstory": "Before the rising of the sun, the god Tuvok, King of the Underworld, assigned his children to guard the entrance to his realm. His twins warned trespassers of the dangers of entering the Lands below the Land and guarded the resting place of the sun at night. Following the spread of the corrupting Sands all that is left of their descendants are a terrifying and merciless foe that the people of Alchera speak about only in whispers; the aqrabumaelu.",
        "description": "Standing nearly three meters tall, great carapace body balanced on six firm, spindly legs, it looms through the desert like a skittering nightmare. A corrupted fusion of humanity and beast, defying the impressive heat of the desert and stalking prey in the noonday sun, this beast lurks among the sand dunes, waiting for unsuspecting victims overwhelmed by the dry, pressing heat. Shoulders merge into claws of great and terrible strength, glistening with poison so potent it can eat through solid bone. Looming overhead, rising nearly half again as high, is the tail, stinger constantly dripping its caustic poison. Of its outward appearance, much can be said. The hair bleached by the sun until it gleams bone white. The mouth full of razor sharp teeth. The eyes thoroughly black. The part of it reflective of humanity bare of clothing. The seamless fusion with the carapace a marvel of evolution in the most twisted fashion. But the true horror lies in the writhing, slithering shapes extending from beast to man, twisting around and around, ceaselessly moving, straining to overtake the last remnants of recognizable humanity in a writhing mass of black and blood red. Scant few survivors recall, with horror, the hypnotic, mesmerizing, terrifying truth. The damned and corrupted beasts, marked forever by the Sands and Sun, hunt not with poison, but with fear. Take heed. Stare not at these beasts directly, for their very presence can overwhelm the senses.",
        "detail": [
            "The wretched aqrabuamelu have been driven mad by their corruption and have little more than a singular desire to feast upon wayward travelers. They typically attack in small groups of 4 and rush towards caravans attempting the cross the Sands. If more than half of their number are slain a typical wretched aqrabuamelu will retreat and strike again another day, hoping for easier prey. Noble aqrabuamelu are the direct descendants of the Twins and have much greater cunning, but no less cruelty. They fight with longbows made from the bones and sinew of those they have slain and lay deadly ambushes. They are well aware of their betraying their role as guardians and will avoid old roads and ruins which might provide legitimate travelers sanctuary against them.",
            "Fallen Alchera consecrated the entire length of their roads, as well as wayshrines and temples. While anyone in good standing with the gods could claim to be a legitimate defender of a wayshrine, only slave-caste or long term residents of an area could claim the right to defend the roadways of Fallen Alchera."
        ],
        "subtype": {
            "title": "The Corrupting Sands",
            "description": "The sands of Alchera are an ever-present threat which corrupts all that they touch. The sands themselves are a bleached-bone white with occasionally runs of a deep red. Each and every grain is able to get inside even the tightest corked vial or most expertly woven desert gear; nothing in Alchera is safe from them. The feel of them against the skin is wholly unpleasant, and there is an unforgettable odor combining the worst parts of sweat, ash, and sulfur. When the wind is right the fine particles can blow to anywhere on the island to reminds the inhabitants of Alchera that the time of green plants and easy living is limited. As unpleasant as the sands are the true threat lies within the vast expanses of desert, exposure to which causes illness, corruption, and death. While complete safety from the sands is wholly impossible travelers across these lethal stretches will need to take every possible effort and precaution they can to stave off their ill effects.",
            "subtitle": "Exposure to the Sands",
            "subdescription": [
                "Every day of exposure to the Sands causes a point of drain to every ability score which cannot be healed until leaving the area affected by the Sands. A single dawn of electrum or serving of manna is enough to stave off these effects for one day. Traveling in to the deep Sands, areas which are blighted passed any hope, require an additional dawn or serving each day equal to the total number of days spent within the Sands so far.",
                "Any creature which sufferes from 5 continuous days worth of exposure will forever require an additional dawn of electrum every day over the normal amount. Creatures which have any ability score reduced to 0 as a result of this typically gain the sandtouched template or are transformed into a sands beast of some form."
            ],
            "subtypeTitle": "Sands Beast Subtype",
            "subtypeDescription": "These are creatures which are either native to the Sands, or have been corrupted by them. Few enjoy venturing beyond the Sands although hatred often compels them to lash out, especially in the wake of a sandstorm.",
            "specialties": [
                {
                    "name": "Native to the Sands",
                    "description": "Unaffected by extreme heat or cold, ignore difficult terrain due to deep sand."},
                {
                    "name": "Empowered by Corruption",
                    "description": "Sands beasts have maximum hit points per hit die while within the Sands, outside of this their hit points are treated as normal."
                },
                {
                    "name": "Weakness to Manna",
                    "description": "Weapons coated in manna deal double damage to sands beasts, and negate their Empowered by Corruption ability which reduces their maximum hit points. Critical hits by such weapons instead reduce them to minimum hit points per hit die. A typical coating of manna lasts an hour and is good for 1d4 hits"
                },
                {
                    "name": "Blighted Attacks",
                    "description": "Some sands beasts have blighted attacks. Any damage die on a blighted attack which rolls its maximum value causes the target to loose a dawn of electrum or dose of manna. Lacking this protection the target suffers a point of constitution damage, which will convert to a full day’s worth of exposure to the Sands if the target does not find protection by the end of the day."
                }
            ]
        },
        "historical": {
            "title": "Ancient Guardians",
            "description": "Numerous Alcheran temples and mines have aqrabuamelu iconography worked in to their face in order to call upon the wisdom of these guardians. These creatures were believed to warn miners against delving too deeply, and to have the power to forsee the dangers which a traveler may face. Although most Alcherans have forgotten these ancient powers due to the scorpion men’s corruption, the few who do recall this can call upon rituals at dawn and dusk for their aid.",
            "specialCreature": {
                "name": "The Twins",
                "description": ["The Shrinelands are home to Tuvok’s two children, Gir-Tab, and Sap-Lis. One a man and the other woman, one corrupted and the other still serving as noble guardian. The fall of Gir-Tab to the Black Herald was the event which lead to the corruption of their children. Defeating Gir-Tab may provide a means of redeeming the race of the scorpion-men, or characters may call upon Sap-Lis’ wisdom before embarking on an especially deep and dangerous journey in to the sands.", "Each of them is a noble aqrabuamelu advanced to have 16 HD and have a gaze attack which causes 5 negative levels instead of 1."]
            }
        },
        "table": {
            "description": "In addition to the normal uses of Knowledge (Dungeoneering) to identify sands beasts, characters with Knowledge (History) may know useful tales of the scorpion-men. Characters literate in High Alcheran have a +2 to this check, those literate in Ancient Alcheran may roll twice and take the better result.",
            "table": {
                "titles": ["Knowledge (History)", "Information"],
                "rows": [
                    {
                        "row1": "Has Skill",
                        "row2": "Can recite tales of aqrabuamelu warning travelers away from dangerous lands and their original purpose."
                    },
                    {
                        "row1": "DC 10",
                        "row2": "There is a ritual called Gates of Sunrise and Sunset which allows one to call upon them for aid."
                    },
                    {
                        "row1": "DC 15",
                        "row2": "Aqrabuamelu cannot pass a guarded threshold and fear to face bold guardians. Reveals vulnerabilities."
                    },
                    {
                        "row1": "DC 20",
                        "row2": "Their venom is especially deadly but can be countered by the desert rose. A meal of these eaten at dawn provides a +10 alchemical bonus against their poison for 24 hrs."
                    }
                ]
            }
        },
        "additionalInfo": {
            "name": "Of Stones and Scorpions",
            "quote": "Let us speak of the Twins, whom the Lord of the Lands below the Land has seen fit to give us as an aegis against our hubris...",
            "text": ["The text Of Stones and Scorpions is an ancient work in High Alcheran typically kept on a single elaborately-decorated scroll. Unrolled the text is about eight feet long. In addition to being a detailed, if rather dry, treatise on mining the text has detailed instructions for the Gates of Sunrise and Sunset which a character may learn by reading this. Having the scroll also provides a +2 bonus to checks made for the ritual."]
        },
        "scrollText": "Many rituals formed an important part of daily life in Fallen Alchera and allowed them to ask for the aid of the Gods and lesser spirits. Characters can gain knowledge of these rituals by exploration, such as finding a copy of the scroll Of Stones and Scorpions. Once learned any character may perform the ritual, although those literate in the High and Ancient Alcheran will often find it much easier. Most rituals may only be performed in a location with an appropriate aura, where the magic is attuned to the particular spirit being called upon. Each ritual describes this in more detail.",
        "ritual": {
            "name": "Gates of Sunrise and Sunset",
            "description": "The leader of the ritual intones a lengthy poem concerning the journey of King Treos to the Underworld, and promises to learn from his mistakes. Following the conclusion of the tale the body of a scorpion is placed outside his encampment just as the sun sets, and is then picked up at sunrise the next day. Distant whispers of long gone aqrabuamelu briefly fill the area, providing warning to travelers.",
            "data": [
                {
                    "name": "Required Aura",
                    "description": "Ancient Alcheran site depicting scorpion men, or wayshrine at the edge of the Sands."
                },
                {
                    "name": "Resonant Materials",
                    "description": "A mundane scorpion is at least required for the ritual. The body of an aqrabuamelu provides a +5 bonus to the skill check."
                },
                {
                    "name": "Effect",
                    "description": "Once during the next month the leader of the ritual may roll either Knowledge (History) or Perform (Oratory) as the scorpion-men’s warnings aid them. The result of this check may be used as the initiative total for the leader and those who were present during the ritual instead of their normal roll. This may be used even after the results of the original initiative roll have already been revealed."
                }
            ]
        }
    }
]

exports.creatures = creatures

exports.seed = function (knex) {
    return knex('creatures').insert(creatures)
}