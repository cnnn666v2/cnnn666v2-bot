module.exports = ({
    name: "pc-shop",
    aliases: ['pc-store', 'store-pc', 'shop-pc'],
    code: `$color[1;$getGlobalUserVar[welcome_color]]
    $title[1;:desktop: PC Store]
    $description[1;:star: **Team Recommendation:**
$getVar[dealRec_name] | $getVar[dealRec_price] | $getVar[dealRec_power]

[ Name • Price • Power ]]
$addField[1;X • RAM;*HyperO 32MB | 100MHz -- 1x* • **500** :pound: • 1 $customEmoji[power;881505355295772682]
*HyperO 64MB | 100MHz -- 1x* • **750** :pound: • 3 $customEmoji[power;881505355295772682]
*HyperO 128MB | 110MHz -- 1x* • **1,250** :pound: • 7 $customEmoji[power;881505355295772682]
*GGSkill 64MB | 125MHz -- 1x* • **950** :pound: • 5 $customEmoji[power;881505355295772682]]

$addField[1;X • Graphics Card;*LinteL HD 2000* • **1,500** :pound: • 5 $customEmoji[power;881505355295772682]
*nVideo GT 520* • **2,000** :pound: • 7 $customEmoji[power;881505355295772682]
*nVideo GT 530* • **2,350** :pound: • 9 $customEmoji[power;881505355295772682]
*nVideo GT 535* • **2,850** :pound: • 11 $customEmoji[power;881505355295772682]]`
})