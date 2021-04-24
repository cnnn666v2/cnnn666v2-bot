/////////////S H O P - I T E M S - B U Y
//Sorting:
//Rarity, price, name
//Rarity list: Ultra -> Mythic -> Legendary -> Epic -> Super Rare -> Rare -> Uncommon -> Common \\

module.exports = ({
  name: "shop",
  code: `$color[RANDOM]
$thumbnail[$authorAvatar]
$title[Item Shop - 24/7]
$description[Price of 1 :coin: right now: $getVar[ncoinPrice] :pound:

Promoted items:
Item 1: $randomText[log;stone]
Item 2: $randomText[epic log;big stone]
Item 3: $randomText[Wheel;Shell]]
$addField[All items (A - Z);Fishing Card | \`$getServerVar[svpx6]buy-item-fcard\` | 1,500 :pound: | Common
Fishing Rod | \`$getServerVar[svpx6]buy-item-frod\` | 2,000 :pound: | Common
Hunter Rifle | \`$getServerVar[svpx6]buy-item-hrifle\` | 5,000 :pound: | Common
VIP | \`$getServerVar[svpx6]buy-item-vip\` | 100,000 :pound: | Uncommon]
$footer[Badge shop $getServerVar[svpx6]shop-badge | Page 1/$getVar[shop_i_pt] | Version: $getVar[version]]
$onlyIf[$message[1]==;]`
})