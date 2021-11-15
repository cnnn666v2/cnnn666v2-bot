module.exports = ({
  name: "chop",
  code: `$color[RANDOM]
$title[Chop :wood:]
$description[$username cut some tress and got $math[$getGlobalUserVar[axe]*$random[5;10]] :wood:]
$footer[Trees&wood | Version: $getVar[version]]
$setGlobalUserVar[wood_log;$math[$getGlobalUserVar[wood_log]+$getGlobalUserVar[axe]*$random[5;10]]]
$globalCooldown[1s;:x: You cut tress lately. Take a break for %time% more]

$onlyIf[$getGlobalUserVar[axe]>=1;:x: You need axe to cut trees!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]

$onlyForIDs[596296441505513483;:x: Command is in testing phase and will be soon avaible for everyone!] `
})