module.exports = ({
    name: "bio-set",
    code: `$if[$getGlobalUserVar[vip]==0]
$if[$charCount[$message]>300]
:x: Your bio can be 300 character long! Upgrade to **VIP** to change it to 500 and upgrade to **PRO** to change it to 750 *[Soon:tm:]*
$else
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[:receipt: Bio Set - Success!]
$description[Your bio has been successfully changed to:
$message

Character count: $charCount[$message]/300]

$setGlobalUserVar[welcome_bio;$message]
$globalCooldown[12h;:x: You can change bio every 12h! Wait %time% to change it again.
$randomText[ ; ; ; ;TIP: buy **PRO** to lower cooldown to 2h.]]
$endif

	$elseif[$getGlobalUserVar[vip]==1]
		$if[$charCount[$message]>500]
:x: Your bio can be 500 character long! Upgrade to **PRO** to change it to 750 *[Soon:tm:]*
			$else
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[:receipt: Bio Set - Success!]
$description[Your bio has been successfully changed to:
$message

Character count: $charCount[$message]/500]

$setGlobalUserVar[welcome_bio;$message]
$globalCooldown[6h;:x: You can change bio every 6h! Wait %time% to change it again.
$randomText[ ; ; ; ;TIP: buy **PRO** to lower cooldown to 2h.]]
		$endif

	$if[$getGlobalUserVar[pro]==1]
		$if[$charCount[$message]>750]
:x: Your bio can be 750 character long
			$else
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[:receipt: Bio Set - Success!]
$description[Your bio has been successfully changed to:
$message

Character count: $charCount[$message]/750]

$setGlobalUserVar[welcome_bio;$message]
$globalCooldown[2h;:x: You can change bio every 2h! Wait %time% to change it again.]
		$endif
	$endif
$endelseif

$footer[Remember to read rules for bio at https://cnnn666v2.gq/welcome/rules.html | Version: $getVar[version]]
$endif

$onlyIf[$message!=;:x: You need to type something!]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake] `
})