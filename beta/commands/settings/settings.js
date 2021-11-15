module.exports = ({
  name: "settings",
  code: `$color[RANDOM]
$title[:gear: | Settings]
$description[Something isn't not working? Join support server!
Auto-moderator (SOON) - \`$getServerVar[svpx6]automod\`

**Server Settings:**
Level • \`$getServerVar[svpx6]lvl-<enable/disable>\` • Disables or enables levelling system (soon)
Setup • \`$getServerVar[svpx6]setup\` • One time command. Adds roles \`DJ\` and \`Muted\` to the server. However, you have to move them manually. Only admins | **__DISABLED__**
Reports • \`$getServerVar[svpx6]rep-<enable/disable>\` • Enables or disables reports on this server. Only admins
Suggestions • \`$getServerVar[svpx6]sug-<enable/disable>\` • Enables or disables suggestions on this server. Only admins
Prefix • \`$getServerVar[svpx6]prefix <new prefix>\` • Changes \`$getServerVar[svpx6]\` to the provided one. Only admins

**Global Settings:**
Language • \`$getServerVar[svpx6]lang-<pl/en/de>\` • Sets bot's language to the provided one. For example, \`$getServerVar[svpx6]lang-pl\` sets language to polish. It's affecting only user and not server | **__ABANDONED__**]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake] `
})