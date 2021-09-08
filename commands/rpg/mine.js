module.exports = ({
  name: "mine",
  code: `$color[RANDOM]
$thumbnail[$replaceText[$getGlobalUserVar[welcome_thumbnail];default;$userAvatar[$authorID]]]

$title[:pick: • Mining...]
$description[You went to cave and got:

**Resources:**
**Dirt:** $random[$getGlobalUserVar[dirtMin];$getGlobalUserVar[dirtMax]] • __***Total:***__ *$getGlobalUserVar[dirt]* 
**Stone:** $random[$getGlobalUserVar[stoneMin];$getGlobalUserVar[stoneMax]] • __***Total:***__ *$getGlobalUserVar[stone]* $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pickaxe]>=10];true;\n**Iron:** $random[$getGlobalUserVar[ironMin];$getGlobalUserVar[ironMax]] • __***Total:***__ *$getGlobalUserVar[iron]*];false;] $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pickaxe]>=25];true;\n**Gold:** $random[$getGlobalUserVar[goldMin];$getGlobalUserVar[goldMax]] • __***Total:***__ *$getGlobalUserVar[gold]*];false;] $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pickaxe]>=50];true;\n**Rubies:** $random[$getGlobalUserVar[rubyMin];$getGlobalUserVar[rubyMax]] • __***Total:***__ *$getGlobalUserVar[ruby]*];false;] $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pickaxe]>=80];true;\n**Gems:** $random[$getGlobalUserVar[gemMin];$getGlobalUserVar[gemMax]] • __***Total:***__ *$getGlobalUserVar[gem]*];false;]

**Experience:**

//test]

$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[pickaxe]>=2];true;$setGlobalUserVar[iron;$math[$getGlobalUserVar[pickaxe]*$random[1;2]+$getGlobalUserVar[iron]]]];false;]

$onlyIf[$message[1]==;]
$globalCooldown[1s;:x: You can mine every 5h! Wait %time% to mine again.]
$onlyIf[$getGlobalUserVar[pickaxe]>=1;:x: You need to buy a pickaxe first!]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]
$onlyForIDs[596296441505513483;:x: Command is in testing phase and will be soon avaible for everyone!] `
})