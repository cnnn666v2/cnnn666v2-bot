module.exports = ({
  name: "donation",
  aliases: ['donate', 'donations', 'donates'],
  code: `$color[RANDOM]
$title[:pound: Donations]
$description[You know, Cnnn666v2 is an free bot without pay walls. To keep it as good as he is (or even better), support bot :)
Of course, you won't get like *+50% xp boost* ||unlike other bots||, it's the opposite. You'll get nothing!
Okay, maybe not nothing (bcoz depending on how much you donate you get special badge). But this money surely won't be spent on goods. At least, some of it.
All money would just go into VPS in order to keep bot in very good condition.

But let's say, you \`don't have money\`/\`don't wanna support bot by giving money\`. How can you support bot? Anwser is that simple as question. Promote it (if you're allowed to) \`or\`/\`and\` add it to your server.

There are several ways to donate.]
$addField[Here's the list:;- Steam Gift Cards - they'll be spent on.. um.. steam. But hey, it's still supporting! - dm me
- Discord nitro/classic - yea, I accept this one too. This will be used to boost server if nitro. If classic then well, virtual goods :) - dm me
- Server boosting - or insetad of giving me nitro boost support server - join \`$getServerVar[svpx6]support\` server
- PaySafeCard (aka PSC) - I can re-sell this one so I can get money to buy VPS - dm me
- PayPal - this one will be surely spent on VPS only, trust me - soon

Oh, forgot to tell you that once you donate your badge is with you forever!]
$footer[It's optional and I'm not forcing you to donate | Version: $getVar[version] | Season: $getVar[season]] `
})