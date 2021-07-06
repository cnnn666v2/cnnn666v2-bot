module.exports = ({
  name: "craft-w-wall",
  code: `$color[RANDOM]
$title[Crafting completed!]
$description[$username crafted wooden wall!]
$footer[$randomText[Crafting cool;Minecraft: 6 wooden blocks = 3 wooden doors, take it or leave it] | Version: $getVar[version]]
$setGlobalUserVar[wood_wall;$sum[$getGlobalUserVar[wood_wall];1]]

$setGlobalUserVar[wood_log;$sub[$getGlobalUserVar[wood_log];5]]
$onlyIf[$getGlobalUserVar[wood_log]>=5;:x: You don't have enough wood logs!] 

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})