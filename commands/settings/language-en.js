//EN
module.exports = ({
  name: "lang-en",
  code: `$color[RANDOM]
$title[Success!]
$description[Successfully changed bot language to english!]
$footer[Version: $getVar[version]]
$setGlobalUserVar[lang;en]
$onlyIf[$getGlobalUserVar[lang]!=en;:x: Bot's language is already english!] `
})