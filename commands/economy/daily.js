module.exports = ({
  name: "daily",
  code: `$color[RANDOM]
$title[Daily reward]
$description[$username claimed their daily reward and got $random[500;1000] :pound:]
$footer[Wanna too? $getServerVar[svpx6]daily | Version: $getVar[version]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[500;1000]]]
$globalCooldown[1d;You claimed your daily reward already! Claim it again in %time%]
$onlyIf[$message[1]==;]`
})