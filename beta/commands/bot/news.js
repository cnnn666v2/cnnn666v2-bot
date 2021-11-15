module.exports = ({
  name: "news",
  code: `$title[Bot news:]
$description[**Removed all changelogs**]
$footer[Command ran by: $username#$discriminator[$authorID] | Version: $getVar[version] | Update: $getVar[updateName]]
$addTimestamp
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})