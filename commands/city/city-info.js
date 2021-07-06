module.exports = ({
  name: "city-info",
  code: `$color[RANDOM]
$title[:office: City]
$description[Another unique feature! But, what is it doing?
- basically, you can be owner of the new city. With that, each time you get more people. More people = better income!

What are the benefits?
- depending on the level, you get access to additional commands

How do I make city?
- type \`$getServerVar[svpx6]build-th\` in right channel to start new city

What are the starting things?
- Once you build city, you'll get these:
> People: 10
> Technology (LVL): 1
> Houses: 2
> Shops: 0
> Jobs: 0
> Townhall (LVL): 1
> Income: 0 :pound:/h

How do I upgrade townhall?
- do \`$getServerVar[svpx6]upgrade-th\`

How can I build houses?
- do \`$getServerVar[svpx6]build-house\`

My question isn't here, wher can I get anwser?
- join support server!]
$footer[City - BETA in 1.5 | Version: $getVar[version]]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come [here](https://discord.gg/mt4hDxQpPg) if you believe it's a mistake]`
})