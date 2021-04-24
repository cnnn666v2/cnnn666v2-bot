module.exports = ({
  name: "help-test1",
  code: `$color[RANDOM]
$if[$getGlobalUserVar[lang]==en]
$title[Cnnn666v2 Help Centre]
$description[There are over **16** categories with over **$commandsCount** commands
Categories coming soon: **City, Reputation, Ticket System**
Keep in mind: every commands starts with **$getServerVar[svpx6]**

⏴--- :pound: Economy :pound: ---⏵
*(13)* \`work\`, \`bal | balance\`, \`crime\`, \`dep | deposit <amount>\`, \`with | withdraw <amount>\`, \`hourly\`, \`daily\`, \`weekly\`, \`monthly\`; **temporarily disabled:** \`n-mine\`, \`rob @user\`, \`search\`

⏴--- :shield: Moderation :shield: ---⏵
*(4)* \`ban @user <reason>\`, \`kick @user <reason>\`, \`purge <amount (1-100)>\`, \`mute @user <reason>\`

⏴--- :chart_with_upwards_trend: Level :chart_with_upwards_trend: ---⏵
*(2)* Server: \`rank\`; RPG: \`lvlup\`; Games: **soon**

⏴--- :musical_note: Music :musical_note: ---⏵ **BETA**
*(6)* \`play <url | song name>\`, \`queue\`, \`skip\`, \`loop\`, \`stop\`, \`vol | volume <amount (recommended 1 - 200)\`

⏴--- <:vip:796497627822686270> VIP <:vip:796497627822686270> ---⏵
*(2)* \`vip-work\`, \`vip-hourly\`; **Soon:** \`vip-hunt\`, \`vip-shop\`, \`vip-shop-badge\`, \`vip-buy-item/badge\`

⏴--- :military_medal: Badges :military_medal: ---⏵
*(1)* \`badge-info\`

⏴--- :tophat: Fun :tophat: ---⏵
*(6)* \`meme\`, \`cm <text>\`, \`ch <text>\`, \`npc <text-text>\`, \`error <text>\`, \`captcha <text>\`]
$footer[Working 24/7, gives all commands instantly | Next page: c2?help-2 | Page 1/2 | Version: $getVar[version]]
$endif `
})