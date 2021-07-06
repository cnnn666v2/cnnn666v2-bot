module.exports = ({
  name: "n-mine",
  code: `$color[RANDOM]
$title[Mining... completed]
$description[<@$authorID>, Your pc was mining for 40 minutes and mined $randomText[1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;3;3;3;3;3;4;4;4;5;5;10] :coin:]
$footer[nMiner v1.1 | Version: $getVar[version]]
$setGlobalUserVar[ncoin;$sum[$getGlobalUserVar[ncoin];$randomText[1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;2;2;2;2;2;2;2;3;3;3;3;3;4;4;4;5;5;10]]]
$globalCooldown[40m;:x: You can mine every 40 minutes! Wait %time%]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake] `
})

//$color[RANDOM]
//$title[Mining...]
//$description[Starting mining nCoins :coin:]
//$footer[nMiner v1.1 | Version: $getVar[version]]
//$globalCooldown[1m;You can mine nCoins every 40 minutes. Wait %time% to mine them again]