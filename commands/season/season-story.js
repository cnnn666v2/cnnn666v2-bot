module.exports = ({
  name: "ses-story",
  code: `$color[RANDOM]
$title[Story]
$description["What's happening?
I don't know sir! It just exploded!
Well then, we have to prepare for the worst..."

*Few months earlier*
"Is everything stable?
Yes sir, we've been working so hard on it.
Great, don't allow anyone to enter here without the card
Sure!"

*Meanwhile*
"Are we ready?
Not yet, we'll need to wait a few months before we do it. We have to prepare for worst.
Roger that!"]
$footer[Season? :O $getServerVar[svpx6]season | Version: $getVar[version]]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})