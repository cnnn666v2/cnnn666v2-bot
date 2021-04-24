module.exports = ({
  name: "loop",
  code: `$if[$loopQueue==true]
  $color[$random[0000;999999]]
  $thumbnail[$songInfo[thumbnail]]
  $title[$songInfo[title];$songInfo[url]]
  $description[Started looping queue. Executed by: $username]
  $footer[Version: $getVar[version]]
  $else
  $thumbnail[$songInfo[thumbnail]]
  $title[$songInfo[title];$songInfo[url]]
  $description[Stopped looping queue. Executed by: $username]
  $footer[Version: $getVar[version]]
  $endif
$onlyIf[$message[1]==;]`
})