module.exports = ({
  name: "meme",
  code: `$color[RANDOM]
$title[A meme]
$image[https://api.cool-img-api.ml/meme]
$footer[Command ran by: $username]
$onlyIf[$message[1]==;] `
})