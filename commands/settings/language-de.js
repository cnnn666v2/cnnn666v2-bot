//DE
module.exports = ({
  name: "lang-de",
  code: `$color[RANDOM]
$title[Erfolg!]
$description[Sprache des Bots erfolgreich zu Deutsch geändert!]
$footer[Version: $getVar[version]]
$setGlobalUserVar[lang;de]
$onlyIf[$getGlobalUserVar[lang]!=de;:x: Die Sprache des Bots ist schon auf Deutsch gestellt!]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})