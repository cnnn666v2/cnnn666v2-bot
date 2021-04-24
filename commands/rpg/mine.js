module.exports = ({
  name: "mine",
  code: `$if[$getGlobalUserVar[lang]==en]

$color[RANDOM]
$title[:pick: Mining resources]

$if[$getGlobalUserVar[pickaxe]==1]
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
$endif

$footer[Wanna better pickaxe? $getServerVar[svpx6]upgrade-pickaxe | Version: $getVar[version]]
$globalCooldown[30s;:x: You can main every 5m! Wait %time% to mine again]
$onlyIf[$getGlobalUserVar[pickaxe]>=1;:x: You need to have a pickaxe to use this command!]

$else
$if[$getGlobalUserVar[lang]==pl]

$color[RANDOM]
$title[Kopanie zasobów]

$if[$getGlobalUserVar[pickaxe]==1]
$description[Kopałeś w jaskini przez jakiś czas i dostałeś:
$random[0;5] kamienia
$random[0;10] ziemii
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;2;2;2;3] żelaza]

$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone];$random[0;5]]]
$setGlobalUserVar[dirt;$sum[$getGlobalUserVar[dirt];$random[1;10]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;2;2;2;3]]]

$elseif[$getGlobalUserVar[pickaxe]==2]
$description[Kopałeś w jaskini przez jakiś czas i dostałeś:
$random[1;10] kamienia :rock:
$random[5;20] ziemii <a:dirt:818198721820885063>
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;2;3;3;3;3;4;4] żelaza
$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1] diamentów]

$setGlobalUserVar[stone;$sum[$getGlobalUserVar[stone];$random[1;10]]]
$setGlobalUserVar[dirt;$sum[$getGlobalUserVar[dirt];$random[5;20]]]
$setGlobalUserVar[iron;$sum[$getGlobalUserVar[iron];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;2;2;3;3;3;3;4;4]]]
$setGlobalUserVar[gem;$sum[$getGlobalUserVar[gem];$randomText[0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;1;1;1]]]

$endelseif
$endif

$footer[Chcesz lepszy kilof? $getServerVar[svpx6]upgrade-pickaxe | Wersja: $getVar[version]]
$globalCooldown[5m;:x: Możesz kopać co 5m! Zaczekaj %time% żeby kopać ponownie]
$onlyIf[$getGlobalUserVar[pickaxe]>=1;:x: Musisz mieć kilof żeby użyć tej komendy!]

$endif
$endif
$onlyForIDs[596296441505513483;:x: Command is in testing phase and will be soon avaible for everyone!] `
})