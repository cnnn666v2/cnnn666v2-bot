module.exports = ({
  name: "hunt",
  code: `$color[RANDOM]
$footer[Full Stats -> $getServerVar[svpx6]profile | Version: $getVar[version]]
$random[0;1]
$if[$random[0;1]==1]
$title[Hunting - Success!]
$description[**$username** Successfully hunted $randomText[some animal;zombie;bigfoot] and got:
+ $random[20;2500] :pound:
+ $random[0;3] Scrap
+ $random[1;20] XP
but lost:
- $random[2;10] :heart:]

$setGlobalUserVar[health;$math[$getGlobalUserVar[health]+$getGlobalUserVar[def]/2-$random[2;10]]
$setGlobalUserVar[XP;$math[$getGlobalUserVar[XP]+$random[1;20]]]
$setGlobalUserVar[scrap;$math[$getGlobalUserVar[scrap]+$random[0;3]]]
$setGlobalUserVar[Money;$math[$getGlobalUserVar[Money]+$random[20;2500]]]

$elseif[$random[0;1]==0]
$title[Hunting - Failure!]
$description[**$username** Failed to hunt $randomText[some animal;zombie;bigfoot] and lost:
- $random[1;10] :heart:]

$setGlobalUserVar[health;$math[$getGlobalUserVar[health]-$random[1;10]]]
$endelseif
$endif

$globalCooldown[5s;:x: You can hunt every 5m. Wait %time% to hunt again!]
$onlyIf[$getGlobalUserVar[hunterRifle]==1;:x: You need hunting rifle to hunt something!]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]
$onlyForIDs[596296441505513483;:x: Due to amount of bugs, command is disabled for a while!] `
}) 