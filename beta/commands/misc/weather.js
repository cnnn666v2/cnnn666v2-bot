module.exports = ({
 name: "weather",
 code: `$color[RANDOM]
$title[Weather in $message]
$image[https://api.cool-img-api.ml/weather-card?location=$replaceText[$message; ;%20]]


$onlyIf[$message!=;Provide a location!]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]
`
})