module.exports = ({
  name: "usage",
  aliases: [`usg`],
  code: `$color[RANDOM]
$title[Bot's usage]
$addField[*Back-end stuff:*;**__Websocket Ping:__** $pingms
**__Bot Ping:__** $botPingms
**__Uptime:__** $uptime;yes]

$addField[*RAM | Disk*;**__RAM Usage:__** $rammb/16GB
**__Disk Usage:__** 16mb/78GB;yes]

$addField[*CPU*;**__CPU Usage:__** $cpu%/100%
**__CPU Model:__** $djsEval[require ('os').cpus()[0].model;yes]
**__CPU Platform:__** $djsEval[require ('os').platform();yes];yes]

$footer[Version: $getVar[version] | Wanna support bot? Donate me $getServerVar[svpx6]support]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})