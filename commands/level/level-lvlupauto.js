module.exports = ({
  name: "$alwaysExecute",
  code: `$title[:arrow_double_up: • Rank up!]
$description[**$username** levelled up to level $getUserVar[SLevel]!]
$footer[You need now $getUserVar[sXPreq] to level up again! | Version: $getVar[version]]
$color[RANDOM]
$setUserVar[SLevel;$sum[$getUserVar[SLevel];1]]
$setUserVar[sXPreq;$sum[$getUserVar[sXPreq];$getUserVar[sXPreq]]]
$setUserVar[sXP;0]
$onlyIf[$getUserVar[sXP]>=$getUserVar[sXPreq];] 
$onlyIf[$getServerVar[levelSYS]==0;]`
})