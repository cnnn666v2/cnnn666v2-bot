module.exports = ({
	name: "help-level",
    aliases: [`help-lvl`],
    code: `$if[$getGlobalUserVar[lang]==en]
$color[RANDOM]
$title[:bar_chart: Levelling]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**]
$addField[Disabled (temporarily);None :tada:;yes]
$addField[Avaible commands;\`rank\`, \`lvlup\` (rpg);yes]
$endif

$onlyIf[$message==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})