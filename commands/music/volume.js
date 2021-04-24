module.exports = ({
  name: "volume",
  aliases: ['vol', 'volume'],
  code: `$color[$random[0000;999999]]
$thumbnail[$songInfo[thumbnail]]
  $title[Music - volume]
  $description[Volume has been set to: $message by $username]
  $footer[Version: $getVar[version] | Update: $getVar[updateName]]
  $volume[$message]`
})