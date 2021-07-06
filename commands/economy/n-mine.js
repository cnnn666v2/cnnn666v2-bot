//module.exports = {
//name: "n-mine",
//code: `$color[RANDOM]
//$title[Mining... completed]
//$description[<@$authorID>, Your pc was mining for 40 minutes and mined $randomText[1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;3;3;3;3;3;4;4;4;5;5;10]]
//$footer[nMiner v1.1 | Version: $getVar[version]]
//$setGlobalUserVar[ncoin;$sum[$getGlobalUserVar[ncoin];$randomText[1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;3;3;3;3;3;4;4;4;5;5;10]]]
//$wait[1m]
//$onlyIf[$message[1]==;]
//$globalCooldown[1m;%time%]
//$onlyIf[$getGlobalUserVar[developer]==1;:x: Command isn't working properly and is disabled for some time]`
//}