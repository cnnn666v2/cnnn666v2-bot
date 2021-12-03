module.exports = ({
  name: "work",
  code: `$color[1;$random[0000;999999]]
  $title[1;Work]
  $description[1;You worked and earned: $random[100;1000] :pound:]
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[100;1000]]]
  $globalCooldown[30m;You're tired, please wait %minute% %second% to work again.]
  $footer[1;Version: $getVar[version]]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})