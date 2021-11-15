module.exports = ({
  name: "vip-hourly",
  code: `$color[RANDOM]
$title[VIP - Hourly]
$description[You got $random[250;500] :pound: for nothing honestly. Nice]
$footer[Free money, but for vips! | Version: $getVar[version]]
$globalCooldown[1h;You can work every 1h. Wait %time% and work again]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[250;500]]]
$onlyIf[$getGlobalUserVar[vip]==1;:x: You're not vip user! Buy it using \`$getServerVar[svpx6]buy-item-vip\`]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake] `
})