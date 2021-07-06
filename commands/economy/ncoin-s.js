module.exports = ({
  name: "n-sell",
  code:`
$color[RANDOM]
$title[:tada: :tada: Congratulations! :tada: :tada:] 
$description[$username successfully sold $message[1] nCoins for $numberSeparator[$multi[$message[1];$getVar[ncoinPrice]];,] :pound:]

$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];$multi[$message[1];$getVar[ncoinPrice]]];$authorID]
$setGlobalUserVar[ncoin;$sub[$getGlobalUserVar[ncoin;$authorID];$message[1]];$authorID]

$suppressErrors[:x: Wrong usage! Right usage: \`$getServerVar[svpx6]n-sell <amount>\`]
$argsCheck[>1;:x: You trying to sell nothing?]
$onlyIf[$getGlobalUserVar[ncoin;$authorID]>=1;:x: You don't have any nCoin!]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})