module.exports = ({
  name: "daily",
  code: `$color[RANDOM]
$title[Daily reward]
$description[$username claimed their daily reward and got $random[500;1000] :pound:]
$footer[Wanna too? $getServerVar[svpx6]daily | Version: $getVar[version]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[500;1000]]]
$globalCooldown[1d;You claimed your daily reward already! Claim it again in %time%]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})