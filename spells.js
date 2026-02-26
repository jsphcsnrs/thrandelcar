const spells = {
  // ─── Cantrips ───────────────────────────────────────────────────────────────

  "fire-bolt": {
    name: "Fire Bolt",
    level: "Cantrip",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack. On a hit, the target takes 2d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
  },

  "mage-hand": {
    name: "Mage Hand",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 minute",
    description:
      "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.\n\nYou can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.\n\nThe hand can't attack, activate magic items, or carry more than 10 pounds.",
  },

  prestidigitation: {
    name: "Prestidigitation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "10 feet",
    components: "V, S",
    duration: "Up to 1 hour",
    description:
      "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:\n\nYou create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.\nYou instantaneously light or snuff out a candle, a torch, or a small campfire.\nYou instantaneously clean or soil an object no larger than 1 cubic foot.\nYou chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.\nYou make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.\nYou create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.\n\nIf you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
  },

  message: {
    name: "Message",
    level: "Cantrip",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S, M (a short piece of copper wire)",
    duration: "1 round",
    description:
      "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.\n\nYou can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.",
  },

  "sacred-flame": {
    name: "Sacred Flame",
    level: "Cantrip",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.\n\nThe spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
  },

  "spare-the-dying": {
    name: "Spare the Dying",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
  },

  guidance: {
    name: "Guidance",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description:
      "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
  },

  "minor-illusion": {
    name: "Minor Illusion",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30 feet",
    components: "S, M (bit of fleece)",
    duration: "1 minute",
    description:
      "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.\n\nIf you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.\n\nIf you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.\n\nIf a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
  },

  // ─── 1st Level ──────────────────────────────────────────────────────────────

  "detect-magic": {
    name: "Detect Magic",
    level: "1st-level",
    castingTime: "1 action (Ritual)",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    ritual: true,
    description:
      "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.\n\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
  },

  identify: {
    name: "Identify",
    level: "1st-level",
    castingTime: "1 minute (Ritual)",
    range: "Touch",
    components: "V, S, M (pearl worth 100gp)",
    duration: "Instantaneous",
    ritual: true,
    description:
      "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.\n\nIf you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
  },

  "comprehend-languages": {
    name: "Comprehend Languages",
    level: "1st-level",
    castingTime: "1 action (Ritual)",
    range: "Self",
    components: "V, S, M (soot and salt)",
    duration: "1 hour",
    ritual: true,
    description:
      "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.\n\nThis spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.",
  },

  "mage-armor": {
    name: "Mage Armor",
    level: "1st-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (piece of cured leather)",
    duration: "8 hours",
    description:
      "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
  },

  shield: {
    name: "Shield",
    level: "1st-level",
    castingTime: "1 reaction",
    range: "Self",
    components: "V, S",
    duration: "1 round",
    description:
      "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
  },

  "find-familiar": {
    name: "Find Familiar",
    level: "1st-level",
    castingTime: "1 hour (Ritual)",
    range: "10 feet",
    components: "V, S, M (10gp worth of charcoal, incense, and herbs)",
    duration: "Instantaneous",
    ritual: true,
    description:
      "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.\n\nYour familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.\n\nWhen the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. As an action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.\n\nWhile your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.\n\nYou can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it.",
  },

  "cure-wounds": {
    name: "Cure Wounds",
    level: "1st-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n\nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
  },

  "healing-word": {
    name: "Healing Word",
    level: "1st-level",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    description:
      "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n\nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
  },

  bless: {
    name: "Bless",
    level: "1st-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (holy water)",
    duration: "Concentration, up to 1 minute",
    description:
      "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.\n\nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
  },

  "shield-of-faith": {
    name: "Shield of Faith",
    level: "1st-level",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V, S, M (parchment with holy text)",
    duration: "Concentration, up to 10 minutes",
    description:
      "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
  },

  sanctuary: {
    name: "Sanctuary",
    level: "1st-level",
    castingTime: "1 bonus action",
    range: "30 feet",
    components: "V, S, M (small silver mirror)",
    duration: "1 minute",
    description:
      "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects. If the warded creature makes an attack or casts a spell, this spell ends.",
  },

  sleep: {
    name: "Sleep",
    level: "1st-level",
    castingTime: "1 action",
    range: "90 feet",
    components: "V, S, M (sand, rose petals, or cricket)",
    duration: "1 minute",
    description:
      "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).\n\nStarting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.\n\nUndead and creatures immune to being charmed aren't affected by this spell.\n\nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
  },

  "disguise-self": {
    name: "Disguise Self",
    level: "1st-level",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "1 hour",
    description:
      "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.\n\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair.\n\nTo discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
  },

  grease: {
    name: "Grease",
    level: "1st-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (butter or pork rind)",
    duration: "1 minute",
    description:
      "Slick grease covers the ground in a 10-foot square centered on a point within range. For the duration, it is difficult terrain. When the grease appears, each creature in the area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also make the save.",
  },

  "charm-person": {
    name: "Charm Person",
    level: "1st-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 hour",
    description:
      "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.\n\nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
  },

  "hunters-mark": {
    name: "Hunter's Mark",
    level: "1st-level",
    castingTime: "1 bonus action",
    range: "90 feet",
    components: "V",
    duration: "Concentration, up to 1 hour",
    description:
      "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.\n\nAt Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.",
  },

  longstrider: {
    name: "Longstrider",
    level: "1st-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (pinch of dirt)",
    duration: "1 hour",
    description:
      "You touch a creature. The target's speed increases by 10 feet until the spell ends.\n\nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
  },

  "fog-cloud": {
    name: "Fog Cloud",
    level: "1st-level",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    description:
      "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.\n\nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
  },

  // ─── 2nd Level ──────────────────────────────────────────────────────────────

  "detect-thoughts": {
    name: "Detect Thoughts",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (copper piece)",
    duration: "Concentration, up to 1 minute",
    description:
      "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.\n\nYou initially learn the surface thoughts of the creature—what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind. If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.\n\nYou can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language.",
  },

  "locate-object": {
    name: "Locate Object",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (forked twig)",
    duration: "Concentration, up to 10 minutes",
    description:
      "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.\n\nThe spell can locate a specific object known to you, as long as you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.\n\nThis spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object.",
  },

  "misty-step": {
    name: "Misty Step",
    level: "2nd-level",
    castingTime: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Instantaneous",
    description:
      "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
  },

  suggestion: {
    name: "Suggestion",
    level: "2nd-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, M (snake's tongue, honeycomb)",
    duration: "Concentration, up to 8 hours",
    description:
      "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.\n\nThe target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.\n\nYou can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn't met before the spell expires, the activity isn't performed.\n\nIf you or any of your companions damage the target, the spell ends.",
  },

  "spiritual-weapon": {
    name: "Spiritual Weapon",
    level: "2nd-level",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V, S",
    duration: "1 minute",
    description:
      "You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.\n\nAs a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.\n\nThe weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon make this spell's effect resemble that weapon.\n\nAt Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above 2nd.",
  },

  "lesser-restoration": {
    name: "Lesser Restoration",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.",
  },

  aid: {
    name: "Aid",
    level: "2nd-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (tiny strip of white cloth)",
    duration: "8 hours",
    description:
      "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.\n\nAt Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
  },

  "hold-person": {
    name: "Hold Person",
    level: "2nd-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (small, straight piece of iron)",
    duration: "Concentration, up to 1 minute",
    description:
      "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.\n\nAt Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
  },

  "calm-emotions": {
    name: "Calm Emotions",
    level: "2nd-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description:
      "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.\n\nYou can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.\n\nAlternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.",
  },

  invisibility: {
    name: "Invisibility",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (eyelash in gum arabic)",
    duration: "Concentration, up to 1 hour",
    description:
      "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.\n\nAt Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
  },

  pyrotechnics: {
    name: "Pyrotechnics",
    level: "2nd-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.\n\nFireworks: The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.\n\nSmoke: Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.",
  },

  "pass-without-trace": {
    name: "Pass Without Trace",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (ashes from burned mistletoe)",
    duration: "Concentration, up to 1 hour",
    description:
      "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
  },

  silence: {
    name: "Silence",
    level: "2nd-level",
    castingTime: "1 action (Ritual)",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    ritual: true,
    description:
      "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.",
  },

  // ─── 3rd Level ──────────────────────────────────────────────────────────────

  counterspell: {
    name: "Counterspell",
    level: "3rd-level",
    castingTime: "1 reaction",
    range: "60 feet",
    components: "S",
    duration: "Instantaneous",
    description:
      "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.\n\nAt Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.",
  },

  fireball: {
    name: "Fireball",
    level: "3rd-level",
    castingTime: "1 action",
    range: "150 feet",
    components: "V, S, M (tiny ball of bat guano and sulfur)",
    duration: "Instantaneous",
    description:
      "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.\n\nThe fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.\n\nAt Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
  },

  "dispel-magic": {
    name: "Dispel Magic",
    level: "3rd-level",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.\n\nAt Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.",
  },

  clairvoyance: {
    name: "Clairvoyance",
    level: "3rd-level",
    castingTime: "10 minutes (Ritual)",
    range: "1 mile",
    components: "V, S, M (focus worth 100gp)",
    duration: "Concentration, up to 10 minutes",
    ritual: true,
    description:
      "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.\n\nWhen you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.\n\nA creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist.",
  },

  revivify: {
    name: "Revivify",
    level: "3rd-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (diamonds worth 300gp, consumed)",
    duration: "Instantaneous",
    description:
      "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore missing body parts.",
  },

  "beacon-of-hope": {
    name: "Beacon of Hope",
    level: "3rd-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description:
      "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.",
  },

  "spirit-guardians": {
    name: "Spirit Guardians",
    level: "3rd-level",
    castingTime: "1 action",
    range: "Self (15-foot radius)",
    components: "V, S, M (holy symbol)",
    duration: "Concentration, up to 10 minutes",
    description:
      "You call spirits to protect you. They flit around you to a distance of 15 feet. When a creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage. On a successful save, half damage. The area is difficult terrain for hostile creatures.\n\nAt Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
  },
}
