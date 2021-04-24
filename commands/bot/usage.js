module.exports = ({
  name: "usage",
  aliases: [`usg`],
  code: `$color[$random[0000;999999]]
$title[Bot's usage]
$description[**Miscellaneous:**
\`\`\`py
Ping: $pingms
Uptime: $uptime
Disk: ~310Mb/4.5Gb
RAM: $rammb/2Gb
\`\`\`
**CPU:**
\`\`\`py
CPU Usage: $cpu%/130%
CPU Model: $djsEval[require ('os').cpus()\[0\\].model;yes] 
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
$onlyIf[$message[1]==;]`
})