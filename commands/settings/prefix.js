module.exports = ({
  name: "prefix", 
  code: `$argsCheck[>1;:x: | Provide the new prefix!]
  $setServerVar[svpx6;$message[1]]
  $color[$random[0000;999999]]
  $title[Server Prefix]
  $description[Successfully set prefix to \`$message\`]
  $onlyIf[$message!=;You need to select a prefix]
  $footer[Version: $getVar[version] | Made by: Cnnn666#5460]
  $onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can change my prefix!]

$if[$getServerVar[premium]==0]
$onlyIf[$charCount[$message]<4;:x: Prefix can be only 4 characters long!
$randomText[ ; ; ; ; ;**TIP:** You can buy premium using \`$getServerVar[svpx6]premium\` to have a 6 character long prefix!]]
$else
$onlyIf[$charCount[$message]<6;:x: Prefix can be only 6 characters long!]
$endif

$onlyIf[$isMentioned[$mentioned[1]]==false;:x: Prefix can't be set to mention!]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})