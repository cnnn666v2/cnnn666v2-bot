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
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]]]==true;:x: This is not the number!]`
})
