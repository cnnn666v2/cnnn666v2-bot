module.exports = ({
  name: "code-starter",
  code: `Welcome $username!
Here is your sarter kit: 5,000 :pound: and 1 :coin:
Spend them wisely!
$setGlobalUserVar[ncoin;$sum[$getGlobalUserVar[ncoin];1]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];5000]]
$onlyIf[$getGlobalUserVar[starter]==0;:x: You can use starter pack only once!] `
})