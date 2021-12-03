module.exports = ({
  name: "profile",
  aliases: [`profile`, `prof`],
  code: `$color[1;$getGlobalUserVar[welcome_color]]

$author[1;$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$description[1;:scroll: Little bio:
$getGlobalUserVar[welcome_bio;$mentioned[1;yes]]

**$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pro;$mentioned[1;yes]]==1];true;<:pro:820305416877113414> $username's;1];false;$username's;1] stats:**]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]

$addField[1;:mega: • Announcement ($getGlobalUserVar[anc_title_prof]);
$getGlobalUserVar[anc_desc_prof];yes]

$addField[1;:military_medal: • Badges:;Flex with them: $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[developer;$mentioned[1;yes]]==1];true;<:developerBadge:815845454931689473> | ;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[bugFinder;$mentioned[1;yes]]==1];true;<:bugFinder:815846438931529769> | ;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[translator;$mentioned[1;yes]]==1];true;<:googleTranslator:816277117158817822> | ;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[verified;$mentioned[1;yes]]==1];true;<a:verified:817334736342876170> | ;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pro;$mentioned[1;yes]]==1];true;<:pro:820305416877113414> |;1];false;;1]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[vip;$mentioned[1;yes]]==1];true;<:vip:796497627822686270> |;1];false;;1];yes]

$addField[1;X • Country:;
Reputation: $getGlobalUserVar[townhall;$mentioned[1;yes]]
Cities: 0 :office:
National Finance: 0 :pound:
Army (units): 0
Check full stats using \`$getServerVar[svpx6]country\`;yes]

$addField[1;:video_game: • Games:;
Level: $getGlobalUserVar[LGames;$mentioned[1;yes]]
XP: $getGlobalUserVar[XPg;$mentioned[1;yes]]
Trophies: $getGlobalUserVar[trophies;$mentioned[1;yes]] :trophy:;yes]

$addField[1;:classical_building: • Bank:;
Money in pocket: $numberSeparator[$getGlobalUserVar[Money;$mentioned[1;yes]];,] :pound:
Credit Card: $numberSeparator[$getGlobalUserVar[bank;$mentioned[1;yes]];,] :pound: 
nCoins: $numberSeparator[$getGlobalUserVar[ncoin;$mentioned[1;yes]];,] :coin:
Diamonds: $numberSeparator[$getGlobalUserVar[gem;$mentioned[1;yes]];,] :gem:;yes]

$addField[1;:receipt: • Basic:;
:heart: • Health: $numberSeparator[$getGlobalUserVar[health;$mentioned[1;yes]];,]/$numberSeparator[$getGlobalUserVar[healthMax;$mentioned[1;yes]];,]
:dagger: • Attack: $getGlobalUserVar[atk;$mentioned[1;yes]]
:shield: • Armor: $getGlobalUserVar[def;$mentioned[1;yes]]
$customEmoji[levelCnnn666v2] • Level: $getGlobalUserVar[RLevel;$mentioned[1;yes]]
:bar_chart: • XP: $getGlobalUserVar[XP;$mentioned[1;yes]] / $getGlobalUserVar[ReqXP;$mentioned[1;yes]];yes]

$footer[1;Inventory -> $getServerVar[svpx6]inv | Version: $getGlobalUserVar[version]]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]
`
})