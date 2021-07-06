module.exports = ({
  name: "support",
  aliases: [`sup`],
  code: `$color[$random[0000;999999]]
  $title[Support Services]
  $description[Need specific help? Found a bug? Send this to me using \`$getServerVar[svpx6]dev-report\` (12h cooldown)

**Entry point:**
\`$getServerVar[svpx6]help\` or \`$getServerVar[svpx6]info\` - retruns all bot's commands

**Vote for bot (no perks but helps a lot <3)**
[\[Top.gg\\]\\](https://top.gg/bot/794583111647494174) 
[\[Motion Development\\]\\](https://www.motiondevelopment.top/bots/794583111647494174)
[\[Discord Bot List\\]\\](https://discordbotlist.com/bots/cnnn666v2)

**Support bot development**
Good hosting isn't free and I have to pay for it. If you can, donate to me to support bot development!
Due to ability of several ways to donate, chekout the \`$getServerVar[svpx6]donate\`
Wanna something for donating? Checkout \`$getServerVar[svpx6]offers\`

**Support server**
Having issues with bot? Bot not responding? Duplicating money? Join support server [here\\](https://discord.gg/mt4hDxQpPg)

**Creators:**
Cnnn666#5460 - Developer
Vecto#6472 - Tester & Helper
Y A H Y A#5882 - Tester & Helper]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})

// **Bug catchers:**
// (what they found and how they helped bot)
// Vecto#6472 - Several misspells, several bugs in commands, stats resetted - 10/10
// Y A H Y A#5882 - several bugs in commands - 8.5/10
// (to get here, find some bugs and report them to me (Cnnn666#5460))