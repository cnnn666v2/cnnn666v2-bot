module.exports = ({
	name: "pro",
    code: `$color[RANDOM]
$title[$customEmoji[pro;795676694161784922] | Pro - Info ***[Coming Soon]***]
$description[What **PRO** gives **you**:
⦁ Access to alpha features - test them before they're released to beta!
⦁ Special commands - get access to **pro** only commands
⦁ Extended character limit - bored of the regular limits? With **pro** they're extended!
⦁ Unique badge - that can't be earned in any other way :)
⦁ Stays  forever - enjoy it for your whole life!
⦁ And more to come - soon

**Price:**
Discord nitro/classic - 1x
Steam giftcard - 1x
2,500,000 :pound: - \`c2?pro-buy\`

**Questions?**
Feel free to dm me (Cnnn666#5460)!]

$onlyIf[$message==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})