

//const express = require('express')
//const app = express()
 
//app.get('/', function (req, res) {
 //res.send('I am up!')
//})
 
//app.listen(1900)//change to ur port



//const Discord = require('discord.js');
//const client = new Discord.Client()
//const { apiToken } = require('./config.json');

/*const DBL = require('dblapi.js');
const dbl = new DBL(apiToken, {webhookPort: 1900, webhookAuth: 'MinecraftowyJan0'})// in webhookport: 9008, replace the "9008" with your host's port. in "AnyPassword" u can choose a random password.

dbl.webhook.on('vote', (vote) => {
console.log(`${vote.user} has voted me!`)
const webhook = new Discord.WebhookClient("824980974127284245","m7wvzJWsrcRUvPBurZkNrIIUVbCHllSwxpWrq2_QnUInm-IDAskeolEv7FUtSThZcup5")//replaces with ur webhook information
 webhook.send(`<@${vote.user}> (\`${vote.user}\`) has voted me!`) 
});
dbl.webhook.on('ready', hook => {
 console.log(`Webhook up and running at http://${hook.hostname}:${hook.port}${hook.path}`);
});*/

//=================================================================================================================================================================//
//=================================================================================================================================================================//

const dbd = require("dbd.js");

const bot = new dbd.Bot({
token: "Nzk0NTgzMTExNjQ3NDk0MTc0.X-87MA.Km8Dps8mAJ15oBMneZAxTcpSMA0", 
prefix: "$getServerVar[svpx6]" 
})

bot.loadCommands('./commands/')

bot.onMessage()

//use ctrl + F for searching for commands



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ////////////////////////////////////////////////////// V A R S //////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// vars
bot.variables({
  //misc
  version: "1.3.2.2",
  updateName: "Economy Update - Re-write",
  season: "Apocalypse",
  motd: "**MOTD:** this message can be seen only once!",
  pro: "0",

  //announcements
   //main
   anc_title: "Update 1.4",
   anc_desc: "So, it was a long time without any update. Luckily, update 1.4 will come out soon. There's no ETA at the time.\nBest regards, Cnnn666",
   //profile
   anc_title_prof: "New design",   
   anc_desc_prof: "Recently, I decided to remake some commands so - here it is!",

  //games
   //levels
   LGames: "0",
   XPg: "0",

  //economy
  Money: "0",
  bank: "0",
  ncoin: "0",
  vip: "0",
  gem: "0",
  ncoinPrice: "100",

  //level
    //server
    SLevel: "1",
    sXP: "0",
    sXPreq: "100",
    //rpg
    XP: "0",
    ReqXP: "50",
    RLevel: "1",

  //codes
  starter: "0",

  //stats
  atk: "1",
  def: "0",
  health: "100",
  healthMax: "100",
  trophies: "0",

  //Pages - total
  craft_pt: "1",
  shop_i_pt: "1",
  shop_b_pt: "1",
  inventory_pt: "1",

  //equip
   equip: "0",
   equip_name: "0",
 
  //items
    //rpg
      //lootbox
      lb_common: "0",
      lb_uncommon: "0",
      lb_rare: "0",
      lb_superRare: "0",
      lb_epic: "0",
      lb_legendary: "0",
      lb_mythic: "0",

      //weapons
        //guns
         //pistols
         
         //assault

        //close fight
         //swords
         sword_wood: "0",
         sword_iron: "0",

      //misc
      book: "0",

      //armor
      armor_iron: "0",
      armor_gold: "0",
      armor_diamond: "0",

      //magic
      book_enchant: "0",
       //potions
       potion_hp: "0",

       //spells
       spell_fire: "0",
       spell_ice: "0",

      //cards
      fcard: "0",

      //tools
      pickaxe: "0",
      axe: "0",
      hunterRifle: "0",
      fishingRod: "0",

      //furniture
        //wooden
        wood_wall: "0",
        wood_roof: "0",
        //stone
        //modern

      //resources
      wood_log: "0",
      stone: "0",
      dirt: "0",
      iron: "0",
      gold: "0",
      scrap: "0",
      metal: "0",
      ruby: "0",

  //city
   //buildings
    th: "0",
    townhall: "0",
    house: "0",
    shop: "0",
    turrets: "0", //add
   //stats
    populity: "0",
    troops: "0",
   //technology
    technology: "0",
   //jobs|economy
    income: "0",
    jobs: "0",

  //badges
  bugFinder: "0",
  developer: "0",
  translator: "0",
  verified: "0",
 
  //jobs
  job1: "false",

  //server vars
  svpx6: "c2?",
  report: "false",
  suggest: "false",
  mute: "0",
  levelSYS: "0",
   //welcome
   welcome_ch: "null",
   goodbye_ch: "null",
   welcomeSYS: "0",

   //setup
   setup: "false",
   //end setup

  //settings - global
  lang: "en",
})

