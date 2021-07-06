module.exports = ({
name: "help-eco",
aliases: ['help-economy'],
code: `$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$if[$getGlobalUserVar[lang]==en]
$title[:tophat: Fun]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**]
$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`meme\` (soon fix), \`cm <text>\`, \`ch <text>\`, \`npc text-text\`, \`captcha <text>\`;yes]
$footer[New commands soon! | Version: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==pl]
$title[:tophat: Zabawne]
$description[Dowiedz się więcej [tutaj](https://cnnn666v2.gq/pl/commands.html)
Wszystkie komendy zaczynają się z **$getServerVar[svpx6]**]
$addField[Wyłączone (tymczasowo):;Brak :tada:`;yes]
$addField[Dostępne komendy:;\`meme\` (soon fix), \`cm <text>\`, \`ch <text>\`, \`npc text-text\`, \`captcha <text>\`;yes]
$footer[Nowe komendy wkrótce! | Wersja: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==de]
$title[:tophat: Fun]
$description[Get more detailed info [here](https://cnnn666v2.gq/de/commands.html)
All commands starts with **$getServerVar[svpx6]**]
$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`meme\` (soon fix), \`cm <text>\`, \`ch <text>\`, \`npc text-text\`, \`captcha <text>\`;yes]
$footer[New commands soon! | Version: $getVar[version]]
$endif
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})