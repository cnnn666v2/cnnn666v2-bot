module.exports = ({
	name: "help-misc",
	code: `$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[:golf: Miscellaneous]
$description[Get more detailed info [here](https://cnnn666v2.gq/commands.html)
All commands starts with **$getServerVar[svpx6]**]

$addField[Disabled (temporarily):;None :tada:;yes]
$addField[Avaible commands:;\`announcement <message> | anc <message>\`, \`offers\`, \`poll <message>\` - yes/no type, \`report <message>\`, \`suggest <message>\`, \`weather <city>\`;yes]
$footer[More commands soon! | Version: $getVar[version]]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})