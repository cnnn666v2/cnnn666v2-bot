module.exports = ({
  name: "usage",
  aliases: [`usg`],
  code: `$color[$random[0000;999999]]
$title[Bot's usage]
$description[**Miscellaneous:**
\`\`\`py
Ping: $pingms
Uptime: $uptime
Disk: ~200Mb/11Gb
RAM: $rammb/7Gb
\`\`\`
**CPU:**
\`\`\`py
CPU Usage: $cpu%/200%
CPU Model: Intel(R) Xeon(R) CPU E5-2650 v2 @ 2.60GHz 
CPU Platform: $djsEval[require ('os').platform();yes]
\`\`\`
**Hosting provider:**
\`\`\`py
Name: Sweplox
Discord: https://discord.gg/beRhE87qp2
Website: https://sweplox.se/?language=english&currency=
\`\`\`
]
$footer[Version: $getVar[version] | Wanna support bot? Donate me $getServerVar[svpx6]support]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})