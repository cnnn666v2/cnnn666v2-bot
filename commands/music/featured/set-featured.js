module.exports = ({
    name: "set-featured song",
    code: `$color[1;$getGlobalUserVar[welcome_color]]
$title[1;Changed featured song]
$description[1;All properties have been changed to new recommendations.]

$setVar[songRec_title;$splitText[1]]
$setVar[songRec_length;$splitText[2]]
$setVar[songRec_choice;$username#$discriminator]

$textSplit[$message;|]

$onlyIf[$getGlobalUserVar[TMember_lvl]>=1;:x: You need to have at least level 1 of permissions!]
$onlyIf[$getGlobalUserVar[TMember_is]==true;:x: Only bot's staff can change this!]`,
})