module.exports = ({
  name: "volume",
  aliases: ['vol', 'volume'],
  code: `$color[$random[0000;999999]]
$thumbnail[$songInfo[thumbnail]]
  $title[Music - volume]
  $description[Volume has been set to: $message by $username]
  $footer[Version: $getVar[version] | Update: $getVar[updateName]]
  $volume[$message]

$onlyIf[$isNumber[$message];:x: You need to provide a number!]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})