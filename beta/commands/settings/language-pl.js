//PL
module.exports = ({
  name: "lang-pl",
  code: `$color[RANDOM]
$title[Sukces!]
$description[Pomyślnie zmieniono język bota  na polski!]
$footer[Wersja: $getVar[version]]
$setGlobalUserVar[lang;pl]
$onlyIf[$getGlobalUserVar[lang]!=pl;:x: Język bota jest już polski!]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})