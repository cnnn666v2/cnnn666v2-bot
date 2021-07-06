module.exports = ({
  name: "play",
    aliases: ["p"],
  code: `$color[$random[0000;999999]]
  $title[$lavalinkExecute[songinfo;title];$lavalinkExecute[songinfo;url]]
  $description[Added \`$lavalinkExecute[play;ytsearch:$message]\` to the queue]
  $footer[Queue -> $getServerVar[svpx6]queue | Version: $getVar[version]]
$suppressErrors[:x: Something went wrong]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})