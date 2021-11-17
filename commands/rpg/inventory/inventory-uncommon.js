module.exports = ({
    name: "inv-uncm",
    aliases: [`inv-uncommon`, `inventory-uncm`, `inventory-uncommon`, `inv-ucm`, `inventory-ucm`],
    code: `$color[RANDOM]

$title[🎒 $username[$mentioned[1;yes]]'s inventory:]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$description[:scroll: Little bio:
$getGlobalUserVar[welcome_bio]

Dev reminder: complete code
**:green_square: Item List [UNCOMMON]:**]

$addField[:comet: • Seasonal;Bat: 0;yes]

$addField[:apple: • Food;None;yes]

$addField[:page_facing_up: • Items;Uncommon Lootbox: $getGlobalUserVar[lb_uncommon;$mentioned[1;yes]];yes]

$addField[:tools: • Potions;Emoji will be replaced soon
Health potion: $getGlobalUserVar[potion_hp;$mentioned[1;yes]];yes]

$addField[:crossed_swords: • Weapons;Stone Bow: 0
Stone Crossbow: 0
Throwable Knife: 0
Stone Dagger: 0
Iron Sword: $getGlobalUserVar[sword_iron;$mentioned[1;yes]]
Knife: 0
Stone Lance: 0;yes]

$addField[:mountain: • Resources;Iron: $getGlobalUserVar[iron;$mentioned[1;yes]]
Gold: $getGlobalUserVar[gold;$mentioned[1;yes]]
Scrap: $getGlobalUserVar[scrap;$mentioned[1;yes]];yes]

$footer[Season: $getVar[season] | Page: 1/$getVar[inventory_pt] | Version: $getVar[version]]`
})