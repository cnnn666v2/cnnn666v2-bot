module.exports = ({
  $if: "v4",
  name: "$alwaysExecute",
  code: `$if[$message==$getServerVar[svpx6]rank]
$else
$setUserVar[sXP2;$math[$getUserVar[sXP2]+$random[1;10]]]
$endif

$onlyIf[$getServerVar[levelSYS]==0;]
$onlyIf[$getGlobalUserVar[blocked]==0;]`
})