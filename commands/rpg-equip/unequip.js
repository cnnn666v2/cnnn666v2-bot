module.exports = ({
name: "unequip",
code: `$color[RANDOM]
$title[Unequip weapon]
$description[Successfully unequipped $getGlobalUserVar[equip_name]!]
$footer[$getVar[motd] | Version: $getVar[version]]

$setGlobalUserVar[atk;1]
$setGlobalUserVar[equip;0]
$onlyIf[$getGlobalUserVar[equip]==1;:x: You want to unequip your hands?] `
})