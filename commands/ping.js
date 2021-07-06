module.exports = ({
name: "ping",
code: `$color[RANDOM]
$title[:ping_pong: Pong]
$thumbnail[$userAvatar[794583111647494174]]
$addField[Websocket;*$pingms*;yes]
$addField[Database;*$dbPingms*;yes]
$addField[Bot Ping;*$botPingms*;yes]
$footer[Cnnn666v2 - Version: $getVar[version];$userAvatar[794583111647494174]]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})