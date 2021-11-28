module.exports = ({
    name: "set",
    code: `$setUserVar[$message[1];$message[2];$mentioned[1]]
Done!
$onlyIf[$getGlobalUserVar[TMember_lvl]>=2;:x: You need to have at least level 2 of permissions!]
$onlyIf[$getGlobalUserVar[TMember_is]==true;:x: Only bot's staff can change this!]`
})