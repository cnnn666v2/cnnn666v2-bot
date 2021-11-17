module.exports = ({
    name: "search-google",
    code: `$color[RANDOM]
  $title[Google Search]
  $description[Search: $message
  Result: [[Click Me]](https://www.google.com/search?q=$replaceText[$message; ;+;-1])]
  $footer[Searched by: $username#$discriminator | Version: $getVar[version]]
  $argsCheck[>1;:x: You need to say something!]`
})