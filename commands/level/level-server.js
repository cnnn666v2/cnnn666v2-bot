////// L E V E L - S E R V E R //////
//RANK
module.exports = ({
  name: "rank",
  code: `
https://api.xzusfin.repl.co/rankcard?avatar=$replaceText[$userAvatar[$mentioned[1;yes]];webp;png]&name=$replaceText[$replaceText[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]];#;%23]; ;%20]&level=$getUserVar[SLevel;$mentioned[1;yes]]&exp=$getUserVar[sXP;$mentioned[1;yes]]&maxexp=$getUserVar[sXPreq;$mentioned[1;yes]]
$onlyIf[$getServerVar[levelSYS]==0;]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})

//Your level: $getUserVar[SLevel]
//Your XP: $getUserVar[sXP]/$getUserVar[sXPreq]
//Needed XP: $sub[$getUserVar[sXPreq];$getUserVar[sXP]]