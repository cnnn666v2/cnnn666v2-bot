module.exports = ({
  name: "weekly",
  code: `$color[RANDOM]
$title[Weekly reward]
$description[$username claimed their weekly reward and got $random[4000;8000] :pound:]
$footer[Wanna too? $getServerVar[svpx6]weekly | Version: $getVar[version]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[4000;8000]]]
$globalCooldown[1w;You claimed your weekly reward already! Claim it again in %time%]
$onlyIf[$message[1]==;]`
})