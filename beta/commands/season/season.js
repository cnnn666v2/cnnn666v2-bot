module.exports = ({
  name: "seasons",
  aliases: [`seasons`, `season`, `ses`],
  code: `$color[RANDOM]
$title[Seasons]
$description[**Active:**
Season 1 | Apocalypse
**Story:**
"What's happening?
I don't know sir! It just exploded!
Well then... (continue reading: \`ses-story\`)

Starting in 1.4

**Command list:** (soon)
(All commands below starts with \`$getServerVar[svpx6]ses-<command>\`)
\`drop\`, \`shop\`, \`mine\`, \`wish\`, \`daily\`]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake] `
})
