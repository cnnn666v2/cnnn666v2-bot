module.exports = ({
  name: "build-th",
  code: `$color[RANDOM]
$title[Building completed!]
$description[$username built townhall and started a new city!]
$footer[Want to see benefits? $getServerVar[svpx6]city | Version: $getVar[version]]
$setGlobalUserVar[th;1]
$setGlobalUserVar[townhall;1]

$setGlobalUserVar[wood_log;$sub[$getGlobalUserVar[wood_log];50]]
$setGlobalUserVar[wood_wall;$sub[$getGlobalUserVar[wood_wall];10]]
$setGlobalUserVar[wood_roof;$sub[$getGlobalUserVar[wood_roof];5]]

$onlyIf[$getGlobalUserVar[th]==0;:x: You already made a city!]
$onlyIf[$getGlobalUserVar[wood_roof]>=5;:x: You don't have enough wood roofs!]
$onlyIf[$getGlobalUserVar[wood_wall]>=10;:x: You don't have enough wood walls!]
$onlyIf[$getGlobalUserVar[wood_log]>=50;:x: You don't have enough wood logs!] 

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})