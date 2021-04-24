//Common, 5000, pickaxe
module.exports = ({
  name: "buy-item-pickaxe",
  code: `$color[RANDOM]
$title[Pickaxe]
$description[:tada: :tada: **Congratulations!** :tada: :tada:
$username bought Pickaxe for 5000 :pound: and now can mine resources!]
$footer[Item shop | Version: $getVar[version]]
$setGlobalUserVar[pickaxe;1]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];5000]]
$onlyIf[$getGlobalUserVar[Money]>=5000;:x: You need 5000 :pound: to buy pickaxe!]
$onlyIf[$getGlobalUserVar[pickaxe]==0;:x: You can't have 2 pickaxe!]
$onlyIf[$message[1]==;] `
})