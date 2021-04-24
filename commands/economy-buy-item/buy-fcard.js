//Common, 1 500, fishing card
module.exports = ({
  name: "buy-item-fcard",
  code: `$color[RANDOM]
$title[Fishing Card]
$description[:tada: :tada: **Congratulations!** :tada: :tada:
$username bought Fishing Card for 1500 :pound: and now is closer fishing!]
$footer[Item shop | Version: $getVar[version]]
$setGlobalUserVar[fcard;1]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];1500]]
$onlyIf[$getGlobalUserVar[Money]>=1500;:x: You need 1500 :pound: to buy license!]
$onlyIf[$getGlobalUserVar[fcard]==0;:x: You can't have 2 same license cards!]
$onlyIf[$message[1]==;]`
})