module.exports = ({
  name: "play",
    aliases: ["p"],
  code: `$color[$random[0000;999999]]
  $title[$songInfo[title];$songInfo[url]]
  $description[Added \`$playSong[$message;1m;yes;yes;:x: You're not in the voice channel!]\` to the queue]
  $footer[Queue -> $getServerVar[svpx6]queue | Version: $getVar[version]]`
})