module.exports = ({
name: "test test",
$if: "v4",
code: `If you see this - everything works!
Test command:
space command
$replaceText[test test; ;-]

$if[$djsEval[$getGlobalUserVar[pickaxe]%10;yes]==0]
Pickaxe level $getGlobalUserVar[pickaxe]
$endif
$onlyForIDs[596296441505513483;:x: Only developer can use this command]`
})

//$color[WHITE]
//$description[$queue[$replacetext[$replacetext[$checkcondition[$isnumber[$message[1]]==true];true;$replacetext[$replacetext[$checkcondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1];10;{number}. {title} {duration}]]
//$addfield[Lagu sekarang;[$songinfo[title]\\]($songinfo[url])]
//$thumbnail[$songinfo[thumbnail]]
//$author[List Queue;$useravatar[$clientid]]
//$footer[Hal $replacetext[$replacetext[$checkcondition[$isnumber[$message[1]]==true];true;$replacetext[$replacetext[$checkcondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replacetext[$replacetext[$checkcondition[$gettextsplitlength==1];true;$truncate[$divide[$queuelength;10]]];false;$replacetext[$replacetext[$checkcondition[$splittext[2]==0];true;$truncate[$divide[$queuelength;10]]];false;$sum[$truncate[$divide[$queuelength;10]];1]]];$authoravatar]
//$textsplit[$divide[$queuelength;10];.]