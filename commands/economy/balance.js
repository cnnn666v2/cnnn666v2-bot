module.exports = ({
  name: "balance",
  aliases: [`bal`, `balance`],
  code: `$color[$random[0000;999999]]
  $thumbnail[$authorAvatar]
  $title[Logged in as: $username]
  $description[Welcome back $username to TransBank:tm:
You have:]
  $addField[Diamonds \`(VIP ONLY)\`:;$numberSeparator[$getGlobalUserVar[gem];,] :gem:]


  $addField[nCoins:;$numberSeparator[$getGlobalUserVar[ncoin];,] :coin:]
  $addField[Pounds in bank:;$numberSeparator[$getGlobalUserVar[bank];,] :pound:]
  $addField[Pounds in pocket:;$numberSeparator[$getGlobalUserVar[Money];,] :pound:]

  $footer[Version: $getVar[version] | Low on money? Try $getServerVar[svpx6]help eco]
$onlyIf[$message[1]==;]`
})