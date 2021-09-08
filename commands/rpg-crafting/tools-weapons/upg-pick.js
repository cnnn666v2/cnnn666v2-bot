module.exports = ({
    name: "upgrade-pickaxe",
    aliases: [`upg-pickaxe`, `upg-pick`, `upgrade-pick`],
    code:`$color[Random]
    $title[Upgrade - Pickaxe]
    $description[Your pickaxe has been successfully upgraded!
    New level is:
    ~~**$math[$getGlobalUserVar[pickaxe]-1] lvl**~~ --> **$getGlobalUserVar[pickaxe] lvl**]
    $footer[Don't forget to checkout github too! | Version: $getVar[version]]
    $setGlobalUserVar[pickaxe;$math[$getGlobalUserVar[pickaxe]+1]]` +

    //Update min and max resources
    `$if[$djsEval[$getGlobalUserVar[pickaxe]%1;yes]==0]
    $setGlobalUserVar[dirtMin;$math[$getGlobalUserVar[dirtMin]+1]]
    $setGlobalUserVar[dirtMax;$math[$getGlobalUserVar[dirtMax]+2]]
    $endif

    $if[$djsEval[$getGlobalUserVar[pickaxe]%2;yes]==0]
    $setGlobalUserVar[stoneMin;$math[$getGlobalUserVar[stoneMin]+3]]
    $setGlobalUserVar[stoneMax;$math[$getGlobalUserVar[stoneMax]+5]]
    $endif

    $if[$djsEval[$getGlobalUserVar[pickaxe]%9;yes]==0]
    $setGlobalUserVar[ironMax;$math[$getGlobalUserVar[ironMax]+3]]
    $setGlobalUserVar[ironMin;$math[$getGlobalUserVar[ironMin]+1]]
    $endif

    $if[$djsEval[$getGlobalUserVar[pickaxe]%24;yes]==0]
    $setGlobalUserVar[goldMax;$math[$getGlobalUserVar[goldMax]+2]]
    $setGlobalUserVar[goldMin;$math[$getGlobalUserVar[goldMin]+1]]
    $endif

    $if[$djsEval[$getGlobalUserVar[pickaxe]%49;yes]==0]
    $setGlobalUserVar[rubyMax;$math[$getGlobalUserVar[rubyMax]+1]]
    $setGlobalUserVar[rubyMin;$math[$getGlobalUserVar[rubyMin]+1]]
    $endif

    $if[$djsEval[$getGlobalUserVar[pickaxe]%79;yes]==0]
    $setGlobalUserVar[gemMax;$math[$getGlobalUserVar[gemMax]+3]]
    $setGlobalUserVar[gemMin;$math[$getGlobalUserVar[gemMin]+3]]
    $endif` +
    
    //Requirements
    `$if[$getGlobalUserVar[pickaxe]>=80]
    $setGlobalUserVar[gem;$math[$getGlobalUserVar[gem]-2]]
    $onlyIf[$getGlobalUserVar[gem]>=2;:x: You need at least 2 gems!]
    $endif

    $if[$getGlobalUserVar[pickaxe]>=50]
    $setGlobalUserVar[ruby;$math[$getGlobalUserVar[ruby]-1]]
    $onlyIf[$getGlobalUserVar[ruby]>=1;:x: You need at least 1 ruby!]
    $endif

    $if[$getGlobalUserVar[pickaxe]>=25]
    $setGlobalUserVar[gold;$math[$getGlobalUserVar[gold]-3]]
    $onlyIf[$getGlobalUserVar[gold]>=3;:x: You need at least 3 gold!]
    $endif
    
    $if[$getGlobalUserVar[pickaxe]>=10]
    $setGlobalUserVar[iron;$math[$getGlobalUserVar[iron]-5]]
    $onlyIf[$getGlobalUserVar[iron]>=5;:x: You need at least 5 iron!]
    $endif

    $setGlobalUserVar[stone;$math[$getGlobalUserVar[stone]-10]]
    $setGlobalUserVar[wood_log;$math[$getGlobalUserVar[wood_log]-20]]
    $setGlobalUserVar[sticks;$math[$getGlobalUserVar[sticks]-25]]

    $onlyIf[$getGlobalUserVar[stone]>=10;:x: You need at least 10 stone!]
    $onlyIf[$getGlobalUserVar[wood_log]>=20;:x: You need at least 20 wood logs!]
    $onlyIf[$getGlobalUserVar[sticks]>=25;:x: You need at least 10 sticks!]` 
})