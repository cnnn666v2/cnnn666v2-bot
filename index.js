const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons')(client); //Starting the discord-buttons class
const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  token: "bot token here", 
  prefix: "$getServerVar[svpx6]",
  autoUpdate: true, // set to true if version should be updated automatically after a package update
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
  version: "1.3.2.3",
  updateName: "Economy Update - Re-write",
  season: "Apocalypse",
  motd: "**MOTD:** this message can be seen only once!",
  pro: "0",
  robM: "0",
  blocked: "0",
  support_server: "https://discord.gg/mt4hDxQpPg",

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
    	 //shields
    	 shield_wood: "0", 
    	
         //swords
         sword_wood: "0",
         sword_iron: "0",
    
    	 //other
    	 belt: "0",

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
    
	  //food
      apple: "0",
      bread: "0",
    
      //resources
      wood_log: "0",
      sticks: "0",
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
   goodbyeSYS: "0",

	//welcome profile
	welcome_color: "RED",
	welcome_thumbnail: "default",
    welcome_bio: "Hi, I'm lost. Thanks for inviting me!",
    
    welcome_modMsg: "Hello! Remember to read rules first, have fun :D",

   //setup
   setup: "false",
   //end setup

  //settings - global
  lang: "en",
})

//status
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
text: "My prefix: $getServerVar[svpx6] | Deafult prefix: c2?",
type: "PLAYING",
time: 30
})

//bot.status({
  //text: "re-writing proccess: 20%/100%",
  //type: "WATCHING",
  //time: 30
//})

bot.musicStartCommand({  
 code: `:mag_right: Started searching $message...` 
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ////////////////////////////////////////////////////// C A L L B A C K S //////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
bot.onJoined() 

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

bot.createLavalink('lavalink1.sweplox.net:1119', 'sweploxhosting', false) 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ////////////////////////////////////////////////////// C O M M A N D S //////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
bot.loopCommand({
code:`$setVar[ncoinPrice;$random[100;5000]]`,
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

//DEVELOPER - HELP
bot.command({
  name: "help-dev",
  aliases: ["info-dev"],
  code: `$color[RANDOM]
  $title[❓ | Help Menu]
  $description[[Support Server](https://discord.gg/mt4hDxQpPg)
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

//DEVELOPER - BLOCK
bot.command({
	name: "block",
    code: `$deletecommand
$setGlobalUserVar[blocked;1;$mentioned[1]]

$color[RANDOM]
$title[Bot Ban - $username[$mentioned[1]]]
$description[User <@$mentioned[1]> has been banned from using bot for: $messageSlice[1]]
$footer[If you ever see anyone exploiting the bot, report it in the support server | version: $getVar[version]]

$onlyIf[$message!=;:x: You need to enter ID of the person you want to ban!]
$onlyForIDs[596296441505513483;:x: This is developer only command!] `
})
//DM BANNED
bot.command({
	name: "block",
    code: `$deletecommand

$color[RANDOM]
$title[You have been banned from using this bot]
$description[Cnnn666#5460 has banned you for: $messageSlice[1]
If you believe that's a mistake, please contact me or any of avaible mods in the [**support server**](https://discord.gg/mt4hDxQpPg)]
$footer[If you ever see anyone exploiting the bot, report it in the support server | version: $getVar[version]]

$dm[$mentioned[1]]
$suppressErrors
$onlyForIDs[596296441505513483;] `
})


//DEVELOPER - UNBLOCK
bot.command({
	name: "unblock",
    code: `$deletecommand
$setGlobalUserVar[blocked;0;$mentioned[1]]

$color[RANDOM]
$title[Bot Unban - $username[$mentioned[1]]]
$description[User <@$mentioned[1]> has been unbanned from using bot]
$footer[If you ever see anyone exploiting the bot, report it in the support server | version: $getVar[version]]

$onlyIf[$message!=;:x: You need to enter ID of the person you want to ban!]
$onlyForIDs[596296441505513483;:x: This is developer only command!] `
})
//DM UNBANNED
bot.command({
	name: "unblock",
    code: `$deletecommand

$color[RANDOM]
$title[You have been unbanned from using this bot]
$description[I'm very sorry for the mistake I did.
Report anyone exploiting bot to me or any avaible moderator in the **[support server](https://discord.gg/mt4hDxQpPg)**]
$footer[If you ever see anyone exploiting the bot, report it in the support server | version: $getVar[version]]

$dm[$mentioned[1]]]
$suppressErrors
$onlyForIDs[596296441505513483;] `
})

//SEARCH - YT
bot.command({
  name: "search-yt",
  code: `$color[RANDOM]
$title[YouTube Search]
$description[Search: $message
Result: [[Click Me]](https://www.youtube.com/search?q=$replaceText[$message; ;+;-1])
$footer[Searched by: $username#$discriminator | Version: $getVar[version]]
$argsCheck[>1;:x: You need to say something!] `
})

//SEARCH - GOOGLE
bot.command({
  name: "search-google",
  code: `$color[RANDOM]
$title[Google Search]
$description[Search: $message
Result: [[Click Me]](https://www.google.com/search?q=$replaceText[$message; ;+;-1])]
$footer[Searched by: $username#$discriminator | Version: $getVar[version]]
$argsCheck[>1;:x: You need to say something!] `
})

bot.command({
  name: "update",
  code: `Updated all commands!
$updateCommands
$onlyForIDs[596296441505513483;:x: Only bot developer can do that!] `
})


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

//BADGES - INFO
bot.command({
  name: "badges",
  code: `$color[$random[0000;999999]]
  $title[❓ | Help Menu]
  $description[[Support Server](https://discord.gg/mt4hDxQpPg)
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
  name: "badges-2",
  code: `$color[$random[0000;999999]]
  $title[❓ | Help Menu]
  $description[[Support Server](https://discord.gg/mt4hDxQpPg)
All about badges]
$addField[Unique badges • check what unique badges are;They can be earned in certain ways - depending on the badge. In order to get badge, you have to be in support server;yes]
$addField[Unique badges • so, let's explore!;<:developerBadge:815845454931689473> - this badge is only for bot developers (in this case, it's only for Cnnn666)
<:bugFinder:815846438931529769> - this one can be earned by **you**! How? Simply, just find bug and report it using \`$getServerVar[svpx6]dev-report\`
<:googleTranslator:816277117158817822> - this badge is granted to anyone who **helped translating bot**
<a:verified:817334736342876170> - this badge is granted to **trusted** users of bot;yes]
$footer[Cnnn666v2 - first not pay2win bot | Page: 2/2 | Version: $getUserVar[version]]
$onlyIf[$message[1]==;]`
})
