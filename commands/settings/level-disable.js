module.exports = ({
  name: "level-disable",
  code: `$setServerVar[levelSYS;1]
Disabled level!
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})