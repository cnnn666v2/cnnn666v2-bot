module.exports = ({
name: "$alwaysExecute",
code: `$if[$djsEval[$getGlobalUserVar[pickaxe]%1;yes]==0]
$setGlobalUserVar[dirtMin;$math[$getGlobalUserVar[dirtMin]+1]]

$elseif[$djsEval[$getGlobalUserVar[pickaxe]%2;yes]==0]
$setGlobalUserVar[dirtMax;$math[$getGlobalUserVar[dirtMax]+2]]
$endelseif

$endif`
})