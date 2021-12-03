module.exports = ({
    name: "beg",
    code: `$color[1;$getGlobalUserVar[welcome_color]]
$title[1;Street Begging]
$description[1;You were begging on streets for $random[1;6]h and got $random[25;500] :pound:
New balance: $getGlobalUserVar[Money]]
$footer[1;Bad but good way to earn money | Version: $getVar[version]]

$setGlobalUserVar[Money;$math[$getGlobalUserVar[Money]+$random[25;500]]]

$globalCooldown[2h;You can beg every 2h. Wait %hour% %minute% to beg again]
$onlyIf[$getGlobalUserVar[RLevel]>=3;:x: You need to have at least level 3 in RPG!] `
})