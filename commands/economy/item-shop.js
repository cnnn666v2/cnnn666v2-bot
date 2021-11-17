/////////////S H O P - I T E M S - B U Y
//Sorting:
//Rarity, price, name
//Rarity list: Ultra -> Mythic -> Legendary -> Epic -> Super Rare -> Rare -> Uncommon -> Common \\

module.exports = ({
  name: "shop",
  code: `$color[RANDOM]
$thumbnail[$authorAvatar]
$title[$customEmoji[shop;795676694161784922] | Item Shop - 24/7]
$description[Price of 1 :coin: right now: $getVar[ncoinPrice] :pound:

$customEmoji[cs_master;795676694161784922] Promoted:
$customEmoji[NEW;795676694161784922] Welcome color: GREEN | 1,000 :pound: | Common | \`$getServerVar[svpx6]buy-color-green\`
$customEmoji[NEW;795676694161784922] Welcome color: ORANGE | 1,000 :pound: | Common | \`$getServerVar[svpx6]buy-color-orange\`
$customEmoji[NEW;795676694161784922] Welcome thumbnail: Forest | 5,000 :pound: | Common | \`$getServerVar[svpx6]buy-tn-forest\`]

$addField[All items (A - Z);:apple: Apple \`$getServerVar[svpx6]buy-item-apple\` | 10 :pound: | Common
$customEmoji[ballistic_shield;795676694161784922] Ballistic Shield | \`$getServerVar[svpx6]buy-item-sbal\` | 345,500 :pound: | Epic **[+30 DEF]**
Fishing Card | \`$getServerVar[svpx6]buy-item-fcard\` | 1,500 :pound: | Common
Fishing Rod | \`$getServerVar[svpx6]buy-item-frod\` | 2,000 :pound: | Common
Hunter Rifle | \`$getServerVar[svpx6]buy-item-hrifle\` | 5,000 :pound: | Common]
$footer[Badge shop $getServerVar[svpx6]shop-badge | Page 1/$getVar[shop_i_pt] | Version: $getVar[version]]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})
//VIP | \`$getServerVar[svpx6]buy-item-vip\` | 100,000 :pound: | Uncommon