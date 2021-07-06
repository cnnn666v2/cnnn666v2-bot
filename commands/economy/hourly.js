module.exports = ({
  name: "hourly",
  code: `$color[RANDOM]
$title[Hourly reward]
$description[$username claimed their hourly reward and got $random[10;50] :pound:]
$footer[Wanna too? $getServerVar[svpx6]hourly | Version: $getVar[version]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[10;50]]]
$globalCooldown[1h;You claimed your hourly reward already! Claim it again in %time%]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})