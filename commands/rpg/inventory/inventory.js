module.exports = ({
    name: "inventory",
    aliases: ["inv"],
    code: `$color[RANDOM]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$if[$getGlobalUserVar[lang]==en]
$title[:school_satchel: Inventory - $username[$mentioned[1;yes]]]
$description[To check all items, use following commands:
\`$getServerVar[svpx6]inventory-com\` - common items :white_large_square:
\`$getServerVar[svpx6]inventory-ucom\` - uncommon items :green_square:
\`$getServerVar[svpx6]inventory-rare\` - rare items :blue_square:
\`$getServerVar[svpx6]inventory-srar\` - super rare items :brown_square:
\`$getServerVar[svpx6]inventory-ep\` - epic items :purple_square:
\`$getServerVar[svpx6]inventory-leg\` - legendary items :yellow_square:
\`$getServerVar[svpx6]inventory-myt\` - mythic items :red_square:
\`$getServerVar[svpx6]inventory-ult\` - ultra items :black_large_square:]
$footer[RPG Update! | Version: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==pl]
$title[:school_satchel: Ekwipunek - $username[$mentioned[1;yes]]]
$description[Żeby sprawdzić wszystkie przedmioty, użyj poniższych komend:
\`$getServerVar[svpx6]inventory-com\` - zwykłe przedmioty :white_large_square:
\`$getServerVar[svpx6]inventory-ucom\` - niezwykłe przedmioty :green_square:
\`$getServerVar[svpx6]inventory-rare\` - rzadkie przedmioty :blue_square:
\`$getServerVar[svpx6]inventory-srar\` - bardzo rzadko przedmioty :brown_square:
\`$getServerVar[svpx6]inventory-ep\` - epickie przedmioty :purple_square:
\`$getServerVar[svpx6]inventory-leg\` - legendarne przedmioty :yellow_square:
\`$getServerVar[svpx6]inventory-myt\` - mityczne przedmioty :red_square:
\`$getServerVar[svpx6]inventory-ult\` - ultra przedmioty :black_large_square:]
$footer[RPG Update! | Version: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==de]
$title[:school_satchel: Inventory - $username[$mentioned[1;yes]]]
$description[To check all items, use following commands:
\`$getServerVar[svpx6]inventory-com\` - common items :white_large_square:
\`$getServerVar[svpx6]inventory-ucom\` - uncommon items :green_square:
\`$getServerVar[svpx6]inventory-rare\` - rare items :blue_square:
\`$getServerVar[svpx6]inventory-srar\` - super rare items :brown_square:
\`$getServerVar[svpx6]inventory-ep\` - epic items :purple_square:
\`$getServerVar[svpx6]inventory-leg\` - legendary items :yellow_square:
\`$getServerVar[svpx6]inventory-myt\` - mythic items :red_square:
\`$getServerVar[svpx6]inventory-ult\` - ultra items :black_large_square:]
$footer[RPG Update! | Version: $getVar[version]]
$endif

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})