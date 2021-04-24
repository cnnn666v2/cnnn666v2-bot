module.exports = ({
 name: "weather",
 code: `
 https://api.cool-img-api.ml/weather-card?location=$replaceText[$message; ;%20] Weather in **$message**
 $onlyIf[$message!=;Provide a location!]
`
})