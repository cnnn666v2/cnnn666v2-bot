module.exports = ({
  name: "bot",
  code: `$color[$random[0000;999999]]
  $title[Bot's info]
  $description[**Server Count:** $serverCount
**Member Count:** $allMembersCount
**Shards:** soon
**Version:** $getVar[version]
**Update:** $getVar[updateName]
**Commands:** $commandsCount]
  $footer[Version: $getVar[version] | Wanna support bot? Donate me $getServerVar[svpx6]support]
$onlyIf[$message[1]==;]`
})