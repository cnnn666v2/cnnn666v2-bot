module.exports = ({
  name: "mine",
  code: `$if[$getGlobalUserVar[pickaxe]==1]
$color[RANDOM]
$title[:pick: Mining resources]
$description[You mined in cave for some time and got:
$random[0;5] stone :rock:
$random[0;10] dirt <a:dirt:818198721820885063>
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;2;2;2;3] iron]

$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone];$random[0;5]]]
$setGlobalUserVar[dirt;$sum[$getGlobalUserVar[dirt];$random[1;10]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;2;2;2;3]]]

$elseif[$getGlobalUserVar[pickaxe]==2]
$description[You mined in cave for some time and got:
$random[10;25] stone :rock:
$random[20;45] dirt <a:dirt:818198721820885063>
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1] iron]

$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone];$random[1;10]]]
$setGlobalUserVar[dirt;$sum[$getGlobalUserVar[dirt];$random[5;20]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1]]]
$endelseif

$elseif[$getGlobalUserVar[pickaxe]==3]
$description[You mined in cave for some time and got:
$random[20;50] stone :rock:
$random[30;75] dirt <a:dirt:818198721820885063>
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;2;3;3;3;3;4;4;5] iron
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;3;3;3] gold]

$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone];$random[1;10]]]
$setGlobalUserVar[dirt;$sum[$getGlobalUserVar[dirt];$random[5;20]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;2;3;3;3;3;4;4]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;3;3;3]]]
$endelseif

$elseif[$getGlobalUserVar[pickaxe]==4]
$description[You mined in cave for some time and got:
$random[1;10] stone :rock:
$random[5;20] dirt <a:dirt:818198721820885063>
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;2;3;3;3;3;4;4] iron
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;3;3;3;3;4;4] gold
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1] diamond]

$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone];$random[1;10]]]
$setGlobalUserVar[dirt;$sum[$getGlobalUserVar[dirt];$random[5;20]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;2;3;3;3;3;4;4]]]
$setGlobalUserVar[gold;$sum[$getGlobalUserVar[gold];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;3;3;3]]]
$setGlobalUserVar[gem;$sum[$getGlobalUserVar[gem];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1]]]
$endelseif
$else
:x: You don't have a pickaxe! Buy one using \`$getServerVar[svpx6]buy-item-pickaxe\`
$endif

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]
$onlyForIDs[596296441505513483;:x: Command is in testing phase and will be soon avaible for everyone!] `
})