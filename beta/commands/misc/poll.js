module.exports = ({
  name: "poll",
  code: `$color[RANDOM]
$title[:bar_chart: | New poll!]
$description[$message]
$footer[Powered by Cnnn666v2 | Poll by: $username#$discriminator | Version: $getVar[version]]
$argsCheck[>1;:x: You need to say something!]
$addReactions[$customEmoji[yesCnnn666v2];$customEmoji[noCnnn666v2]]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can do the poll!]
$deletecommand

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})