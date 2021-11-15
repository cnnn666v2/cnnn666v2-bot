//const
const duration = `$replaceText[$replaceText[$splitText[1];(;];);] $textSplit[$songInfo[duration]; ]`
const current = `$replaceText[$replaceText[$splitText[1];(;];);] $textSplit[$songInfo[current_duration]; ]`
const duration1 = `$replaceText[$replaceText[$splitText[3];(;];);]$textSplit[$songInfo[duration]; ]`
const current1 = `$replaceText[$replaceText[$splitText[3];(;];);]$textSplit[$songInfo[current_duration]; ]`

//code
module.exports = ({
 name: "nowplaying",
  aliases: ["np"],
  code: `$title[$songInfo[title];$songInfo[url]]
$description[$getObjectProperty[bar]

\`${current1} / ${duration1}\`
Publisher: $songInfo[publisher]
Publisher channel: $songInfo[publisher_url]
**Wanna more? \`$getServerVar[svpx6]help-music\`**

Description:
$songInfo[description]
$thumbnail[$songInfo[thumbnail]]
$color[RANDOM]
$footer[Executed by: $username | Version: $getVar[version]]
$author[Now Playing;$userAvatar[$clientID]]
$djseval[const util = require('dbd.js-utils')
d.object.bar = util.progressBar(${current}, ${duration}, 20, "📀", "▬", "▬")]
$createObject[{}]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})