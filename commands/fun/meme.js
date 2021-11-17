module.exports = ({
  name: "meme",
  code: `$color[RANDOM]
$title[Temporarily disabled commands due to bugs]
$image[404]
$footer[Command ran by: $username]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake] `
})