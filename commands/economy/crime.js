module.exports = ({
  name: "crime",
  code: `$color[RANDOM]
$title[Crime]
$if[$random[1;2]==1]
$description[**$username did successful crime** and got $random[500;1500] :pound: for $randomText[robbing;doing heist;**playing fortnite**;killing someone;stealing someone's credit card]
Your wanted level is $random[1;5] :star: which results to not able to do crime again for 12h]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[500;1500]]]
$else
$description[**$username has been caught** and had to pay $random[500;1500] :pound:
In order to do crime again, you have to wait 12h]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];$random[500;1500]]]
$endif
$footer[$randomText[Crime;Gun;Knife;Dagger;Sword;Grenade;Fortnite] is my life - $username | Version: $getVar[version]]
$globalCooldown[12h;You can't rob for %time%]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})