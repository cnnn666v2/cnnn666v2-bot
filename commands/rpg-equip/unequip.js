module.exports = ({
name: "unequip",
code: `$color[RANDOM]
$title[Unequip weapon]
$description[Successfully unequipped $getGlobalUserVar[equip_name]!]
$footer[$getVar[motd] | Version: $getVar[version]]

$setGlobalUserVar[atk;1]
$setGlobalUserVar[equip;0]
$onlyIf[$getGlobalUserVar[equip]==1;:x: You want to unequip your hands?] 

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})