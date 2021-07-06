module.exports = ({
  name: "cm",
  code: `$title[Change $username's mind]
$description[By: $username
$message
=========
Change my mind]

$argsCheck[>1;You have to type something!]
$image[https://vacefron.nl/api/changemymind?text=$replaceText[$message; ;+;-1]]
$color[$random[0000;9999999]]
$addReactions[👍;👎]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})