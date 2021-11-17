module.exports = ({
  name: "inventory-com",
  aliases: [`inv-com`, `inv-cm`, `inventory-cm`, `inv-common`, `inventory-common`],
  code: `$color[RANDOM]

$title[🎒 $username[$mentioned[1;yes]]'s inventory:]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$description[:scroll: Little bio:
$getGlobalUserVar[welcome_bio]

**:white_large_square: Item List [COMMON]:**]
$addField[:comet: • Seasonal;None;yes]

$addField[:apple: • Food;Apple: $getGlobalUserVar[apple;$mentioned[1;yes]]
Bread: $getGlobalUserVar[bread;$mentioned[1;yes]];yes]

$addField[:page_facing_up: • Items;Fishing card: $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[fcard;$mentioned[1;yes]]==1];true;yes;1];false;no;1]
Common lootbox: $getGlobalUserVar[lb_common;$mentioned[1;yes]];yes]

$addField[:tools: • Tools;Hunter rifle: $getGlobalUserVar[hunterRifle;$mentioned[1;yes]]
Axe level: $getGlobalUserVar[axe;$mentioned[1;yes]]
Pickaxe level: $getGlobalUserVar[pickaxe;$mentioned[1;yes]]
Fishing rod: $getGlobalUserVar[fishingRod;$mentioned[1;yes]];yes]

$addField[:crossed_swords: • Weapons;Belt: $getGlobalUserVar[belt;$mentioned[1;yes]]
Wooden sword: $getGlobalUserVar[sword_wood;$mentioned[1;yes]]
Wooden shield: $getGlobalUserVar[shield_wood;$mentioned[1;yes]]
Crossbow: $getGlobalUserVar[crossbow_wood;$mentioned[1;yes]]
Arrows: $getGlobalUserVar[arrow;$mentioned[1;yes]];yes]

$addField[:mountain: • Resources;Dirt: $getGlobalUserVar[dirt;$mentioned[1;yes]]
Wood log: $getGlobalUserVar[wood_log;$mentioned[1;yes]]
Stone: $getGlobalUserVar[stone;$mentioned[1;yes]]
Stick: $getGlobalUserVar[sticks;$mentioned[1;yes]];yes]

$footer[Season: $getVar[season] | Page: 1/$getVar[inventory_pt] | Version: $getVar[version]]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})

//$addField[:mega: • Sneakpeak:;New inventory soon!;yes]

//$addField[:black_large_square: • Ultra;Fire spell: $getGlobalUserVar[spell_fire;$mentioned[1;yes]]
//Ice spell: $getGlobalUserVar[spell_ice;$mentioned[1;yes]];yes]

//$addField[:red_square: • Mythic;Mythic lootbox: $getGlobalUserVar[lb_mythic;$mentioned[1;yes]]
//Enchantment book: $getGlobalUserVar[book_enchant;$mentioned[1;yes]];yes]

//$addField[:yellow_square: • Legendary;Legendary lootbox: $getGlobalUserVar[lb_legendary;$mentioned[1;yes]]
//Ruby: $getGlobalUserVar[ruby;$mentioned[1;yes]]
//Diamond armor: $getGlobalUserVar[armor_diamond;$mentioned[1;yes]];yes]

//$addField[:purple_square: • Epic;Epic lootbox: $getGlobalUserVar[lb_epic;$mentioned[1;yes]]
//Iron armor: $getGlobalUserVar[armor_iron;$mentioned[1;yes]]
//Golden armor: $getGlobalUserVar[armor_gold;$mentioned[1;yes]];yes]

//$addField[:brown_square: • Super Rare;Super rare lootbox: $getGlobalUserVar[lb_superRare;$mentioned[1;yes]]
//Diamonds: $getGlobalUserVar[gem;$mentioned[1;yes]];yes]

//$addField[:blue_square: • Rare;Rare lootbox: $getGlobalUserVar[lb_rare;$mentioned[1;yes]]
//Metal: $getGlobalUserVar[metal;$mentioned[1;yes]]
//Books: $getGlobalUserVar[book;$mentioned[1;yes]];yes]

//$addField[:green_square: • Uncommon;$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[vip;$mentioned[1;yes]]==1];true;VIP: true;1];false;VIP: false;1]
//Iron: $getGlobalUserVar[iron;$mentioned[1;yes]]
//Gold: $getGlobalUserVar[gold;$mentioned[1;yes]]
//Scrap: $getGlobalUserVar[scrap;$mentioned[1;yes]]
//Iron sword: $getGlobalUserVar[sword_iron;$mentioned[1;yes]]
//Health potion: $getGlobalUserVar[potion_hp;$mentioned[1;yes]]
//Uncommon lootbox: $getGlobalUserVar[lb_uncommon;$mentioned[1;yes]];yes]