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
      "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn't being worn or carried.\n\nThis spell's damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
  },

  "mage-hand": {
    name: "Mage Hand",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 minute",
    description:
      "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.\n\nWhen you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. Each time you use the hand, you can move it up to 30 feet.\n\nThe hand can't attack, activate magic items, or carry more than 10 pounds.",
  },

  prestidigitation: {
    name: "Prestidigitation",
    level: "Cantrip",
    castingTime: "1 action",
    range: "10 feet",
    components: "V, S",
    duration: "Up to 1 hour",
    description:
      "You create a magical effect within range. Choose the effect from the options below. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time.\n\n**Sensory Effect.** You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.\n\n**Fire Play.** You instantaneously light or snuff out a candle, a torch, or a small campfire.\n\n**Clean or Soil.** You instantaneously clean or soil an object no larger than 1 cubic foot.\n\n**Minor Sensation.** You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.\n\n**Magic Mark.** You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.\n\n**Minor Creation.** You create a nonmagical trinket or an illusory image that can fit in your hand. It lasts until the end of your next turn. A trinket can deal no damage and has no monetary worth.",
  },

  message: {
    name: "Message",
    level: "Cantrip",
    castingTime: "1 action",
    range: "120 feet",
    components: "S, M (a short piece of copper wire)",
    duration: "1 round",
    description:
      "You point toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.\n\nYou can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence; 1 foot of stone, metal, or wood; or a thin sheet of lead blocks the spell.",
  },

  "sacred-flame": {
    name: "Sacred Flame",
    level: "Cantrip",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 Radiant damage. The target gains no benefit from Half Cover or Three-Quarters Cover for this saving throw.\n\nThis spell's damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
  },

  "spare-the-dying": {
    name: "Spare the Dying",
    level: "Cantrip",
    castingTime: "1 action",
    range: "15 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "Choose a creature within range that has 0 Hit Points and isn't dead. The creature becomes stable.\n\nThis spell's range increases when you reach certain levels: 30 feet at level 5, 60 feet at level 11, and 120 feet at level 17.",
  },

  guidance: {
    name: "Guidance",
    level: "Cantrip",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description:
      "You touch a willing creature and choose a skill. Until the spell ends, the creature adds 1d4 to any ability check using the chosen skill.",
  },

  "minor-illusion": {
    name: "Minor Illusion",
    level: "Cantrip",
    castingTime: "1 action",
    range: "30 feet",
    components: "S, M (a bit of fleece)",
    duration: "1 minute",
    description:
      "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.\n\nIf you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.\n\nIf you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.\n\nIf a creature uses the Study action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
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
      "For the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell's school of magic.\n\nThe spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
  },

  identify: {
    name: "Identify",
    level: "1st-level",
    castingTime: "1 minute (Ritual)",
    range: "Touch",
    components: "V, S, M (a pearl worth 100+ GP)",
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
    components: "V, S, M (a pinch of soot and salt)",
    duration: "1 hour",
    ritual: true,
    description:
      "For the duration, you understand the literal meaning of any language that you hear or see signed. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.\n\nThis spell doesn't decode symbols or secret messages.",
  },

  "mage-armor": {
    name: "Mage Armor",
    level: "1st-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (a piece of cured leather)",
    duration: "8 hours",
    description:
      "You touch a willing creature who isn't wearing armor. Until the spell ends, the target's base AC becomes 13 plus its Dexterity modifier. The spell ends early if the target dons armor.",
  },

  shield: {
    name: "Shield",
    level: "1st-level",
    castingTime: "1 reaction, which you take when you are hit by an attack roll or targeted by Magic Missile",
    range: "Self",
    components: "V, S",
    duration: "1 round",
    description:
      "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile.",
  },

  "find-familiar": {
    name: "Find Familiar",
    level: "1st-level",
    castingTime: "1 hour (Ritual)",
    range: "10 feet",
    components: "V, S, M (burning incense worth 10+ GP, consumed by the spell)",
    duration: "Instantaneous",
    ritual: true,
    description:
      "You gain the service of a familiar, a spirit that takes an animal form you choose: Bat, Cat, Frog, Hawk, Lizard, Octopus, Owl, Rat, Raven, Spider, Weasel, or another Beast that has a Challenge Rating of 0. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a Celestial, Fey, or Fiend (your choice) instead of a Beast.\n\nYour familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.\n\nWhen the familiar drops to 0 Hit Points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. As a Bonus Action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As a Bonus Action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.\n\nWhile your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as a Bonus Action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.\n\nYou can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. When you cast a spell with a range of Touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its Reaction to deliver the spell when you cast it.",
  },

  "cure-wounds": {
    name: "Cure Wounds",
    level: "1st-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier.\n\n**Using a Higher-Level Spell Slot.** The healing increases by 2d8 for each spell slot level above 1.",
  },

  "healing-word": {
    name: "Healing Word",
    level: "1st-level",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    description:
      "A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier.\n\n**Using a Higher-Level Spell Slot.** The healing increases by 2d4 for each spell slot level above 1.",
  },

  bless: {
    name: "Bless",
    level: "1st-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (a Holy Symbol worth 5+ GP)",
    duration: "Concentration, up to 1 minute",
    description:
      "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.\n\n**Using a Higher-Level Spell Slot.** You can target one additional creature for each spell slot level above 1.",
  },

  "shield-of-faith": {
    name: "Shield of Faith",
    level: "1st-level",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V, S, M (a prayer scroll)",
    duration: "Concentration, up to 10 minutes",
    description:
      "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
  },

  sanctuary: {
    name: "Sanctuary",
    level: "1st-level",
    castingTime: "1 bonus action",
    range: "30 feet",
    components: "V, S, M (a shard of glass from a mirror)",
    duration: "1 minute",
    description:
      "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack roll or a damaging spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects.\n\nIf the warded creature makes an attack roll, casts a spell, or deals damage, this spell ends.",
  },

  sleep: {
    name: "Sleep",
    level: "1st-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a pinch of sand or rose petals)",
    duration: "Concentration, up to 1 minute",
    description:
      "Each creature of your choice in a 5-foot-radius Sphere centered on a point within range must succeed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save. If the target fails the second save, the target has the Unconscious condition for the duration. The spell ends on a target if it takes damage or someone within 5 feet of it takes an action to shake it out of the spell's effect.\n\nCreatures that don't sleep, such as elves, or that have Immunity to the Exhaustion condition automatically succeed on saves against this spell.",
  },

  "disguise-self": {
    name: "Disguise Self",
    level: "1st-level",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "1 hour",
    description:
      "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.\n\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair.\n\nTo discern that you are disguised, a creature can use the Study action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
  },

  grease: {
    name: "Grease",
    level: "1st-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a bit of pork rind or butter)",
    duration: "1 minute",
    description:
      "Nonflammable grease covers the ground in a 10-foot square centered on a point within range and turns it into Difficult Terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or have the Prone condition. A creature that enters the area or ends its turn there must also succeed on that save or fall Prone.",
  },

  "charm-person": {
    name: "Charm Person",
    level: "1st-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 hour",
    description:
      "One Humanoid you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you.\n\n**Using a Higher-Level Spell Slot.** You can target one additional creature for each spell slot level above 1.",
  },

  "hunters-mark": {
    name: "Hunter's Mark",
    level: "1st-level",
    castingTime: "1 bonus action",
    range: "90 feet",
    components: "V",
    duration: "Concentration, up to 1 hour",
    description:
      "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll, and you have advantage on any Wisdom (Perception or Survival) check you make to find it. If the target drops to 0 Hit Points before this spell ends, you can use a Bonus Action on a subsequent turn of yours to mark a new creature.\n\n**Using a Higher-Level Spell Slot.** Your Concentration can last longer with a spell slot of 3rd or 4th level (up to 8 hours) or 5th level or higher (up to 24 hours).",
  },

  longstrider: {
    name: "Longstrider",
    level: "1st-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (a pinch of dirt)",
    duration: "1 hour",
    description:
      "You touch a creature. The target's Speed increases by 10 feet until the spell ends.\n\n**Using a Higher-Level Spell Slot.** You can target one additional creature for each spell slot level above 1.",
  },

  "fog-cloud": {
    name: "Fog Cloud",
    level: "1st-level",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    description:
      "You create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere is Heavily Obscured. It lasts for the duration or until a strong wind (such as one created by Gust of Wind) disperses it.\n\n**Using a Higher-Level Spell Slot.** The fog's radius increases by 20 feet for each spell slot level above 1.",
  },

  // ─── 2nd Level ──────────────────────────────────────────────────────────────

  "detect-thoughts": {
    name: "Detect Thoughts",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (1 copper piece)",
    duration: "Concentration, up to 1 minute",
    description:
      "You activate one of the following effects. If you cast this spell and already have one of its effects active, the active effect ends.\n\n**Sense Thoughts.** You sense the presence of thoughts within 30 feet of yourself that belong to creatures that know languages or are telepathic. The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.\n\n**Read Thoughts.** You target one creature you can see within 30 feet of yourself or one creature whose thoughts you sense with Sense Thoughts. You learn what is most on the target's mind right now. On subsequent turns, you can use the Magic action to probe deeper into the target's mind. The target must make a Wisdom saving throw. On a failed save, you learn the creature's reasoning, its emotional state, and something that looms large in its mind. On a successful save, the spell ends. Either way, the target knows you are probing its mind, and it can use its action on its turn to make an Intelligence (Arcana) check against your spell save DC to end the spell.",
  },

  "locate-object": {
    name: "Locate Object",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (a forked twig)",
    duration: "Concentration, up to 10 minutes",
    description:
      "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.\n\nThe spell can locate a specific object known to you, as long as you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.\n\nThis spell can't locate an object if any thickness of lead blocks a direct path between you and the object.",
  },

  "misty-step": {
    name: "Misty Step",
    level: "2nd-level",
    castingTime: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Instantaneous",
    description:
      "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space you can see.",
  },

  suggestion: {
    name: "Suggestion",
    level: "2nd-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, M (a drop of honey)",
    duration: "Concentration, up to 8 hours",
    description:
      "You suggest a course of activity—described in no more than 25 words—to one creature you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to the target or its allies.\n\nThe target must make a Wisdom saving throw. On a failed save, the target has the Charmed condition for the duration or until you or your allies damage it. While Charmed, the target pursues the course of action you described to the best of its ability.",
  },

  "spiritual-weapon": {
    name: "Spiritual Weapon",
    level: "2nd-level",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description:
      "You manifest a spectral force that resembles a weapon of your choice and that lasts for the duration. When you cast the spell, you can make one melee spell attack against a creature within 5 feet of the force. On a hit, the target takes Force damage equal to 1d8 plus your spellcasting ability modifier.\n\nAs a Bonus Action on your later turns, you can move the force up to 20 feet and repeat the attack against a creature within 5 feet of it.\n\n**Using a Higher-Level Spell Slot.** The damage increases by 1d8 for each spell slot level above 2.",
  },

  "lesser-restoration": {
    name: "Lesser Restoration",
    level: "2nd-level",
    castingTime: "1 bonus action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "You touch a creature and end one condition on it: Blinded, Deafened, Paralyzed, or Poisoned.",
  },

  aid: {
    name: "Aid",
    level: "2nd-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (a strip of white cloth)",
    duration: "8 hours",
    description:
      "Choose up to three creatures within range. Each target's Hit Point maximum and current Hit Points increase by 5 for the duration.\n\n**Using a Higher-Level Spell Slot.** Each target's Hit Points increase by 5 for each spell slot level above 2.",
  },

  "hold-person": {
    name: "Hold Person",
    level: "2nd-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a straight piece of iron)",
    duration: "Concentration, up to 1 minute",
    description:
      "Choose a Humanoid that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.\n\n**Using a Higher-Level Spell Slot.** You can target one additional Humanoid for each spell slot level above 2.",
  },

  "calm-emotions": {
    name: "Calm Emotions",
    level: "2nd-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description:
      "You attempt to suppress strong emotions in a group of people. Each Humanoid in a 20-foot-radius Sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.\n\nYou can suppress any effect causing a target to be Charmed or Frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.\n\nAlternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.",
  },

  invisibility: {
    name: "Invisibility",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (an eyelash in gum arabic)",
    duration: "Concentration, up to 1 hour",
    description:
      "A creature you touch has the Invisible condition until the spell ends. The spell ends on a target early if it makes an attack roll, deals damage, or casts a spell.\n\n**Using a Higher-Level Spell Slot.** You can target one additional creature for each spell slot level above 2.",
  },

  pyrotechnics: {
    name: "Pyrotechnics",
    level: "2nd-level",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.\n\n**Fireworks.** The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.\n\n**Smoke.** Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.",
  },

  "pass-without-trace": {
    name: "Pass Without Trace",
    level: "2nd-level",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (ashes from burned mistletoe)",
    duration: "Concentration, up to 1 hour",
    description:
      "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of yourself (including you) has a +10 bonus to Dexterity (Stealth) checks and leaves no tracks or other traces of its passage.",
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
      "For the duration, no sound can be created within or pass through a 20-foot-radius Sphere centered on a point you choose within range. Any creature or object entirely inside the Sphere has Immunity to Thunder damage, and creatures have the Deafened condition while entirely inside it. Casting a spell that includes a Verbal component is impossible there.",
  },

  // ─── 3rd Level ──────────────────────────────────────────────────────────────

  counterspell: {
    name: "Counterspell",
    level: "3rd-level",
    castingTime: "1 reaction, which you take when you see a creature within 60 feet casting a spell with Verbal, Somatic, or Material components",
    range: "60 feet",
    components: "S",
    duration: "Instantaneous",
    description:
      "You attempt to interrupt a creature in the process of casting a spell. The creature makes a Constitution saving throw. On a failed save, the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn't expended.",
  },

  fireball: {
    name: "Fireball",
    level: "3rd-level",
    castingTime: "1 action",
    range: "150 feet",
    components: "V, S, M (a ball of bat guano and sulfur)",
    duration: "Instantaneous",
    description:
      "A bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion. Each creature in a 20-foot-radius Sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 Fire damage on a failed save, or half as much damage on a successful one.\n\nFlammable objects in the area that aren't being worn or carried start burning.\n\n**Using a Higher-Level Spell Slot.** The damage increases by 1d6 for each spell slot level above 3.",
  },

  "dispel-magic": {
    name: "Dispel Magic",
    level: "3rd-level",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:
      "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.\n\n**Using a Higher-Level Spell Slot.** You automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.",
  },

  clairvoyance: {
    name: "Clairvoyance",
    level: "3rd-level",
    castingTime: "10 minutes",
    range: "1 mile",
    components: "V, S, M (a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing)",
    duration: "Concentration, up to 10 minutes",
    description:
      "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.\n\nWhen you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As a Bonus Action, you can switch between seeing and hearing.\n\nA creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist.",
  },

  revivify: {
    name: "Revivify",
    level: "3rd-level",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (a diamond worth 300+ GP, consumed by the spell)",
    duration: "Instantaneous",
    description:
      "You touch a creature that has died within the last minute. That creature returns to life with 1 Hit Point. This spell can't return to life a creature that has died of old age, nor does it restore any missing body parts.",
  },

  "beacon-of-hope": {
    name: "Beacon of Hope",
    level: "3rd-level",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description:
      "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has Advantage on Wisdom saving throws and Death Saving Throws, and regains the maximum number of Hit Points possible from any healing.",
  },

  "spirit-guardians": {
    name: "Spirit Guardians",
    level: "3rd-level",
    castingTime: "1 action",
    range: "Self (15-foot radius)",
    components: "V, S, M (a Holy Symbol)",
    duration: "Concentration, up to 10 minutes",
    description:
      "Protective spirits flit around you in a 15-foot Emanation for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it.\n\nAny other creature's Speed is halved in the Emanation, and whenever the Emanation enters a creature's space and whenever a creature enters the Emanation or ends its turn there, the creature must make a Wisdom saving throw. On a failed save, the creature takes 3d8 Radiant damage (if you are good or neutral) or 3d8 Necrotic damage (if you are evil). On a successful save, the creature takes half as much damage. A creature makes this save only once per turn.\n\n**Using a Higher-Level Spell Slot.** The damage increases by 1d8 for each spell slot level above 3.",
  },
}
