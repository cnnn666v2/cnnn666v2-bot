module.exports = ({
  name: "adventure",
  code: `$color[RANDOM]
$title[:dagger: | Adventure]
$description[You went on a dangerous adventure and got:
$numberSeparator[$random[1000;5000];,] :pound:
$random[25;70] XP
$random[0;1] Common lootbox]
$footer[o==\[\\]::::::A̶d̶v̶e̶n̶t̶u̶r̶e̶ ̶T̶i̶m̶e̶::::::::> | Version: $getVar[version]]

$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[1000;5000]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$random[25;75]]]
$setGlobalUserVar[lb_common;$sum[$getGlobalUserVar[lb_common];$random[0;1]]]

$globalCooldown[2h;:x: You're tired. Wait %time% and go on the adventure again!]
$onlyIf[$getGlobalUserVar[atk]>=2;:x: You think you will punch enough? Go equip better weapon than fists!]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})