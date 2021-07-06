module.exports = ({
  name: "lootbox-buy-common",
  code: `$color[RANDOM]
$title[:tada: :tada: Congratualtions :tada: :tada:]
$description[$username bought common lootbox for 500 :pound:]
$footer[Goodluck! | Version: $getVar[version]]

$setGlobalUserVar[lb_common;$math[$getGlobalUserVar[lb_common]+1]]
$setGlobalUserVar[Money;$math[$getGlobalUserVar[Money]-500]]

$onlyIf[$getGlobalUserVar[Money]>=500;:x: You need 500 :pound: to buy this lootbox!]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})