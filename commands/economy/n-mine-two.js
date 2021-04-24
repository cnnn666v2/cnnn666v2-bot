module.exports = ({
  name: "n-mine",
  code: `$color[RANDOM]
$title[Mining...]
$description[Starting mining nCoins :coin:]
$footer[nMiner v1 | Version: $getVar[version]]
$globalCooldown[40m;You can mine nCoins every 40 minutes. Wait %time% to mine them again]
`
})