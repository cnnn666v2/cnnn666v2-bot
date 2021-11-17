module.exports = ({
    name: "bot-suggestion",
    code: `$color[RANDOM]
$title[Bot Suggestion]
$description[Suggestion has been sent to the developer successfully!]
$setVar[suggestionID;$math[$getVar[suggestionID]+1]]
$footer[Suggestion ID: $math[1+$getVar[suggestionID]] | Version: $getVar[version]]
$globalCooldown[5m;:x: You can suggest something every 5 minutes! Wait %time% more.]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
}), ({
    name: "bot-suggestion",
    code: `$color[RANDOM]
$title[Bot Suggestion - $serverName]
$description[**User ID:** $authorID
**Username:** $username
**Discriminator:** $discriminator
**Suggestion ID:** $getVar[suggestionID]
**Suggestion:** $message]
$footer[Version: $getVar[version]]
$globalCooldown[5m; ]
$dm[596296441505513483]`
})