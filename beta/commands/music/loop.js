module.exports = ({
	name: "loop",
    code: `$color[RANDOM]
$thumbnail[$songInfo[thumbnail]]
$title[Looping Queue $loopQueue]
$description[$if[$loopQueue==true]
$customEmoji[yesCnnn666v2;795676694161784922] Started looping current queue.

$elseif[$loopQueue==false]
$customEmoji[noCnnn666v2;795676694161784922] Stopped looping current queue.
$endelseif
$endif
]

$footer[Music is in beta | Version: $getVar[version]]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})