module.exports = ({
  name: "inventory",
  aliases: [`inv`, `inventory`],
  code: `$color[RANDOM]

$if[$getGlobalUserVar[lang]==en]
$title[🎒 $username[$mentioned[1;yes]]'s inventory:]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$description[**Item List:**]

$addField[:mega: • Announcement ($getVar[anc_title]);$getVar[anc_desc];yes]

$addField[:black_large_square: • Ultra;Fire spell: $getGlobalUserVar[spell_fire;$mentioned[1;yes]]
Ice spell: $getGlobalUserVar[spell_ice;$mentioned[1;yes]];yes]

$addField[:red_square: • Mythic;Mythic lootbox: $getGlobalUserVar[lb_mythic;$mentioned[1;yes]]
Enchantment book: $getGlobalUserVar[book_enchant;$mentioned[1;yes]];yes]

$addField[:yellow_square: • Legendary;Legendary lootbox: $getGlobalUserVar[lb_legendary;$mentioned[1;yes]]
Ruby: $getGlobalUserVar[ruby;$mentioned[1;yes]]
Diamond armor: $getGlobalUserVar[armor_diamond;$mentioned[1;yes]];yes]

$addField[:purple_square: • Epic;Epic lootbox: $getGlobalUserVar[lb_epic;$mentioned[1;yes]]
Iron armor: $getGlobalUserVar[armor_iron;$mentioned[1;yes]]
Golden armor: $getGlobalUserVar[armor_gold;$mentioned[1;yes]];yes]

$addField[:brown_square: • Super Rare;Super rare lootbox: $getGlobalUserVar[lb_superRare;$mentioned[1;yes]]
Diamonds: $getGlobalUserVar[gem;$mentioned[1;yes]];yes]

$addField[:blue_square: • Rare;Rare lootbox: $getGlobalUserVar[lb_rare;$mentioned[1;yes]]
Metal: $getGlobalUserVar[metal;$mentioned[1;yes]]
Books: $getGlobalUserVar[book;$mentioned[1;yes]];yes]

$addField[:green_square: • Uncommon;$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[vip;$mentioned[1;yes]]==1];true;VIP: true;1];false;VIP: false;1]
Iron: $getGlobalUserVar[iron;$mentioned[1;yes]]
Gold: $getGlobalUserVar[gold;$mentioned[1;yes]]
Scrap: $getGlobalUserVar[scrap;$mentioned[1;yes]]
Iron sword: $getGlobalUserVar[sword_iron;$mentioned[1;yes]]
Health potion: $getGlobalUserVar[potion_hp;$mentioned[1;yes]]
Uncommon lootbox: $getGlobalUserVar[lb_uncommon;$mentioned[1;yes]];yes]

$addField[:white_large_square: • Common;Dirt: $getGlobalUserVar[dirt;$mentioned[1;yes]]
Wood log: $getGlobalUserVar[wood_log;$mentioned[1;yes]]
Stone: $getGlobalUserVar[stone;$mentioned[1;yes]]
Fishing rod: $getGlobalUserVar[fishingRod;$mentioned[1;yes]]
Fishing card: $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[fcard;$mentioned[1;yes]]==1];true;yes;1];false;no;1]
Wooden sword: $getGlobalUserVar[sword_wood;$mentioned[1;yes]]
Hunter rifle: $getGlobalUserVar[hunterRifle;$mentioned[1;yes]]
Axe level: $getGlobalUserVar[axe;$mentioned[1;yes]]
Pickaxe level: $getGlobalUserVar[pickaxe;$mentioned[1;yes]
Common lootbox: $getGlobalUserVar[lb_common;$mentioned[1;yes]]];yes]

$footer[Season: $getVar[season] | Page: 1/$getVar[inventory_pt] | PC Parts&Furniture soon! | Version: $getVar[version]]
$endif
 `
})