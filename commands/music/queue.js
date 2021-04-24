module.exports = ({
  name: "queue",
    aliases: ["q"],
  code: `
$thumbnail[$songInfo[thumbnail]]
$title[Queue]
$description[$queue[1;10;{number} ● {title} ● {url} ● Added by <@{userID}>]] 
$footer[Check all music commands! | Version: $getVar[version]]
$color[RANDOM]
$onlyIf[$message[1]==;] `
})