module.exports = ({
name: "rpg",
code: `$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$if[$getGlobalUserVar[lang]==en]
$title[:dagger: RPG]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**
**BIG UPDATE 1.4:** Introducing a lot of new commands, items and features!]
$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`mine\`, \`hunt\`, \`chop\`, \`fish\`, \`adventure\`, \`profile | prof\`, \`inventory | inv\`, \`recipes\`;yes]
$footer[RPG is still in beta | Version: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==pl]
$title[:dagger: RPG]
$description[Dowiedz się więcej [tutaj](https://cnnn666v2.gq/pl/commands.html)
Wszystkie komendy zaczynają się z **$getServerVar[svpx6]**
**DUŻA AKTUALIZACJA 1.4:** Przedstawiamy wiele nowych komend, przedmiotów i funkcji!]
$addField[Wyłączone (tymczasowo):;Brak :tada:;yes]
$addField[Dostępne komendy:;\`mine\`, \`hunt\`, \`chop\`, \`fish\`, \`adventure\`, \`profile | prof\`, \`inventory | inv\`, \`recipes\`;yes]
$footer[RPG jest dalej w becie | Wersja: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==de]
$title[:dagger: RPG]
$description[Get more detailed info [here](https://cnnn666v2.gq/de/commands.html)
All commands starts with **$getServerVar[svpx6]**
**BIG UPDATE 1.4:** Introducing a lot of new commands, items and features!]
$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`mine\`, \`hunt\`, \`chop\`, \`fish\`, \`adventure\`, \`profile | prof\`, \`inventory | inv\`, \`recipes\`;yes]
$footer[RPG is still in beta | Version: $getVar[version]]
$endif
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})