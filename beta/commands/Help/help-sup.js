module.exports = ({
	name: "help-sup",
    aliases: [`help-support`],
	code: `$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[:flag_white: Bot Related Commands]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**]

$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`donate\`, \`stats\`, \`news\`, \`partners\` $customEmoji[NEW;795676694161784922], \`support\`, \`usage\`;yes]
$footer[Season: $getVar[season] | Version: $getVar[version]]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})