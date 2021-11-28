module.exports = ({
name: "music-featured",
code: `$color[1;$getGlobalUserVar[welcome_color]]
$color[2;$getGlobalUserVar[welcome_color]]

$title[1;Cnnn666v2's Team Recommendation]
$description[1;**Song Recommendation:**
Title: $getVar[songRec_title]
Length: $getVar[songRec_length]
Command to play: \`$getServerVar[svpx6]play-featured\`
Choice by: $getVar[songRec_choice]]
$image[1;https://picsum.photos/536/354]

$description[2;**Playlist Recommendation:**
Song Count: $getVar[playlistRec_songs]
Genre: $getVar[playlistRec_genre]
Command to play: \`$getServerVar[svpx6]playlist-featured\`
Choice by: $getVar[playlistRec_choice]
$footer[2;You can always play favourite music using "$getServerVar[svpx6]play your song" | Version: $getVar[version]]

$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})