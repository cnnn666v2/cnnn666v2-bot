module.exports = ({
  name: "purge",
  code: `$if[$isNumber[$message]==true]
$if[$message>100]
:x: You can clear up to 100 messages at once!
$else
$clear[$message]
$deletecommand
:ballot_box_with_check: Successfully deleted $message messages!
$deleteIn[5s]
$endif
$else
:x: You can't delete letters! Have you gone mad?
$endif
$onlyPerms[managemessages;:x: You need \`manage_messages\` permission]

$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})