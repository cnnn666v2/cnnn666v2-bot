module.exports = ({
  name: "hunt",
  code: `
$title[Hunting]
$color[RANDOM]
$footer[Stats -> $getServerVar[svpx6]profile | Version: $getVar[version]]
$if[$random[1;2]==1]
$description[$username hunted $randomText[animal;zombie;bad guy;bug in cyberpunk] and got $random[1;50] XP
Scrap founded: $random[0;10]]
$else
$description[$username hunted $randomText[animal;zombie;bad guy;bug in cyberpunk] and got $random[1;50] XP
Scrap founded: $random[0;10]
Your rifle stopped working and you have to buy new one. Do it using \`$getServerVar[svpx6]buy-item-hrifle\`]
$setGlobalUserVar[hunterRifle;0]
$endif

$setGlobalUserVar[scrap;$sum[$getGlobalUserVar[scrap];$random[0;10]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$random[1;50]]]

$globalCooldown[5m;:x: You can hunt every 5m. Wait %time% to hunt again!]
$onlyIf[$getGlobalUserVar[hunterRifle]==1;:x: You need hunting rifle to hunt something!]
$onlyIf[$message[1]==;]
$onlyForIDs[596296441505513483;:x: Due to amount of bugs, command is disabled for a while!] `
}) 