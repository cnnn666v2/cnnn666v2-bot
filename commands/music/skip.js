module.exports = ({
  name: "skip",
  code: `
  $color[RANDOM]
$thumbnail[$songInfo[thumbnail]]
  $title[$songInfo[title];$songInfo[url]]
  $description[Skipped to 2nd song in the queue for $username]
  $footer[Version: $getVar[version]]
$skipSong
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})