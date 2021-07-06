module.exports = ({
  name: "meme",
  code: `$color[RANDOM]
$title[A meme]
$image[https://api.cool-img-api.ml/meme]
$footer[Command ran by: $username]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake] `
})