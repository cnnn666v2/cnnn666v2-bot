module.exports = ({
  name: "skip",
  code: `
  $color[RANDOM]
$thumbnail[$songInfo[thumbnail]]
  $title[$songInfo[title];$songInfo[url]]
  $description[Skipped to 2nd song in the queue for $username]
  $footer[Version: $getVar[version]]
$skipSong
$onlyIf[$message[1]==;]`
})