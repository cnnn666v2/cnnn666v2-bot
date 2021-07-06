module.exports = ({
  name: "$alwaysExecute",
  code: `$if[$message==$getServerVar[svpx6]rank]
$else
$setUserVar[sXP;$sum[$getUserVar[sXP];$random[1;10]]] 
$endif
$onlyIf[$getServerVar[levelSYS]==0;]

$onlyIf[$getGlobalUserVar[blocked]==0;]`
})