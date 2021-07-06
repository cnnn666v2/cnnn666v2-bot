module.exports = ({
  name: "deposit",
  aliases: [`dep`, `deposit`],
  code: `$color[RANDOM]
$title[TransBank:tm:]

$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]]]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]]]]

$thumbnail[$authorAvatar]
$description[$username successfully deposited $numberSeparator[$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]];,] :pound: into the bank!]
$footer[Safety best | Version: $getVar[version]]

$onlyIf[$checkContains[$message;Infinity]==false;:x: This is not a number]
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==all];true;$getGlobalUserVar[Money]];false;$message[1]]]==true;:x: This is not a number!]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})