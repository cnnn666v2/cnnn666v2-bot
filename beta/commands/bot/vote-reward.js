module.exports = ({
	name: "reward",
    code: `$color[RANDOM]
$title[Thank you $username for voting!]
$description[There are your rewards:
+ 10,000 :pound:
+ 10 :coin:
+ 1 :gem:]
$footer[Wanna get these too? Use: $getServerVar[svpx6]reward | Version: $getVar[version]]

$setGlobalUserVar[Money;$math[$getGlobalUserVar[Money]]+10000]
$setGlobalUserVar[ncoin;$math[$getGlobalUserVar[ncoin]]+10]
$setGlobalUserVar[gem;$math[$getGlobalUserVar[gem]]+1]

$onlyIf[$httpResult[voted]==true;You need to vote for the bot to claim this!]
$httpGet[https://normal-api.ml/topgg/hasvoted?bot=$botID&user=$authorID&token=$getVar[authorization]]
$globalCooldown[12h;:x: You already claimed your reward!]

$onlyIf[$message==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})