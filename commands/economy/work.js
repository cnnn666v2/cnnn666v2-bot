module.exports = ({
  name: "work",
  code: `$color[$random[0000;999999]]
  $title[Work]
  $description[You worked and earned: $random[100;1000]]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[100;1000]]]
  $globalCooldown[30m;You're tired, please wait %time% to work again.]
  $footer[Version: $getVar[version]]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})