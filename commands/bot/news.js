module.exports = ({
  name: "news",
  code: `$title[Bot news:]
$description[**Update 1.3.2:**
- re-writed bot from BDScript to DBD.js
- commands are looking a bit different and has better names (good for user execution)
- custom prefix
- added new currency (vip only): diamonds
**NOTE: COMMANDS AREN'T TRANSLATED AND WILL BE IN idk what version**

**Update 1.3.2.1:**
- added fun commands
- fixed few bugs
- added translation commands

**Update 1.3.2.2 - 19.03.2020:**
- fixed music commands
- disabled \`$getServerVar[svpx6]hunt\`, \`$getServerVar[svpx6]fish\`, \`$getServerVar[svpx6]n-mine\` temporarily due to bugs
- some music commands look better
- fixed \`loop\` command - when 2nd time executed it was giving \`something went wrong\` error

**Update 1.3.2.3 - 25.05.2020:**
- fixed ability to deposit or withdraw infinity money]
$footer[Command ran by: $username#$discriminator[$authorID] | Version: $getVar[version] | Update: $getVar[updateName]]
$addTimestamp
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})