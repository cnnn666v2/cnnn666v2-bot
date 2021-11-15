module.exports = ({
  name: "volume",
  aliases: ['vol', 'volume'],
  code: `$color[$random[0000;999999]]
$thumbnail[$songInfo[thumbnail]]
  $title[Music - volume]
  $description[$customEmoji[yesCnnn666v2;795676694161784922] Volume has been set to: $message by $username]
  $footer[Version: $getVar[version] | Update: $getVar[updateName]]
  $volume[$message]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];:x: You need to be in the same voice channel with the bot!]
$onlyIf[$message=<200;:x: You can set volume from 0 to 200!]
$onlyIf[$message>=0;:x: You can set volume from 0 to 200!]
$onlyIf[$checkContains[$toLowerCase[Infinity]]==false;:x: You need to provide a number!]
$onlyIf[$checkContains[-]==false;:x: You need to provide a number!]
$onlyIf[$isNumber[$message]==true;:x: You need to provide a number!]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})