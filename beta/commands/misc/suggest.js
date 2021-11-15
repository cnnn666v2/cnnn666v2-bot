module.exports = ({
  name: "suggest",
  code: `$color[RANDOM]
$title[:bulb: | New suggestion!]
$description[**Suggestion:**
$message]
$footer[Remember that you ($username) may get banned (from server) for bad suggestions (not following the server rules) | Suggested by: $username#$discriminator | Version: $getVar[version]]
$argsCheck[>1;:x: You need to say something!]
$addReactions[$customEmoji[yesCnnn666v2];$customEmoji[noCnnn666v2]]
$onlyIf[$getServerVar[suggest]==true;:x: Suggestions are disabled there! Enable them using \`$getServerVar[svpx6]sug-enable\`]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})