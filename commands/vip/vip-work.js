module.exports = ({
  name: "vip-work",
  code: `$color[RANDOM]
$title[VIP - Work]
$description[You worked as $randomText[cashier;programmer;Elon Musk;alien] for additional $random[1;6]h and got $random[100;250] :pound:]
$footer[Free money, but for vips! | Version: $getVar[version]]
$globalCooldown[15m;You can work every 15m. Wait %time% and work again]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[100;250]]]
$onlyIf[$getGlobalUserVar[vip]==1;:x: You're not vip user! Buy it using \`$getServerVar[svpx6]buy-item-vip\`]
$onlyIf[$message[1]==;] `
})
