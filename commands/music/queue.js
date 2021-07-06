module.exports = ({
  name: "queue",
    aliases: ["q"],
  code: `
$thumbnail[$songInfo[thumbnail]]
$title[Queue]
$description[$queue[1;10;{number} ● {title} ● {url} ● Added by <@{userID}>]] 
$footer[Check all music commands! | Version: $getVar[version]]
$color[RANDOM]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake] `
})