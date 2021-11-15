module.exports = ({
    name: "help-bs",
    code: `$color[RANDOM]
  $thumbnail[https://i.ibb.co/NYhxMBn/battleskin.png]
  $title[Skin Battle - Help]
  $description[**This minigame is currently not avaible.**
Dev Announcement:
\`Coming Soon to Alpha\`
    
**About:**
Skin Battle (BS) is a minigame where players gain several skins (guns, knifes, characters, etc.) and fight against other players (check \`$getServerVar[svpx6]rules-bs\` for more info). You will use regular money for buying skins or chests with skins.

**__Commands:__**]

  $footer[Skin Battle: $getVar[bs_version] | Version: $getVar[version]]
  
  $onlyIf[$message==;]
  $onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})