module.exports = ({
  name: "fish",
  code: `$color[RANDOM]
$title[Fishing]
$description[You fished and got $randomText[*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;**Gold** fish;**Gold** fish;***Diamond*** fish]]
$footer[Seasons ($getVar[season]): $getServerVar[svpx6]seasons | Version: $getVar[version]]
$globalCooldown[5m;:x: You need to wait %time% to fish again!]
$onlyIf[$getGlobalUserVar[fishingRod]==1;:x: You need fishing rod to fish!]
$onlyIf[$getGlobalUserVar[fcard]==1;:x: You need fishing card to fish!]
$onlyIf[$message[1]==;]
$onlyForIDs[596296441505513483;:x: Due to amount of bugs, command is disabled for a while!] `
})