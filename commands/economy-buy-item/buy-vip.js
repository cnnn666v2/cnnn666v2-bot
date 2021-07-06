//Uncommon, 100 000, vip
module.exports = ({
  name: "buy-item-vip",
  code: `$color[RANDOM]
$title[VIP Status]
$description[:tada: :tada: **Congratulations!** :tada: :tada:
$username bought VIP $customEmoji[vipCnnn666v2] for 100,000 :pound: and now is VIP user!]
$footer[Item shop | Version: $getVar[version]]

$setGlobalUserVar[vip;1]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];100000]]
$onlyIf[$getGlobalUserVar[Money]>=100000;:x: You need 100,000 :pound: to buy VIP]
$onlyIf[$getGlobalUserVar[vip]==0;:x: You can't have 2 vip cards!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake] `
})