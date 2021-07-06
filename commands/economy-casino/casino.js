module.exports = ({
  name: "help-casino",
  aliases: [`help-casino`, `info-casino`],
  code: `$color[RANDOM]
$title[:game_die: | Casino commands]
$description[[Support Server\\](https://discord.gg/mt4hDxQpPg)
In short - hazard. You know, it is the stuff with slot machines, roulettes, etc. 
Disclaimer: \`$getServerVar[svpx6]casino-disclaimer\`
All casino commands below:]
$addField[Roulette • \`$getServerVar[svpx6]roulette <amount> <green/red/black>\`;This is one of the dangerous games.. well, it's not the russian one but stil...;yes]
$addField[Slot machine • \`$getServerVar[svpx6]slot <amount>\`;Ya like risk? Take it with high amounts! Loser or win!;yes]
$footer[$$$ casino $$$ | Version: $getVar[version]]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})