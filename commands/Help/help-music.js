module.exports = ({
name: "help-music",
code: `$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$if[$getGlobalUserVar[lang]==en]
$title[:musical_note: Music]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**
**Radio:** Coming Soon to BETA!]
$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`play | p <song>\`, \`loop\`, \`skip\`, \`stop\`, \`volume <1 - 200>\`, \`nowplaying | np\`;yes]
$footer[Soon more features for music! | Version: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==pl]
$title[:musical_note: Muzyka]
$description[Dowiedz się więcej [tutaj](https://cnnn666v2.gq/pl/commands.html)
Wszystkie komendy zaczynają się z **$getServerVar[svpx6]**
**Radio:** Wkrótce w BECIE!]
$addField[Wyłączone (tymczasowo):;Brak :tada:;yes]
$addField[Dostępne komendy:;\`play | p <song>\`, \`loop\`, \`skip\`, \`stop\`, \`volume <1 - 200>\`, \`nowplaying | np\`;yes]
$footer[Wkrótce więcej funkcji do muzyki! | Wersja: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==de]
$title[:musical_note: Music]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**
**Radio:** Coming Soon to BETA!]
$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`play | p <song>\`, \`loop\`, \`skip\`, \`stop\`, \`volume <1 - 200>\`, \`nowplaying | np\`;yes]
$footer[Soon more features for music! | Version: $getVar[version]]
$endif
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})