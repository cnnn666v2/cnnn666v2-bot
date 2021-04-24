//DE
module.exports = ({
  name: "lang-de",
  code: `$color[RANDOM]
$title[Erfolg!]
$description[Sprache des Bots erfolgreich zu Deutsch geändert!]
$footer[Version: $getVar[version]]
$setGlobalUserVar[lang;de]
$onlyIf[$getGlobalUserVar[lang]!=de;:x: Die Sprache des Bots ist schon auf Deutsch gestellt!] `
})