module.exports = ({
    name: "dev-report",
    code: `$color[RANDOM]
  $title[New Report - $serverName]
  $description[$message]
  $footer[Reported by: $username | ID: $authorID | Server ID: $guildID]
  $dm[596296441505513483]
  $deletecommand
  $globalCooldown[12h;To avoid spam, there is 12h cooldown. Report again in %time%]`
}), ({
    name: "dev-report",
    code: `$color[RANDOM]
  $title[Reported!]
  $description[Your report has been succesfully reported to the developer]
  $footer[Thank you!]
  $globalCooldown[12h; ]`
  })