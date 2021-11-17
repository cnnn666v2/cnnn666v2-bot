module.exports = ({
    name: "badges",
    code: `$color[$random[0000;999999]]
    $title[❓ | Help Menu]
    $description[[Support Server](https://discord.gg/mt4hDxQpPg)
  All about badges]
  $addField[Badges • Other question?;Join our support server!;yes]
  $addField[Badges • Are there special badges?;Yes, example is the **VIP** badge which you get after buying VIP. There will also be time limited badges (once bought they're kept forever);yes]
  $addField[Badges • Perks?;As mentioned before, badges are used to show-off your profile. No perks!;yes]
  $addField[Badges • How to buy?;You can buy them using \`$getServerVar[svpx6]buy-badge-badge_name\`. You can check all avaible badges by using \`$getServerVar[svpx6]shop-badges\`;yes]
  $addField[Badges • What is this?;Badges are used to show-off your profile. This is the uniqe feature which most of bots doesn't has!;yes]
    $footer[Cnnn666v2 - first not pay2win bot | Page: 1/2 | Version: $getUserVar[version]]
  $onlyIf[$message[1]==;]`
}), //Page 2
({
    name: "badges-2",
    code: `$color[$random[0000;999999]]
    $title[❓ | Help Menu]
    $description[[Support Server](https://discord.gg/mt4hDxQpPg)
All about badges]
  $addField[Unique badges • check what unique badges are;They can be earned in certain ways - depending on the badge. In order to get badge, you have to be in support server;yes]
  $addField[Unique badges • so, let's explore!;<:developerBadge:815845454931689473> - this badge is only for bot developers (in this case, it's only for Cnnn666)
<:bugFinder:815846438931529769> - this one can be earned by **you**! How? Simply, just find bug and report it using \`$getServerVar[svpx6]dev-report\`
<:googleTranslator:816277117158817822> - this badge is granted to anyone who **helped translating bot**
<a:verified:817334736342876170> - this badge is granted to **trusted** users of bot;yes]
  $footer[Cnnn666v2 - first not pay2win bot | Page: 2/2 | Version: $getUserVar[version]]
  $onlyIf[$message[1]==;]`
})