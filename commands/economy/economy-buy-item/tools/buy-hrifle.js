//Common, 5 000, hunter rifle
module.exports = ({
  name: "buy-item-hrifle",
  code: `$color[RANDOM]
$title[Hunter Rifle]
$description[:tada: :tada: **Congratulations!** :tada: :tada:
$username bought Hunter Rifle for 5000 :pound: and now have access to hunting area!]
$footer[Item shop | Version: $getVar[version]]
$setGlobalUserVar[hunterRifle;1]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];5000]]
$onlyIf[$getGlobalUserVar[Money]>=5000;:x: You need 5000 :pound: to buy fishing rod!]
$onlyIf[$getGlobalUserVar[hunterRifle]==0;:x: You can't have 2 hunter rifles!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})