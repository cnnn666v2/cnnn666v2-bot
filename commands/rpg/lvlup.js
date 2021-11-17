module.exports = ({
  name: "lvlup",
  code: `$color[RANDOM]
$title[:boom: Level UP - RPG :boom:]
$description[$username levelled up to **$getGlobalUserVar[RLevel]**
Now you need: $getGlobalUserVar[ReqXP] XP to level up again!
You earned: $randomText[Common Lootbox;Log]]
$if[$randomText[Common Lootbox;Log]==Common Lootbox]
	$setGlobalUserVar[lb_common;$math[$getGlobalUserVar[lb_common]+1]]

	$else
		$setGlobalUserVar[wood_log;$math[$getGlobalUserVar[wood_log]+10]]
$endif

$setGlobalUserVar[RLevel;$sum[$getGlobalUserVar[RLevel];1]]
$setGlobalUserVar[XP;0]
$setGlobalUserVar[ReqXP;$sum[$getGlobalUserVar[ReqXP];$getGlobalUserVar[ReqXP]]]
$onlyIf[$getGlobalUserVar[XP]>=$getGlobalUserVar[ReqXP];:x: You don't have enough XP! You need $sub[$getGlobalUserVar[ReqXP];$getGlobalUserVar[XP]] more!]
$footer[$randomText[Profile -> $getServerVar[svpx6]profile;Inventory -> $getServerVar[svpx6]inventory] | Version: $getVar[version]]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake] `
})