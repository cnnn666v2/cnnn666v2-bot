module.exports = ({
  name: "error",
  code: `
$title[Error 404 - Not Found   | ➖ | ⏹ | ❎]

$description[Couldn't find: $message.$randomText[ini;exe;apk;dll;js;txt;bat;py]
File path: \`$randomText[C:\\WINDOWS\\system32;C:\\Program Files\\Steam]\$message.$randomText[ini;exe;apk;dll;js;txt;bat;py]\`]
$footer[Version: $getVar[version] | Executed by: $username] `
})