module.exports = ({
  name: "block",
  code: `$deletecommand
$setGlobalUserVar[blocked;1;$mentioned[1]]

$color[RANDOM]
$title[Bot Ban - $username[$mentioned[1]]]
$description[User <@$mentioned[1]> has been banned from using bot for: $messageSlice[1]]
$footer[If you ever see anyone exploiting the bot, report it in the support server | version: $getVar[version]]

$onlyIf[$message!=;:x: You need to enter ID of the person you want to ban!]
$onlyForIDs[596296441505513483;:x: This is developer only command!]`
}), //DM's blocked user
({
  name: "block",
  code: `$deletecommand

$color[RANDOM]
$title[You have been banned from using this bot]
$description[Cnnn666#5460 has banned you for: $messageSlice[1]
If you believe that's a mistake, please contact me or any of avaible mods in the [**support server**](https://discord.gg/mt4hDxQpPg)]
$footer[If you ever see anyone exploiting the bot, report it in the support server | version: $getVar[version]]

$dm[$mentioned[1]]
$suppressErrors
$onlyForIDs[596296441505513483;]`
})