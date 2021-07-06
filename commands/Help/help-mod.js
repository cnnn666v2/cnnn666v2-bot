module.exports = ({
name: "help-mod",
aliases: ['help-moderation'],
code: `$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$if[$getGlobalUserVar[lang]==en]
$title[:shield: Moderation]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**]
$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`kick @user <reason (optional)>\`, \`ban @user <reason (optional)>\`, \`mute @user <reason>\`, \`purge <1 - 100>\`;yes]
$footer[More commands soon | Version: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==pl]
$title[:pound: Ekonomia]
$description[Dowiedz się więcej [tutaj](https://cnnn666v2.gq/pl/commands.html)
Wszystkie komendy zaczynają się z **$getServerVar[svpx6]**]
$addField[Wyłączone (tymczasowo):;Brak :tada:;yes]
$addField[Avaible commands:;\`kick @user <powód (opcjonalne)>\`, \`ban @user <powód (opcjonalne)>\`, \`mute @user <powód>\`, \`purge <1 - 100>\`;yes]
$footer[Więcej komend wkrótce | Wersja: $getVar[version]]
$endif

$if[$getGlobalUserVar[lang]==de]
$title[:pound: Economy]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**]
$addField[Disabled (temporarily):;none :tada:;yes]
$addField[Avaible commands:;\`kick @user <reason (optional)>\`, \`ban @user <reason (optional)>\`, \`mute @user <reason>\`, \`purge <1 - 100>\`;yes]
$footer[More commands soon | Version: $getVar[version]]
$endif
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})