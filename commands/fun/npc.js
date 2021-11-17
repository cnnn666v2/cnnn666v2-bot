module.exports = ({
  name: "npc",
  code: `$title[Angry NPC]
$color[RANDOM]

$addReactions[👍;👎]
$image[https://vacefron.nl/api/npc?text1=$replaceText[$splitText[1]; ;+;-1]&text2=$replaceText[$splitText[2]; ;+;-1]]
$textSplit[$message;-]
$deletecommand

$footer[Requested by $username | Version: $getVar[version]]
$addTimestamp
$onlyIfMessageContains[$message;-;:x: Incorrect usage! Usage: $getServerVar[svpx6]npc <text1-text2>] `
})