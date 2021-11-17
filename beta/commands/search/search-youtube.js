module.exports = ({
    name: "search-yt",
    code: `$color[RANDOM]
  $title[YouTube Search]
  $description[Search: $message
  Result: [[Click Me]](https://www.youtube.com/search?q=$replaceText[$message; ;+;-1])
  $footer[Searched by: $username#$discriminator | Version: $getVar[version]]
  $argsCheck[>1;:x: You need to say something!] `
})