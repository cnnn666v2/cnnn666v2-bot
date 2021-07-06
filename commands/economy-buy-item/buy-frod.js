//Common, 2 000, fishing rod
module.exports = ({
  name: "buy-item-frod",
  code: `$color[RANDOM]
$title[Fishing Rod]
$description[:tada: :tada: **Congratulations!** :tada: :tada:
$username bought Fishing Rod for 2000 :pound: and now have access to fishing area!]
$footer[Item shop | Version: $getVar[version]]
$setGlobalUserVar[fishingRod;1]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];2000]]
$onlyIf[$getGlobalUserVar[Money]>=2000;:x: You need 2000 :pound: to buy fishing rod!]
$onlyIf[$getGlobalUserVar[fishingRod]==0;:x: You can't have 2 fishing rods!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})