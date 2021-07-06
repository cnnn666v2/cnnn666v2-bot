module.exports = ({
  name: "vip",
  code: `$color[RANDOM]
$title[$customEmoji[vip;795676694161784922] | VIP - Info]
$description[What **VIP** gives **you**:
*Special commands:*
Farm money faster with \`$getServerVar[svpx6]vip-work\` or \`$getServerVar[svpx6]vip-hourly\` (all commands below)

**Special badge:**
Show-off your porfile with unique badge!

**Special items and badges:**
You can buy items with the rarity *Mythic* and *Ultra* (you still can get these without vip but you need big luck)!

**Buy:**
You can buy VIP using \`$getServerVar[svpx6]buy-item-vip\` for 100,000 :pound: (or wait for discount and spend less :smile: )
Once you buy VIP it is with you forever!

**All commands:**
Economy:
\`$getServerVar[svpx6]vip-work\`
\`$getServerVar[svpx6]vip-hourly\`
\`$getServerVar[svpx6]vip-hunt\` (soon)
\`$getServerVar[svpx6]vip-shop/-badge\` (soon)
\`$getServerVar[svpx6]vip-buy-item/badge\` (soon)]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake] `
})