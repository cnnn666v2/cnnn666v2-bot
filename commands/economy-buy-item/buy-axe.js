module.exports = ({
  name: "buy-item-axe",
  code: `$color[RANDOM]
$title[:tada: :tada: Congratulations :tada: :tada:]
$description[$username bought Axe for 2,500 :pound:]
$footer[Item shop | Version: $getVar[version]]
$setGlobalUserVar[axe;1]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];2500]]
$onlyIf[$getGlobalUserVar[Money]>=2500;:x: You need 2500 :pound: to buy axe!]
$onlyIf[$getGlobalUserVar[axe]==0;:x: You can't have 2 axes!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake] `
})