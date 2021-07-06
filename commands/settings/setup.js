module.exports = ({
  name: "setup",
  code:`$awaitReaction[$authorID;1m;You're about to run setup, are you sure? It will make DJ and Muted role for you. It will also create other things. Check \`$getServerVar[svpx6]help-setup\` for detailed info;$customEmoji[yesCnnn666v2],$customEmoji[noCnnn666v2];setup-confirmed,setup-declined;Command timed out!]
  $addReactions[<a:yes:796678250264789032>;<a:no:796678226231558184>]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can setup the bot!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})