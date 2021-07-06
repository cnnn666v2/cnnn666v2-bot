module.exports = ({
    name: "lyrics",
    code: `$title[Lyrics for - $songInfo[title]]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$songInfo[title]; ;+];lyrics;:x: No Lyrics Found for this song.]]
$footer[Lyrics by: some-random-api.ml | Version: $getVar[version]]
$color[RANDOM]
$suppressErrors[:x: No song is being played!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})