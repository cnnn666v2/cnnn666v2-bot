module.exports = ({
  name: "fish",
  code: `$color[RANDOM]
$title[:fishing_pole_and_fish: | Fishing]
$description[You fished and got \`$randomText[*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;**Gold** fish;**Gold** fish;***Diamond*** fish]\`]
$footer[Seasons ($getVar[season]): $getServerVar[svpx6]seasons | Version: $getVar[version]]

$replaceText[$randomText[*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;**Gold** fish;**Gold** fish;***Diamond*** fish];*Common* fish;fish_common]
$replaceText[$randomText[*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;**Gold** fish;**Gold** fish;***Diamond*** fish];**Gold** fish;fish_gold]
$replaceText[$randomText[*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;*Common* fish;**Gold** fish;**Gold** fish;***Diamond*** fish];***Diamond*** fish;fish_diamond]

$globalCooldown[5s;:x: You need to wait %time% to fish again!]
$onlyIf[$getGlobalUserVar[fishingRod]==1;:x: You need fishing rod to fish!]
$onlyIf[$getGlobalUserVar[fcard]==1;:x: You need fishing card to fish!]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]

$onlyForIDs[596296441505513483;:x: Due to amount of bugs, command is disabled for a while!] `
})