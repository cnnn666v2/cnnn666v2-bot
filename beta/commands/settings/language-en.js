//EN
module.exports = ({
  name: "lang-en",
  code: `$color[RANDOM]
$title[Success!]
$description[Successfully changed bot language to english!]
$footer[Version: $getVar[version]]
$setGlobalUserVar[lang;en]
$onlyIf[$getGlobalUserVar[lang]!=en;:x: Bot's language is already english!]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})