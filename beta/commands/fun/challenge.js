module.exports = ({
  name: "cm",
  aliases: [`change-mind`, `changemind`, `changemymind`, `change-my-mind`],
  code: `$title[Change $username's mind]
$description[By: $username]

$image[https://vacefron.nl/api/changemymind?text=$replaceText[$message; ;+]]
$color[RANDOM]
$addReactions[👍;👎]
$argsCheck[>1;You have to type something!]
$deletecommand

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})