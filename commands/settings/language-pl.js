//PL
module.exports = ({
  name: "lang-pl",
  code: `$color[RANDOM]
$title[Sukces!]
$description[Pomyślnie zmieniono język bota  na polski!]
$footer[Wersja: $getVar[version]]
$setGlobalUserVar[lang;pl]
$onlyIf[$getGlobalUserVar[lang]!=pl;:x: Język bota jest już polski!] `
})