/////////////S H O P - B A D G E S - B U Y
//Sorting:
//Rarity, price, name
//Rarity list: Ultra -> Mythic -> Legendary -> Epic -> Super Rare -> Rare -> Uncommon -> Common \\

module.exports = ({
  name: "shop-badge",
  code: `$color[RANDOM]
$title[Badge Shop - 24/7]
$thumbnail[$authorAvatar]
$description[Price of 1 :coin: right now: $getVar[ncoinPrice] :pound:
Time limited badges:
None

Promoted badges:
Item 1: $randomText[log;stone]
Item 2: $randomText[epic log;big stone]
Item 3: $randomText[Wheel;Shell]]
$addField[All badges (A - Z);Translator | \`$getServerVar[svpx6]buy-badge-translator\` | 1,000 :pound: | Common
item 2 | buy | price
item 3 | buy | price
item 4 | buy | price]
$footer[Item shop $getServerVar[svpx6]shop | Page 1/$getVar[shop_b_pt] | Version: $getVar[version]]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})