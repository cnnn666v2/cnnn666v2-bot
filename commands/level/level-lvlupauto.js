module.exports = ({
  name: "$alwaysExecute",
  code: `$title[1;$customEmoji[LvlUp;881505355295772682] • Level UP!]
$setUserVar[SLevel2;$math[$getUserVar[SLevel2]+1]]

$description[1;Congratulations **$username** :tada:
You levelled up to  **level $math[$getUserVar[SLevel2]+1]** from ~~level $getUserVar[SLevel2]~~, keep it up!]
$footer[1;Version: $getVar[version]]

$setUserVar[sXPreq2;$round[$math[$getUserVar[sXPreq2]+($getUserVar[sXPreq2]/2)]]]
$setUserVar[sXP2;0]

$onlyIf[$getUserVar[sXP2]>=$getUserVar[sXPreq2];]
$onlyIf[$getServerVar[levelSYS]==0;]
$onlyIf[$getGlobalUserVar[blocked]==0;]`
})

//$title[:arrow_double_up: • Rank up!]
//$description[**$username** levelled up to level $getUserVar[SLevel]!]
//$footer[You need now $getUserVar[sXPreq] to level up again! | Version: $getVar[version]]
//$color[RANDOM]
//$setUserVar[SLevel;$sum[$getUserVar[SLevel];1]]
//$setUserVar[sXPreq;$sum[$getUserVar[sXPreq];$getUserVar[sXPreq]]]
//$setUserVar[sXP;0]
//$onlyIf[$getUserVar[sXP]>=$getUserVar[sXPreq];]