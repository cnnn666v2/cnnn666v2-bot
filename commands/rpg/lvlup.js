module.exports = ({
  name: "lvlup",
  code: `$color[RANDOM]
$title[:boom: Level UP - RPG :boom:]
$description[$username levelled up to **$getGlobalUserVar[RLevel]**
Now you need: $getGlobalUserVar[ReqXP] XP to level up again!

You earned: $randomText[Common Lootbox;Log]]

$setGlobalUserVar[RLevel;$sum[$getGlobalUserVar[RLevel];1]]
$setGlobalUserVar[XP;0]
$setGlobalUserVar[ReqXP;$sum[$getGlobalUserVar[ReqXP];$getGlobalUserVar[ReqXP]]]
$onlyIf[$getGlobalUserVar[XP]>=$getGlobalUserVar[ReqXP];:x: You don't have enough XP! You need $sub[$getGlobalUserVar[ReqXP];$getGlobalUserVar[XP]]]
$footer[$randomText[Profile -> $getServerVar[svpx6]profile;Inventory -> $getServerVar[svpx6]inventory] | Version: $getVar[version]]
$onlyIf[$message[1]==;] `
})