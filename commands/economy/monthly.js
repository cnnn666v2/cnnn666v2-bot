module.exports = ({
  name: "monthly",
  code: `$color[RANDOM]
$title[Monthly reward]
$description[$username claimed their monthly reward and got $random[10000;20000] :pound:]
$footer[Wanna too? $getServerVar[svpx6]monthly | Version: $getVar[version]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[10000;20000]]]
$globalCooldown[30d;You claimed your monthly reward already! Claim it again in %time%]
$onlyIf[$message[1]==;]`
})