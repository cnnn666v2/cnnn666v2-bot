module.exports = ({
  name: "report",
  code: `$color[RANDOM]
$title[:warning: | New report!]
$description[**Report:**
$message]
$footer[Remember that you ($username) may get banned (from server) for bad reports (not following the server rules) | Reported by: $username#$discriminator | Version: $getVar[version]]
$addReactions[green_circle;orange_circle;red_circle]
$argsCheck[>1;:x: You need to say something!]
$onlyIf[$getServerVar[report]==true;:x: Reports are disabled there! Enable them using \`$getServerVar[svpx6]rep-enable\`] `
})