module.exports = {
name: "rob",
code: `$if[$randomText[lose;lose;win]==win]
$color[GREEN]
$title[You successfully robbed $username]
$footer[Risky man]
$addTimestamp


$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$mentioned[1]];$random[5;$getGlobalUserVar[Money;$mentioned[1]]]];$mentioned[1]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];$random[5;$getGlobalUserVar[Money;$mentioned[1]]]];$authorID]
$description[You stole $random[5;$getGlobalUserVar[Money;$mentioned[1]]] :pound: from $username]

$elseif[$randomText[lose;lose;win]==lose]
$color[RED]
$title[You got caught while robbing $username]
$footer[Robbing bad]
$addTimestamp

$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$random[5;$getGlobalUserVar[Money;$authorID]]];$authorID]
$description[You got caugh and paid $random[5;$getGlobalUserVar[Money;$authorID]] :pound: fine]

$endelseif
$endif


$globalCooldown[1d;:x: You can rob 1 person every day. Try to rob someone again in %time%]
$onlyIf[$getGlobalUserVar[Money]>2500;:x: You need more than 2500 :pound: to rob someone!]
$onlyIf[$getGlobalUserVar[Money;$mentioned[1]]>2500;:x: You can't rob people which have less (or equal) than 2500 :pound:]
$onlyIf[$isMentioned[$mentioned[1]]==true;:x: You need to mention someone!]
$onlyIf[$mentioned[1]!=$authorID;:x: You can't rob yourself!]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
}