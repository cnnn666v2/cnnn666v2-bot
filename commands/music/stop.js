module.exports = ({
  name: "stop",
  code: `$color[$random[0000;999999]]
  $title[$songInfo[title];$songInfo[url]]
$thumbnail[$songInfo[thumbnail]]
  $description[Stopped playing $songInfo[title].]
  $footer[Version: $getVar[version]]
  $stopSong
  $suppressErrors[:x: | Nothing is being played!]
$onlyIf[$message[1]==;]`
})