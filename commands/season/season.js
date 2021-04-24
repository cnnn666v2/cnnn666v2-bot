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
$onlyIf[$message[1]==;] `
})
