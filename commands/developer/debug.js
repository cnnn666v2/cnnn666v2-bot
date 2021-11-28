module.exports = ({
  name: "eval",
  code: `$eval[$message]
$onlyIf[$getGlobalUserVar[TMember_lvl]>=3;:x: You need to have at least level 3 of permissions!]
$onlyIf[$getGlobalUserVar[TMember_is]==true;:x: Only bot's staff can change this!] `
})