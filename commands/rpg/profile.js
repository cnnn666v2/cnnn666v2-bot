module.exports = ({
  name: "profile",
  aliases: [`profile`, `prof`],
  code: `$color[RANDOM]
$author[$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$description[**$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pro;$mentioned[1;yes]]==1];true;<:pro:820305416877113414> $username's;1];false;$username's;1] stats:**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]

$addField[:mega: • Announcement ($getVar[anc_title_prof]);
$getVar[anc_desc_prof];yes]

$addField[:military_medal: • Badges:;
$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[developer;$mentioned[1;yes]]==1];true;<:developerBadge:815845454931689473> | ;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[bugFinder;$mentioned[1;yes]]==1];true;<:bugFinder:815846438931529769> | ;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[translator;$mentioned[1;yes]]==1];true;<:googleTranslator:816277117158817822> | ;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[verified;$mentioned[1;yes]]==1];true;<a:verified:817334736342876170> | ;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pro;$mentioned[1;yes]]==1];true;<:pro:820305416877113414> |;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[vip;$mentioned[1;yes]]==1];true;<:vip:796497627822686270> |;1];false;;1];yes]

$addField[:office: • City:;
Level: $getGlobalUserVar[townhall;$mentioned[1;yes]]
Technology: 
Populity:
Check full stats using \`$getServerVar[svpx6]city\`;yes]

$addField[:video_game: • Games:;
Level: $getGlobalUserVar[LGames;$mentioned[1;yes]]
XP: $getGlobalUserVar[XPg;$mentioned[1;yes]]
Trophies: $getGlobalUserVar[trophies;$mentioned[1;yes]] :trophy:;yes]

$addField[:classical_building: • Bank:;
Money in pocket: $numberSeparator[$getGlobalUserVar[Money;$mentioned[1;yes]];,] :pound:
Credit Card: $numberSeparator[$getGlobalUserVar[bank;$mentioned[1;yes]];,] :pound: 
nCoins: $numberSeparator[$getGlobalUserVar[ncoin;$mentioned[1;yes]];,] :coin:
Diamonds: $numberSeparator[$getGlobalUserVar[gem;$mentioned[1;yes]];,] :gem:;yes]

$addField[:receipt: • Basic:;
:heart: • Health: $numberSeparator[$getGlobalUserVar[health;$mentioned[1;yes]];,]/$numberSeparator[$getGlobalUserVar[healthMax;$mentioned[1;yes]];,]
:dagger: • Attack: $getGlobalUserVar[atk;$mentioned[1;yes]]
:shield: • Armor: $getGlobalUserVar[def;$mentioned[1;yes]]
$customEmoji[levelCnnn666v2] • Level: $getGlobalUserVar[RLevel;$mentioned[1;yes]]
:bar_chart: • XP: $getGlobalUserVar[XP;$mentioned[1;yes]] / $getGlobalUserVar[ReqXP;$mentioned[1;yes]];yes]

$footer[Inventory -> $getServerVar[svpx6]inv | Version: $getVar[version]]
`
})