module.exports = ({
  name: "help-test2",
  code: `$color[RANDOM]
$if[$getGlobalUserVar[lang]==en]
$title[Cnnn666v2 Help Centre]
$description[There are over **16** categories with over **$commandsCount** commands
Categories coming soon: **City, Reputation, Ticket System**
Keep in mind: every commands starts with **$getServerVar[svpx6]**

⏴--- :mag_right: Search+ :mag: ---⏵
*(2)* \`search-yt <text>\`, \`search-google\`

⏴--- :flag_white: Support :flag_white: ---⏵
*(4)* \`bot\`, \`usage | usg\`, \`support | sup\`, \`news\`

⏴--- :golf: Other :golf: ---⏵
*(7)* \`anc <text>\`, \`poll <text>\`, \`suggest <text>\`, \`report <text>\`, \`weather <city>\`, \`offers\`, \`dev-report <report>\`

⏴--- :gear: Settings :gear: ---⏵
*(?)* For this one, chekout \`settings\`

⏴--- :information_source: Informative :information_source: ---⏵
*(2)* \`uinfo @user (optional)\`, \`sinfo\`

⏴--- :newspaper: Season :newspaper: ---⏵
*(?)* Checkout \`season | ses\` for all seasonal commands 

**:mega: • Announcement ($getVar[anc_title])**
$getVar[anc_desc]]
$footer[Working 24/7, gives all commands instantly | This is last page! | Page 2/2 | Version: $getVar[version]]
$endif `
})