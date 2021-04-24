module.exports = ({
  name: "settings",
  code: `$color[RANDOM]
$title[:gear: | Settings]
$description[Something not working? Join support server!
Auto-moderator (SOON) - \`$getServerVar[svpx6]automod\`]
$addField[Server • Level \`$getServerVar[svpx6]\`lvl-<enable/disable>;Disables or enables levelling system (soon);yes]
$addField[Server • Setup \`$getServerVar[svpx6]setup\`;One time command. Adds roles \`DJ\` and \`Muted\` to the server. However, you have to move them manually. Only admins;yes]
$addField[Server • Reports \`$getServerVar[svpx6]rep-<enable/disable>\`;Enables or disables reports on this server. Only admins;yes]
$addField[Server • Suggestions \`$getServerVar[svpx6]sug-<enable/disable>\`;Enables or disables suggestions on this server. Only admins;yes]
$addField[Server • Prefix \`$getServerVar[svpx6]prefix <new prefix>\`;Changes \`$getServerVar[svpx6]\` to the provided one. Only admins;yes]
$addField[Global • Language \`$getServerVar[svpx6]lang-<pl/en/de>\`;Sets bot's language to the provided one. For example, \`$getServerVar[svpx6]lang-pl\` sets language to polish. It's affecting only user and not server;yes]
$onlyIf[$message[1]==;] `
})