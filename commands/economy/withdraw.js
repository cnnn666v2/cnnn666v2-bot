module.exports = ({
  name: "withdraw",
  aliases: [`with`, `withdraw`],
  code: `$color[RANDOM]
$title[TransBank:tm:]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[bank]];false;$message[1]]]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[bank]];false;$message[1]]]]
$thumbnail[$authorAvatar]
$description[$username successfully withdrawn $numberSeparator[$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[bank]];false;$message[1]];,] :pound: from the bank!]
$footer[Buying first | Version: $getVar[version]]

$onlyIf[$checkContains[$message;Infinity]==false;:x: This is not a number]
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[bank]];false;$message[1]]]==true;:x: This is not a number!]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})
