module.exports = ({
	name: "unblock",
    code: `$deletecommand
$setGlobalUserVar[blocked;0;$mentioned[1]]

$color[RANDOM]
$title[Bot Unban - $username[$mentioned[1]]]
$description[User <@$mentioned[1]> has been unbanned from using bot]
$footer[If you ever see anyone exploiting the bot, report it in the support server | version: $getVar[version]]

$onlyIf[$message!=;:x: You need to enter ID of the person you want to ban!]
$onlyForIDs[596296441505513483;:x: This is developer only command!] `
}), //DM's unblocked user
({
	name: "unblock",
    code: `$deletecommand

$color[RANDOM]
$title[You have been unbanned from using this bot]
$description[I'm very sorry for the mistake I did.
Report anyone exploiting bot to me or any avaible moderator in the **[support server](https://discord.gg/mt4hDxQpPg)**]
$footer[If you ever see anyone exploiting the bot, report it in the support server | version: $getVar[version]]

$dm[$mentioned[1]]]
$suppressErrors
$onlyForIDs[596296441505513483;]`
})