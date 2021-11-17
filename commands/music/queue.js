module.exports = ({
  name: "queue",
    aliases: ["q"],
  code: `
$thumbnail[$songInfo[thumbnail]]
$title[Current Queue]
$description[**Now Playing:**
$songInfo[title] ● [link]($songInfo[url]) ● Added by <@$songInfo[userID]>

**Upcoming songs:**
$queue[1;25;{number} ● {title} ● [link]({url}) ● Added by <@{userID}>] 
$footer[Check all music commands! | Version: $getVar[version]]
$color[RANDOM]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];:x: You need to be in the same voice channel with the bot!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake] `
})