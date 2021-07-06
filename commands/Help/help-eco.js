module.exports = ({
name: "help-eco",
aliases: ['help-economy'],
code: `$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$if[$getGlobalUserVar[lang]==en]
$title[:pound: Economy]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**]
$addField[Disabled (temporarily):;\`search\`;yes]
$addField[Avaible commands:;\`work\`, \`dep | deposit <amount>\`, \`with | withdraw <amount>\`, \`rob @user\`, \`bal | balance\`, \`crime\`, \`n-mine\`, \`hourly\`, \`daily\`, \`weekly\`, \`monthly\`;yes]
$footer[Main currency is 💷 | Version: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==pl]
$title[:pound: Ekonomia]
$description[Dowiedz się więcej [tutaj](https://cnnn666v2.gq/pl/commands.html)
Wszystkie komendy zaczynają się z **$getServerVar[svpx6]**]
$addField[Wyłączone (tymczasowo):;\`search\`;yes]
$addField[Dostępne komendy:;\`work\`, \`dep | deposit <amount>\`, \`with | withdraw <amount>\`, \`rob @user\`, \`bal | balance\`, \`crime\`, \`n-mine\`, \`hourly\`, \`daily\`, \`weekly\`, \`monthly\`;yes]
$footer[Główną walutą jest 💷 | Wersja: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==de]
$title[:pound: Economy]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**]
$addField[Disabled (temporarily):;\`search\`;yes]
$addField[Avaible commands:;\`work\`, \`dep | deposit <amount>\`, \`with | withdraw <amount>\`, \`rob @user\`, \`bal | balance\`, \`crime\`, \`n-mine\`, \`hourly\`, \`daily\`, \`weekly\`, \`monthly\`;yes]
$footer[Main currency is 💷 | Version: $getVar[version]]
$endif
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})