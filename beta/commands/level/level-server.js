////// L E V E L - S E R V E R //////
//RANK
module.exports = ({
  name: "rank",
  code: `$color[$getGlobalUserVar[welcome_color]]
$thumbnail[$getGlobalUserVar[welcome_thumbnail]]

$title[$username[$mentioned[1;yes]]'s level stats in $serverName]
$addField[$customEmoji[XP;881505355295772682] XP;$getUserVar[sXP2;$mentioned[1;yes]] | $getUserVar[sXPreq2;$mentioned[1;yes]];yes]
$addField[$customEmoji[Level;881505355295772682] Level;**Your Level is:** $getUserVar[SLevel2;$mentioned[1;yes]];yes]

$footer[Advanced levelling soon! | Version: $getVar[version]]

$onlyIf[$getServerVar[levelSYS]==0;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})

//https://api.xzusfin.repl.co/rankcard?avatar=$replaceText[$userAvatar[$mentioned[1;yes]];webp;png]&name=$replaceText[$replaceText[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]];#;%23]; ;%20]&level=$getUserVar[SLevel;$mentioned[1;yes]]&exp=$getUserVar[sXP;$mentioned[1;yes]]&maxexp=$getUserVar[sXPreq;$mentioned[1;yes]]

//Your level: $getUserVar[SLevel]
//Your XP: $getUserVar[sXP]/$getUserVar[sXPreq]
//Needed XP: $sub[$getUserVar[sXPreq];$getUserVar[sXP]]