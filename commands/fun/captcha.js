//CAPTCHA
module.exports = ({
  name: "captcha",
  code: `By: $username
$image[https://api.cool-img-api.ml/captcha?text=$message]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})