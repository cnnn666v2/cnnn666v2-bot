module.exports = ({
  name: "help",
  code: `$color[RANDOM]
$thumbnail[$userAvatar[794583111647494174]]

$title[Cnnn666v2 | Free&Open-Source bot;https://cnnn666v2.gq]
$description[Hello $username! Here you will find all commands avaible in bot. However, if you want more detailed info about these, visit my [website](https://cnnn666v2.gq/commands.html)
**Note:** Remember to report all issues to Cnnn666#5460 or in [support server]($getVar[support_server])
**Announcement:** Command \`$getServerVar[svpx6]bot-suggestion\` is working now! Suggest anything you'd like to see in the bot.

$getVar[motd]

[Invite](https://discord.com/oauth2/authorize?client_id=794583111647494174&permissions=8&scope=bot) • [Support Server](https://discord.gg/mt4hDxQpPg) • [Website (Not Finished)](https://cnnn666v2.gq)

$addField[$customEmoji[Soon_TM;795676694161784922] Categories *[ALPHA]*:;Guess The Logo! (GTL) **[COMING SOON TO ALPHA]**
Counter Strike: Teams (CS:T) **[COMING SOON TO ALPHA]**
Clans **[COMING SOON TO ALPHA]**]

$addField[Categories *[Coming Soon]*:;:crown: Halls - **$getServerVar[svpx6]halls**
:tickets: Ticket System - **$getServerVar[svpx6]help-tickets**
:thumbsup: Reputation system - **$getServerVar[svpx6]help-reps**
:information_source: Informative commands - **$getServerVar[svpx6]help-info**
$customEmoji[Soon_TM;795676694161784922] Skin Battle - **$getServerVar[svpx6]game-sb**]

$addField[Categories *[Avaible]*:;:pound: Economy - **$getServerVar[svpx6]help-eco**
:shield: Moderation - **$getServerVar[svpx6]help-mod**
:dagger: RPG - **$getServerVar[svpx6]rpg**
:musical_note: Music - **$getServerVar[svpx6]help-music**
:tophat: Fun - **$getServerVar[svpx6]help-fun**
:bar_chart: Levelling - **$getServerVar[svpx6]help-level**
:mag_right: Search+ - **$getServerVar[svpx6]help-search**
:flag_white: Support/Bot commands - **$getServerVar[svpx6]help-sup**
:military_medal: Badges - **$getServerVar[svpx6]badges**
:golf: Miscellaneous - **$getServerVar[svpx6]help-misc**
:gear: Settings - **$getServerVar[svpx6]settings**
<:vip:796497627822686270> VIP - **$getServerVar[svpx6]vip**
$customEmoji[pro;795676694161784922] PRO - **$getServerVar[svpx6]pro**
$customEmoji[premium;795676694161784922] Premium - **$getServerVar[svpx6]premium**
<a:Developer:815230638365212712> Developer commands - **$getServerVar[svpx6]help-dev**]

$footer[Created and developed with <3 by: Cnnn666#5460 | Version: $getVar[version];$userAvatar[596296441505513483]]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})
//$addReactions[💷;🛡️;🎵;🗡️;📊;🎩;<:vip:796497627822686270>;🎖️;🕹️;🏳️;⛳;<a:Developer:815230638365212712>;⚙️]