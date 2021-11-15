module.exports = ({
name: "recipes",
aliases: [`recipe`, `crafting`],
code: `$color[RANDOM] 
$title[:hammer_pick: | Recipes]
$description[For buildings, use \`$getServerVar[svpx6]blueprints\`, for upgrading, use \`$getServerVar[svpx6]upgrades\` and for cooking/melting, use \`$getServerVar[svpx6]furnace\`]
$addField[Recipes - Common -> Ultra:;*Common:*
***Wooden wall*** - \`$getServerVar[svpx6]craft-w-wall\`
Req: 5 :wood:
***Wooden roof*** - \`$getServerVar[svpx6]craft-w-roof\`
Req: 5 :wood:
***20 Sticks*** - \`$getServerVar[svpx6]craft-stick\`
Req: 1 :wood:
***Wooden door*** - \`$getServerVar[svpx6]craft-w-door\`
Req: 2 :wood:
***Wooden sword*** - \`$getServerVar[svpx6]craft-w-sword\`
Req: 5 sticks, 1 :wood: \[ATTACK: 3\\]
***Stone wall*** - \`$getServerVar[svpx6]craft-s-wall\`
Req: 5 :rock:
***Stone roof*** - \`$getServerVar[svpx6]craft-s-roof\`
Req: 5 :rock:
***Glass*** - \`$getServerVar[svpx6]craft-glass\`
Req: 10 Sand
]
$footer[Crafting - because why not? | Page: 1/$getVar[craft_pt] | Version: $getVar[version]]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})