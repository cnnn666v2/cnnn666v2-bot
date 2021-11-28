const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  token: "bot token here", 
  prefix: "$getServerVar[svpx6]",
  suppressErrors: true,
  errorMessage: ":x: An Error occured! Contact Cnnn666#5460 for support.",

  intents: "all",
  mobile: false,

  sharding: false,
  shardAmount: 2,

  autoUpdate: false
})

//Command Handler
const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

//Events
bot.onMessage({
respondToBots: false,
guildOnly: true
})

//Variables
bot.variables(require('./variables.js'))

//Bot Statuses
bot.status({
  text: "created with aoi.js and ♥️",
  type: "PLAYING",
  time: 30
})

bot.status({
  text: "my developer: Cnnn666#5460",
  type: "LISTENING",
  time: 30
})

bot.status({
  text: "version: $getVar[version] | $getVar[updateName] ",
  type: "WATCHING",
  time: 30
})

bot.status({
text: "Over $serverCount servers & $allMembersCount users!",
type: "WATCHING",
time: 30
})

bot.status({
text: "My default prefix: c2?",
type: "PLAYING",
time: 30
})

//bot.status({
  //text: "re-writing proccess: 20%/100%",
  //type: "WATCHING",
  //time: 30
//})

//bot.musicEndCommand({
 //channel: "$channelID",
 //code: `$setServerVar[isplaying;0]` 
//})



///////////////////////////////////////
//     |---------------------|       //
//     | Member Joined Guild |       //
//     |---------------------|       //
///////////////////////////////////////

bot.joinCommand({
 channel: "$getServerVar[welcome_ch]", 
 code: `$color[$getGlobalUserVar[welcome_color]]
$thumbnail[$replaceText[$getGlobalUserVar[welcome_thumbnail];default;$userAvatar[$authorID]]]

$title[Welcome $username :wave:]
$description[**You just made us bigger! Now we're $membersCount members!**
Some words from the server moderation: $getServerVar[welcome_modMsg]

Little bio: $getGlobalUserVar[welcome_bio]]
$footer[Welcome is in the beta testing! | Version: $getVar[version]]

$onlyIf[$getServerVar[welcomeSYS]==1; ]` 
})
bot.onJoin() 



///////////////////////////////////////
//     |---------------------|       //
//     | Member  Left  Guild |       //
//     |---------------------|       //
///////////////////////////////////////
bot.leaveCommand({
    channel: "$getServerVar[goodbye_ch]",
    code: `$color[$getGlobalUserVar[welcome_color]]
$thumbnail[$replaceText[$getGlobalUserVar[welcome_thumbnail];default;$userAvatar[$authorID]]]

$title[Goodbye $username :wave:]
$description[**$username has left us :( Now we're $membersCount members**
Some goodbyes from moderation: $getServerVar[welcome_modMsg]]
$footer[Welcome is in the beta testing! | Version: $getVar[version]]

$onlyIf[$getServerVar[goodbyeSYS]==1; ]`
})
bot.onLeave




//////////////////////////////////////////
//      |------------------------|      //
//      | Checkers or smthn idk  |      //
//      |------------------------|      //
//////////////////////////////////////////

//========================
//Random price of nCoins
bot.loopCommand({
code:`$setVar[ncoinPrice;$random[100;5000]]`,
channel: "795681330473598996",
every: "3600000"// if 24h doesn't work use 86400000
})


