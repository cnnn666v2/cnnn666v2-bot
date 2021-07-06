module.exports = ({
  name: "help",
  code: `$color[RANDOM]
$thumbnail[$userAvatar[794583111647494174]]

$if[$getGlobalUserVar[lang]==en]
$title[Cnnn666v2 | Free&Open-Source bot;https://cnnn666v2.gq]
$description[Hello $username! Here you will find all commands avaible in bot. However, if you want more detailed info about these, visit my [website](https://cnnn666v2.gq/commands.html)
**Note:** Remember to report all issues to Cnnn666#5460 or in [support server]($getVar[support_server])
$getVar[motd]]

$addField[Categories *[Coming Soon]*:;:crown: Halls - **$getServerVar[svpx6]halls**
:tickets: Ticket System - **$getServerVar[svpx6]help-tickets**
:thumbsup: Reputation system - **$getServerVar[svpx6]help-reps**
:information_source: Informative commands - **$getServerVar[svpx6]help-info**]

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
<a:Developer:815230638365212712> Developer commands - **$getServerVar[svpx6]help-dev**]

$footer[Created and developed by: Cnnn666#5460 | Version: $getVar[version];$userAvatar[596296441505513483]]
$endif
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})
//$addReactions[💷;🛡️;🎵;🗡️;📊;🎩;<:vip:796497627822686270>;🎖️;🕹️;🏳️;⛳;<a:Developer:815230638365212712>;⚙️]