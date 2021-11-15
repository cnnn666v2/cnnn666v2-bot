module.exports = ({
	name: "welMsg-set",
    code: `$if[$charCount[$message]>100]
:x: Welcome message can be 100 characters long! Upgrade to **PREMIUM** to change it to 350 *[Soon:tm:]*
$else
$color[RANDOM]
$title[:speech_balloon: Welcome Message - Success!]
$description[Successfully changed welcome message to:
$getServerVar[welcome_modMsg]]
$footer[Remember to follow the rules https://cnnn666v2.gq/welcome/rules.html]

$setServerVar[welcome_modMsg;$message]
$globalCooldown[12h;:x: You can change wleocme message every 2h! Wait %time% to change it again.]
$endif

$onlyIf[$message!=;:x: You need to type something!]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: You need \`administrator\` permission to change this!]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})