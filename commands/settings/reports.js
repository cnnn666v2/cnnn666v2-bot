//Off
module.exports = ({
  name: "rep-disable",
  code: `$color[RANDOM]
$title[Reports]
$description[Successfully turned off reports]
$setServerVar[report;false]
$onlyIf[$getServerVar[report]==true;:x: You already disabled reports!]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can do that!]
$onlyIf[$message[1]==;]`
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
$onlyIf[$message[1]==;]`
})
