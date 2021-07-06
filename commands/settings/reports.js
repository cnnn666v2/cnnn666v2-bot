//Off
module.exports = ({
  name: "rep-disable",
  code: `$color[RANDOM]
$title[Reports]
$description[Successfully turned off reports]
$setServerVar[report;false]
$onlyIf[$getServerVar[report]==true;:x: You already disabled reports!]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can do that!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})

//On
module.exports = ({
  name: "rep-enable",
  code: `$color[RANDOM]
$title[Reports]
$description[Successfully turned on reports!]
$setServerVar[report;true]
$onlyIf[$getServerVar[report]==false;:x: You already enabled reports!]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can do that!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})
