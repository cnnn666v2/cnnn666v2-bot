module.exports = ({
  name: "play",
    aliases: ["p"],
  code: `$if[$getServerVar[isplaying]==0]
$onlyIf[$voiceID[$authorID]!=;:x: You need to join voice channel first!]
$if[$message!=]
$setServerVar[isplaying;1]

$color[1;RANDOM]
$title[1;$songInfo[title];$songInfo[url]]
$description[1;Added \`$playSong[$message;1m;yes;no;:x: Error occured!]\` to the queue]
$footer[1;Queue -> $getServerVar[svpx6]queue | Version: $getVar[version]]

$endif

$elseif[$getServerVar[isplaying]==1]
$color[1;RANDOM]
$title[1;$songInfo[title];$songInfo[url]]
$description[1;Added \`$playSong[$message;1m;yes;no;:x: Error occured!]\` to the queue]
$footer[1;Queue -> $getServerVar[svpx6]queue | Version: $getVar[version]]


$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];:x: You need to be in the same voice channel with the bot!]

$endelseif
$endif

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})

//0 - false
//1 - true