//==========================
//Reset things when hp == 0
bot.command({
  $if: "v4",
  name: "$alwaysExecute",
  code:`
$if[$getGlobalUserVar[health;$authorID]<=0]
	$if[$getGlobalUserVar[RLevel]==1]

		$setGlobalUserVar[health;100]
		$setGlobalUserVar[healthMax;100]

		$setGlobalUserVar[atk;1]
		$setGlobalUserVar[def;0]

		$setGlobalUserVar[XP;0]
		$setGlobalUserVar[ReqXP;50]

		$setGlobalUserVar[equip;0]
		$setGlobalUserVar[equip_name;nothing]

		$setGlobalUserVar[lb_common;0]
		$setGlobalUserVar[lb_uncommon;0]
		$setGlobalUserVar[lb_rare;0]
		$setGlobalUserVar[lb_superRare;0]
		$setGlobalUserVar[lb_epic;0]
		$setGlobalUserVar[lb_legendary;0]
		$setGlobalUserVar[lb_mythic;0]

		$setGlobalUserVar[arrow;0]

		$setGlobalUserVar[crossbow_wood;0]

		$setGlobalUserVar[shield_wood;0]
		$setGlobalUserVar[sword_wood;0]
		$setGlobalUserVar[sword_iron;0]

		$setGlobalUserVar[belt;0]

		$setGlobalUserVar[book;0]

		$setGlobalUserVar[armor_iron;0]
		$setGlobalUserVar[armor_gold;0]
		$setGlobalUserVar[armor_diamond;0]

    	$setGlobalUserVar[book_enchant;0]

		$setGlobalUserVar[potion_hp;0]

		$setGlobalUserVar[spell_fire;0]
		$setGlobalUserVar[spell_ice;0]

		$setGlobalUserVar[fcard;0]

		$setGlobalUserVar[pickaxe;0]
		$setGlobalUserVar[axe;0]
		$setGlobalUserVar[hunterRifle;0]
		$setGlobalUserVar[fishingRod;0]

		$setGlobalUserVar[wood_wall;0]
		$setGlobalUserVar[wood_roof;0]
		$setGlobalUserVar[wood_floor;0]
		$setGlobalUserVar[wood_door;0]
		$setGlobalUserVar[wood_cabinet;0]

		$setGlobalUserVar[window;0]

		$setGlobalUserVar[apple;0]
		$setGlobalUserVar[bread;0]

		$setGlobalUserVar[wood_log;0]
		$setGlobalUserVar[stone;0]
		$setGlobalUserVar[dirt;0]
		$setGlobalUserVar[iron;0]
		$setGlobalUserVar[gold;0]
		$setGlobalUserVar[scrap;0]
		$setGlobalUserVar[metal;0]
		$setGlobalUserVar[ruby;0]
		$setGlobalUserVar[gem;0]

		$color[1;RANDOM]
		$title[1;RPG Death]
		$description[1;Your level was \`1\` and you died.
All your items has been resetted.]
		$footer[1;Be aware of your current health!]
		$dm
      $elseIf[$getGlobalUserVar[RLevel]!=1]
			  $title[1;RPG Death]
			  $description[1;You died and your level has been decreased by 1 and max health by 10
Your new stats:
Level: $getGlobalUserVar[RLevel]
Max Health: $getGlobalUserVar[healthMax]]
			  $footer[1;1.4 RPG Update! | Version: $getVar[version]]

			  $setGlobalUserVar[health;$getGlobalUserVar[healthMax]]
			  $setGlobalUserVar[healthMax;$math[$getGlobalUserVar[healthMax]-10]]
			  $setGlobalUserVar[RLevel;$math[$getGlobalUserVar[RLevel]-1]]
			  $dm
		  $endelseIf
	$endif
$endif`,
})

//====================
//Message Of The Day
bot.loopCommand({
code:`$setVar[motd;**MOTD:** $randomText[Wait for discounts to buy some items cheaper!;Seasons are being choosen by **you**! Vote for the next season in the \`$getServerVar[svpx6]support\` server;Error 403 - access denied to see [content\\](https://cnnn666-games.cf/cnnn666v2bot/en/home);This is beta feature. Btw, did u know that actual version of bot is $getVar[version]?;There is **NO** useful info;Loading MOTD, please wait...;Error corrupted - you have been charged 25k :pound: for causing the error;Please no, don't turn me into oversimplified lo-;const message_send = req('cnnn666v2');Ya'll wait till I make Counter Strike: Teams;Rate bot using \`$getServerVar[svpx6]rate <stars (1-5)> <opinion (optional)>\` (soon)]]`,
channel: "795681330473598996",
every: "86400000"// if 24h doesn't work use 86400000
})

///////////////
//   SETUP


///Setting-up
bot.awaitedCommand({
  name: "setup-confirmed",
  code: `$title[Thank you!]
$description[Thank your for using Cnnn666v2 and setting it up. It means a lot! Your roles have been created. However, you have to move them manually.]
$footer[Questions? \`$getServerVar[svpx6]sup\` | Created by: Cnnn666#5460]
$createRole[DJ;4d4746;no;yes;1;readmessages;viewchannel;sendmessages]
$createRole[Mute;4d4746;no;yes;1;readmessages;viewchannel]
$setServerVar[setup;true]
$color[RANDOM]`
})

bot.awaitedCommand({
  name: "setup-declined",
  code: `$title[Uh, oh!]
$description[Seems like you cancelled your setup. You can always execute the progress again by using \`$getServerVar[svpx6]setup\`]
$footer[Questions? $getServerVar[svpx6]sup | Created by: Cnnn666#5460]
$color[RANDOM]`
})


//HELP - INFORMATIVE
//bot.command({
 // name: "help-info",
  //aliases: ["info-info", "help-info"],
 // code: `$color[$random[0000;999999]]
 // $title[:information_source: | Informative commands]
 // $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
//You don't like the helpful stuff on discord? Explain why, here: ...........
//All informative commands below:]
//$addField[Server Info • \`$getServerVar[svpx6]sinfo\`;Shows server info;yes]
//$addField[User Info • \`$getServerVar[svpx6]uinfo <user>/leave blank for self\`;Shows info about mentioned user or about you if you left it blank;yes]
 // $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
//$onlyIf[$message[1]==;]`
//})