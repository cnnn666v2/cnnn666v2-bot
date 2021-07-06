module.exports = ({
name: "radio",
code: `$color[RANDOM]
$title[Music Radio™ - BETA]
$description[Welcome to Music Radio™
This feature is in beta and bugs may occur. There's list of all avaible radios right now:
- SpookFM \`$getServerVar[svpx6]radio-spookfm\`
-- Contains "spooky" songs. Common there is "Spooky scary skeleton"

- RapFM \`$getServerVar[svpx6]radio-rapfm\`
-- Contains most popular rap

- MoreFM \`$getServerVar[svpx6]soon\`
-- More radios cooming soon!
note: this is not ready yet, this will be added later.]
$footer[You can always play favourite music using "$getServerVar[svpx6]play your song" | Version: $getVar[version]]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})