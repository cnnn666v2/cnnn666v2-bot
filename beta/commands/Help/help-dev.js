module.exports = ({
    name: "help-dev",
    aliases: ["info-dev"],
    code: `$color[RANDOM]
    $title[❓ | Help Menu]
    $description[[Support Server](https://discord.gg/mt4hDxQpPg)
Remember: only developer can use these (except tha last one ofc)]
  $addField[Developer Report (everyone can use) • \`$getServerVar[svpx6]dev-report <report>\`;Sends report to me. It can be bug, bot abuse, bot cheating, etc.;yes]
  $addField[Reboot • \`$getServerVar[svpx6]reboot <report>\`;Restarts bots. If the bot isn't responding for some time, you know why :wink:;yes]
  $addField[Set Global User Var • \`$getServerVar[svpx6]set-global <var name> <new value> <user>\`;Sets new global value for mentioned user;yes]
  $addField[Set User Var (server) • \`$getServerVar[svpx6]set <var name> <new value> <user>\`;Sets new value for mentioned user;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Version: $getUserVar[version]]
  $onlyIf[$message[1]==;]`
})