//status
bot.status({
  text: "created with dbd.js and ♥️",
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

//bot.status({
  //text: "re-writing proccess: 20%/100%",
  //type: "WATCHING",
  //time: 30
//})

bot.musicStartCommand({ 
 channel: "no", 
 code: `none` 
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ////////////////////////////////////////////////////// C O M M A N D S //////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
bot.loopCommand({
code:`$setVar[ncoinPrice;$random[100;2000]]`,
every: "3600000"// if 24h doesn't work use 86400000
})

bot.loopCommand({
code:`$setVar[motd;**MOTD:** $randomText[Wait for discounts to buy some items cheaper!;Seasons are being choosen by **you**! Vote for the next season in the \`$getServerVar[svpx6]support\` server;Error 403 - access denied to see [content\\](https://cnnn666-games.cf/cnnn666v2bot/en/home);This is beta feature. Btw, did u know that actual version of bot is $getVar[version]?;There is **NO** useful info;Loading MOTD, please wait...;Error corrupted - you have been charged 25k :pound: for causing the error;Please no, don't turn me into oversimplified lo-;const message_send = req('cnnn666v2');Ya'll wait till I make Counter Strike: Teams;Rate bot using \`$getServerVar[svpx6]rate <stars (1-5)> <opinion (optional)>\` (soon)]]`,
every: "86400000"// if 24h doesn't work use 86400000
})

bot.command({
  name: "reboot",	
  code: `$reboot[index.js]
$onlyForIDs[596296441505513483;:x: Only bot developer can do that!]`
})

bot.command({
  name: "set",
  code: `$setUserVar[$message[1];$message[2];$mentioned[1]]
Done!
$onlyForIDs[596296441505513483;:x: Only bot developer can do that!] `
})

bot.command({
  name: "set-global",
  code: `$setGlobalUserVar[$message[1];$message[2];$mentioned[1]]
Done!
$onlyForIDs[596296441505513483;:x: Only bot developer can do that!] `
})

bot.command({
  name: "math",
  code: `Your result:
$math[$message] `
})

bot.joinCommand({
 channel: "$getServerVar[welcome_ch]", 
 code: `$attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]?size=2048&middle=Welcome&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[We are now $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
$suppressErrors

$onlyIf[$getServerVar[welcomeSYS]==1; ]` 
})
bot.onJoined() 

//DEVELOPER - HELP
bot.command({
  name: "dev-help",
  aliases: ["dev-info", "dev-info"],
  code: `$color[RANDOM]
  $title[❓ | Help Menu]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
Remember: only developer can use these (except tha last one ofc)]
$addField[Developer Report (everyone can use) • \`$getServerVar[svpx6]dev-report <report>\`;Sends report to me. It can be bug, bot abuse, bot cheating, etc.;yes]
$addField[Reboot • \`$getServerVar[svpx6]reboot <report>\`;Restarts bots. If the bot isn't responding for some time, you know why :wink:;yes]
$addField[Set Global User Var • \`$getServerVar[svpx6]set-global <var name> <new value> <user>\`;Sets new global value for mentioned user;yes]
$addField[Set User Var (server) • \`$getServerVar[svpx6]set <var name> <new value> <user>\`;Sets new value for mentioned user;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//DEVELOPER - REPORT
bot.command({
  name: "dev-report",
  code: `$color[RANDOM]
$title[New Report - $serverName]
$description[$message]
$footer[Reported by: $username | ID: $authorID | Server ID: $guildID]
$dm[596296441505513483]
$deletecommand
$globalCooldown[12h;To avoid spam, there is 12h cooldown. Report again in %time%] `
})
bot.command({
  name: "dev-report",
  code: `$color[RANDOM]
$title[Reported!]
$description[Your report has been succesfully reported to the developer]
$footer[Thank you!]
$globalCooldown[12h; ] `
})

//SEARCH - YT
bot.command({
  name: "search-yt",
  code: `$color[RANDOM]
$title[YouTube Search]
$description[Search: $message
Result: [\[Click Me\\]\\](https://www.youtube.com/search?q=$replaceText[$message; ;+;-1])
$footer[Searched by: $username#$discriminator | Version: $getVar[version]]
$argsCheck[>1;:x: You need to say something!] `
})

//SEARCH - GOOGLE
bot.command({
  name: "search-google",
  code: `$color[RANDOM]
$title[Google Search]
$description[Search: $message
Result: [\[Click Me\\]\\](https://www.google.com/search?q=$replaceText[$message; ;+;-1])]
$footer[Searched by: $username#$discriminator | Version: $getVar[version]]
$argsCheck[>1;:x: You need to say something!] `
})

bot.command({
  name: "update",
  code: `Updated all commands!
$updateCommands
$onlyForIDs[596296441505513483;:x: Only bot developer can do that!] `
})

// bot.command({
    //name: "yt",
    //code: `Search: $message
//Title: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title]
//URL: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url]
//Thumbnail: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]
//Duration: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]
//Uploaded: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]
//Views: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]
//Uploader: 
//$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]
//`})

//bot.command({
  //name: "contains",
  //code: `
//$if[$checkContains[$toLowercase[$message];testportal;anti tesportal; anty testportal; anti-testportal;wtyczka;nadal;jeszcze]==true]
//$randomText[Tak;Jeszcze jak]
//$endif
//`
//})


////////HUNT - RPG
//$if[$setGlobalUserVar[health;$sub[$getGlobalUserVar;$random[1;10]]]=<0;You died and your level went down!]
//$setGlobalUserVar[RLevel;$sub[$getGlobalUserVar[RLevel];1]]
//$else
//$endif

//$setGlobalUserVar[health;$sub[$getGlobalUserVar;$random[1;10]]]


//$setGlobalUserVar[health;$sub[$getGlobalUserVar;$random[1;10]]]

//$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$random[1;50]]]
//$onlyIf[$getGlobalUserVar[hunterRifle]==1;:x: You need to buy hunter rifle!]
//$globalCooldown[5m;:x: You need to wait %time% to hunt again!]

/////

//$if[$sub[$getGlobalUserVar[health];$random[1;10]]<=0]
//You died and your level went down!
//$setGlobalUserVar[RLevel;$sub[$getGlobalUserVar[RLevel];1]]
//$endif
///////////////////////////////////


//ROB V2
//bot.command({
  //name: "rob",
  //code: `$setGlobalUserVar[Money;$replaceText[$replaceText[$checkCondition[$randomText[sum;sub]==sum];true;$sub[$getGlobalUserVar[Money;$findUser[$message[1]]];$random[1000;//$getGlobalUserVar[Money;$findUser[$message[1]]]]]];false;$getGlobalUserVar[Money;$findUser[$message[1]]]];$findUser[$message[1]]]


 //$setGlobalUserVar[Money;$replaceText[$replaceText[$checkCondition[$randomText[sum;sub]==sum];true;$sum[$getGlobalUserVar[Money;$authorID];$random[1000;$getGlobalUser
//Var[Money;$authorID]]];false;$sub[$getGlobalUserVar[money;$authorID];$random[1000;$getGlobalUserVar[Money;$findUser[$message[1]]]];$authorID]


//$title[$replaceText[$replaceText[$randomText[sum;sub];sum;Rob - success];sub;Rob - fail]]
//$author[$userTag[$authorID];$authorAvatar]
//$description[You $replaceText[$replaceText[$randomText[sum;sub];sum;successfully robbed];sub;you failed the robbery] //$replaceText[$replaceText[$randomText[sum;sub];sum;and managed to steal $random[1000;$getGlobalUserVar[Money;$findUser[$message[1]] from //$userTag[$findUser[$message[1]]]];sub;and got fined $random[1000;$getGlobalUserVar[Money;$findUser[$message[1]] :pound:]]

//$footer[By $username[$authorID]]
//$color[RANDOM]




//$cooldown[12h;❌You need to wait %time% before using this command again]
//$onlyIf[$getGlobalUserVar[Money;$authorID]>=1000;❌You need to atleast have 1000 :pound: to rob!]
//$onlyIf[$getGlobalUserVar[Money;$findUser[$message[1]]]>=1000;❌The mentioned user need to atleast have 1000 :pound: to rob him]
//$onlyIf[$findUser[$message[1]]!=$authorID;❌You can't rob yourself] `
//})

//ROB
//bot.command({
  //name: "rob",
  //code: `$color[RANDOM]
//$title[Robber]
//$if[$random[1;3]==1]
//$description[$username successfuly robbed <@$mentioned[1]> and got $random[1;$getGlobalUserVar[Money;$mentioned[1]]] :pound:]
//$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];$random[1;$getGlobalUserVar[Money;$mentioned[1]]]];$authorID]
//$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$mentioned[1]];$random[1;$getGlobalUserVar[Money;$mentioned[1]]]];$mentioned[1]]

//$else
//$description[$username got caught while robbing <@$mentioned[1]> and had to pay $random[1;1000] :pound: fine]
//$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$random[1;1000]];$authorID]
//$endif

//$onlyIf[$getGlobalUserVar[Money]>=1000;You need at least 1000 :pound: to rob someone!]
//$onlyIf[$getGlobalUserVar[Money;$mentioned[1]]>=2000;Person you wanna rob needs at least 2000 :pound: !]
//$argsCheck[>1;:x: You need to mention someone!]`
//})


//meet.google.com/iao-kdia-xae oraz login: zsegrudziadz2021@gmail.com i hasło: zse2021$ - 01.03.2021

//SETUP

//$suppressErrors[{title: Bot Setup};{description:Hey, seems like you wanna run setup. It will grant you following:
//- Muted role
//- DJ role
//- Custom Server description};{footer: Are you sure you wanna continue? Yes - <a:yes:796678250264789032> | No - <a:no:796678226231558184>};{suppress:yes/no}]

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
$footer[Questions? \`$getServerVar[svpx6]sup\` | Created by: Cnnn666#5460]
$color[RANDOM]`
})


/////////////////////////////////////////////////////

////// H E L P - C O M M A N D S //////
//HELP - MAIN
bot.command({
  name: "help",
  aliases: ["info", "help"],
  code: `$color[$random[0000;999999]]
  $title[❓ | Help Menu]
  $description[This bot is the continuation of Cnnn666v2 (BETA)
Support Server: https://discord.gg/mt4hDxQpPg
$getVar[motd]]
$addField[:mega: | Announcement ($getVar[anc_title]):;$getVar[anc_desc]]
  $addField[**NEW** :gear: | Settings • \`$getServerVar[svpx6]settings\`;Change bot's settings in your server and decide which commands are supposed to be turned on it change your language bot's!]
  $addField[:thumbsup: | Reputation system **SOON** • \`$getServerVar[svpx6]help-rep\`;Check all reputation commands **SOON**;yes]
  $addField[<a:Developer:815230638365212712> | Developer commands • \`$getServerVar[svpx6]dev-help\`;Check all developing related commands;yes]
  $addField[📰 | Active season: The Beggining; More info \`$getServerVar[svpx6]ses\`;yes]
  $addField[👑 | Halls of... • \`$getServerVar[svpx6]halls\`;See all avaible halls in bot!;yes]
  $addField[:musical_note: | Music • \`$getServerVar[svpx6]help-music\`;See all avaible music commands
**Note:** This feature is in beta;yes]
  $addField[🔎 | Search+ • \`$getServerVar[svpx6]help-search\`;All search commands;yes]
  $addField[⛳ | Other • \`$getServerVar[svpx6]help-misc\`;All miscellaneous commands;yes]
  $addField[<:vip:796497627822686270> | VIP • \`$getServerVar[svpx6]vip\`;Buy VIP and earn perks! You can buy it with bot currency;yes]
  $addField[🎖 | Badges:;All info about badges \`$getServerVar[svpx6]badge-info\`;yes]
  $addField[🎟 | Ticket System • \`$getServerVar[svpx6]help-ticket\`;Soon!;yes]
  $addField[💷 | Economy • \`$getServerVar[svpx6]help-eco\`;All economy commands such as \`$getServerVar[svpx6]bal\`;yes]
  $addField[🏳 | Support • \`$getServerVar[svpx6]help-support\`;All support commands such as \`$getServerVar[svpx6]support\`;yes]
  $addField[ℹ️ | Informative • \`$getServerVar[svpx6]help-info\`;All informative commands such as \`$getServerVar[svpx6]stats\`;yes]
  $addField[🎩 | Fun • \`$getServerVar[svpx6]help-fun\`;All funny commands;yes]
  $addField[📈 | Level • \`$getServerVar[svpx6]help-lvl\`;All level commands
**Note:** this feature is in beta!;yes]
  $addField[🕹 | Games • \`$getServerVar[svpx6]help-games\`;Check all bot's games!
**Note:** This will be added soon;yes]
  $addField[🛡 | Moderation • \`$getServerVar[svpx6]help-mod\`;All moderation commands such as \`$getServerVar[svpx6]ban\`
**Note:** Moderation feature is in beta, don't recommend using it.;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - GAMES
bot.command({
  name: "help-games",
  aliases: ["info-games", "help-games"],
  code: `$color[$random[0000;999999]]
  $title[❓ | Help Menu]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
All bot's minigames]
$addField[:dagger: | RPG • \`$getServerVar[svpx6]game-rpg\`;Level up, collect items and earn money! **BETA**;no]
  $addField[$customEmoji[CSGOCnnn666v2] | Counter Strike: Teams • \`$getServerVar[svpx6]game-cst\`;Check your skill in making best csgo team! **COOMING SOON TO ALPHA**;no]
$addField[??? | Among Us - Task Simulator • \`$getServerVar[svpx6]game-auts\`;Wanna simulate among us tasks? **COOMING SOON TO ALPHA**;no]
$addField[??? | Among Us - Matchmaking • \`$getServerVar[svpx6]game-aum\`;Wait for 10 players - be crewmate or impostor and win! **COOMING SOON TO EARLY ALPHA**;no]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - ECONOMY
bot.command({
  name: "help-eco",
  aliases: ["info-eco", "help-eco", "info-economy", "help-economy"],
  code: `$color[$random[0000;999999]]
  $title[:pound: | Economy commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
Who doesn't like money?
Casino commands -> \`$getServerVar[svpx6]help-casino\` | Codes -> \`$getServerVar[svpx6]codes\`
All economy commands below:]
$addField[Search **(Temporarily disabled)** • \`$getServerVar[svpx6]search\`;Search provided places for free money!;yes]
$addField[Rob **(Temporarily disabled)** • \`$getServerVar[svpx6]rob <@user>\`;Rob someone for a free money;yes]
$addField[Monthly • \`$getServerVar[svpx6]monthly\`;And even more free money;yes]
$addField[Weekly • \`$getServerVar[svpx6]weekly\`;More free money;yes]
$addField[Daily • \`$getServerVar[svpx6]daily\`;Earn daily money for free;yes]
$addField[Hourly • \`$getServerVar[svpx6]hourly\`;Free money every hour;yes]
$addField[Mine nCoins • \`$getServerVar[svpx6]n-mine\`;Mine nCoins for 40m and check how much you'll get;yes]
$addField[Work • \`$getServerVar[svpx6]work\`;Work and get money;yes]
$addField[Withdraw • \`$getServerVar[svpx6]with\`;Withdraw money and buy things;yes]
$addField[Deposit • \`$getServerVar[svpx6]dep\`;Deposit money to your bank so no one can rob you;yes]
$addField[Crime • \`$getServerVar[svpx6]crime\`;You like risk? Win (and get money) or lose (and lose money);yes]
$addField[Balance • \`$getServerVar[svpx6]bal\`;Check how much you have money!;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - MISC
bot.command({
  name: "help-misc",
  aliases: ["info-misc", "help-misc"],
  code: `$color[$random[0000;999999]]
  $title[:golf: | Misc commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
Well, there isn't always right category for each command so... they're here
All misc commands below:]
$addField[Developer report • \`$getServerVar[svpx6]dev-report <report>\`;Found bug? Report it to me and I'll fix it (depending on the how bad this bug was, you'll get right amount of :pound: as reward and special badge)!;yes]
$addField[Offers • \`$getServerVar[svpx6]offers\`;Help bot development and get something in!;yes]
$addField[Weather • \`$getServerVar[svpx6]weather <message>\`;Check weather in the provided city!;yes]
$addField[Report • \`$getServerVar[svpx6]report <message>\`;Allows users to report things;yes]
$addField[Suggestion • \`$getServerVar[svpx6]suggest <message>\`;Allows users to suggest things;yes]
$addField[Poll • \`$getServerVar[svpx6]poll <message>\`;Creates poll of type yes/no. Only admins;yes]
$addField[Announcement • \`$getServerVar[svpx6]anc <message>\`;Anounces something in emebed! Only for admins;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - MOD
bot.command({
  name: "help-mod",
  aliases: ["info-mod", "help-mod"],
  code: `$color[$random[0000;999999]]
  $title[:shield: | Moderation commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
Used to moderate server 24/7 by you!
(If you're looking for auto-moderator, type \`$getServerVar[svpx6]settings-automod\`)
All moderation commands below:]
$addField[Mute • \`$getServerVar[svpx6]mute <user> <reason>\`;Mutes mentioned user forever (soon for specified time). Only people with \`mute_members\` permission;yes]
$addField[Purge • \`$getServerVar[svpx6]purge <amount> (max 100)\`;Clears command, bot response and typed amount. Only people with \`manage_messages\` permission;yes]
$addField[Kick • \`$getServerVar[svpx6]kick <user> <reason>\`;Kicks mentioned user. Only people with \`kick\` permission;yes]
$addField[Ban • \`$getServerVar[svpx6]ban <user> <reason>\`;Bans mentioned user. Only people with \`ban\` permission;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - SUPPORT
bot.command({
  name: "help-sup",
  aliases: ["info-sup", "help-sup", "info-support", "help-support"],
  code: `$color[$random[0000;999999]]
  $title[:flag_white: | Support commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
Need help with bot?
All support commands bellow:]
$addField[News • \`$getServerVar[svpx6]news\`;Returns what's new in the latest version;yes]
$addField[Usage • \`$getServerVar[svpx6]usage\`;Returns bot's usage;yes]
$addField[Bot • \`$getServerVar[svpx6]bot\`;Returns bot's stats;yes]
$addField[Support • \`$getServerVar[svpx6]sup\`;Returns bot support such as: link to support server or website;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - MUSIC
bot.command({
  name: "help-music",
  aliases: ["info-music", "help-music"],
  code: `$color[$random[0000;999999]]
  $title[:musical_note: | Music commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
Who the heck doesn't like music? Music is cool...
All music commands below. Keep in mind: it's in beta]
$addField[Stop • \`$getServerVar[svpx6]stop\`;Stops playing current song;yes]
$addField[Volume • \`$getServerVar[svpx6]vol <amount>\`;Changes volume of the song. Don't recommend setting it to more than 200;yes]
$addField[Queue • \`$getServerVar[svpx6]queue\`;Returns current queue;yes]
$addField[Loop • \`$getServerVar[svpx6]loop\`;Loops current queue;yes]
$addField[Skip • \`$getServerVar[svpx6]skip\`;Skips current song;yes]
$addField[Play • \`$getServerVar[svpx6]play <name of the song>\`;Adds song to the queue;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - FUN
bot.command({
  name: "help-fun",
  aliases: ["info-fun", "help-fun"],
  code: `$color[$random[0000;999999]]
  $title[:rofl: | Fun commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
OMG so funny commands (jk)
All fun commands below:]
$addField[**NEW** Captcha • \`$getServerVar[svpx6]captcha <message>\`;I'm not a robot, I'm a bot;yes]
$addField[Angry NPC • \`$getServerVar[svpx6]npc message-message\`;Makes angry npc meme-nope;yes]
$addField[Challenge • \`$getServerVar[svpx6]ch <message>\`;Challenge completed! <message>;yes]
$addField[Error • \`$getServerVar[svpx6]error <message>\`;Error 404 - not found. Couldn't find \`C:\\WINDOWS\\system32\\<message>.exe\`;yes]
$addField[Change my mind • \`$getServerVar[svpx6]cm <message>\`;<message> | change my mind;yes]
$addField[Meme • \`$getServerVar[svpx6]meme\`;Sends random meme;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - LEVEL
bot.command({
  name: "help-lvl",
  aliases: ["info-lvl", "help-lvl"],
  code: `$color[$random[0000;999999]]
  $title[:bar_chart: | Level commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
It's used for few things. Depends if we're talking about server level or rpg level.
All levelling commands below:]
$addField[Level UP • \`$getServerVar[svpx6]lvlup\`;When you have enough XP, level up and get reward!;yes]
$addField[RPG Levelling:;Level per user (global);no]

$addField[Leaderboard (soon) • \`$getServerVar[svpx6]lb\`;Check leaderboard in $serverName;yes]
$addField[Rank • \`$getServerVar[svpx6]rank\`;Check your level in $serverName;yes]
$addField[Server Levelling:;Level per server - soon leaderboard;no]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - SEARCH+
bot.command({
  name: "help-search",
  aliases: ["info-search", "help-search"],
  code: `$color[$random[0000;999999]]
  $title[:mag_right: | Search+ commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
Why Search+? Because it's with the "+"!
All search+ commands below:]
$addField[Google • \`$getServerVar[svpx6]search-google <message>\`;Googles typed message;yes]
$addField[YouTube • \`$getServerVar[svpx6]search-yt <message>\`;Searches what you typed on yt;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//HELP - INFORMATIVE
bot.command({
  name: "help-info",
  aliases: ["info-info", "help-info"],
  code: `$color[$random[0000;999999]]
  $title[:information_source: | Informative commands]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
You don't like the helpful stuff on discord? Explain why, here: ...........
All informative commands below:]
$addField[Server Info • \`$getServerVar[svpx6]sinfo\`;Shows server info;yes]
$addField[User Info • \`$getServerVar[svpx6]uinfo <user>/leave blank for self\`;Shows info about mentioned user or about you if you left it blank;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

//BADGES - INFO
bot.command({
  name: "badge-info",
  code: `$color[$random[0000;999999]]
  $title[❓ | Help Menu]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
All about badges]
$addField[Badges • Other question?;Join our support server!;yes]
$addField[Badges • Are there special badges?;Yes, example is the **VIP** badge which you get after buying VIP. There will also be time limited badges (once bought they're kept forever);yes]
$addField[Badges • Perks?;As mentioned before, badges are used to show-off your profile. No perks!;yes]
$addField[Badges • How to buy?;You can buy them using \`$getServerVar[svpx6]buy-badge-badge_name\`. You can check all avaible badges by using \`$getServerVar[svpx6]shop-badges\`;yes]
$addField[Badges • What is this?;Badges are used to show-off your profile. This is the uniqe feature which most of bots doesn't has!;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Page: 1/2 | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

bot.command({
  name: "badge-info-2",
  code: `$color[$random[0000;999999]]
  $title[❓ | Help Menu]
  $description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
All about badges]
$addField[Unique badges • check what unique badges are;They can be earned in certain ways - depending on the badge. In order to get badge, you have to be in support server;yes]
$addField[Unique badges • so, let's explore!;<:developerBadge:815845454931689473> - this badge is only for bot developers (in this case, it's only for Cnnn666)
<:bugFinder:815846438931529769> - this one can be earned by **you**! How? Simply, just find bug and report it using \`$getServerVar[svpx6]dev-report\`
<:googleTranslator:816277117158817822> - this badge is granted to anyone who **helped translating bot**
<a:verified:817334736342876170> - this badge is granted to **trusted** users of bot;yes]
$footer[Cnnn666v2 - first not pay2win bot | Page: 2/2 | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})

/////////////////////////////////////////////////////

////// H A L L S //////
//HALL - MAIN
bot.command({
  name: "halls",
  code: `$color[RANDOM]
$title[Halls Center]
$description[All halls below:]
$addField[Hall Of Support • \`$getServerVar[svpx6]hos\`;Shows all people who supported bot;yes]
$addField[Hall Of Fame • \`$getServerVar[svpx6]hof\`;Shows top 10 commands (suggest them on support server);yes]
$onlyIf[$message[1]==;] `
})

//HALL - BEST CMD
bot.command({
  name: "hof",
  code: "soon"
})

//HALL - SUPPORTERS
bot.command({
  name: "hos",
  code: "soon"
})

/////////////////////////////////////////////////////


////// I N F O R M A T I V E //////
//USER INFO


//SERVER INFO
