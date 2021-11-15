module.exports = ({
  name: "stop",
  code: `$color[$random[0000;999999]]
  $title[$songInfo[title];$songInfo[url]]
$thumbnail[$songInfo[thumbnail]]
  $description[Stopped playing $songInfo[title].]
  $footer[Version: $getVar[version]]
  $stopSong
  $suppressErrors[:x: | Nothing is being played!]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];:x: You need to be in the same voice channel with the bot!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})