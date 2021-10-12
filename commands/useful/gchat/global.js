const msg = "$message"
const optins = "$getServerVar[gchat]"

module.exports = [{
    name: "$alwaysExecute",
    code: `$forEachGuild[gchat]
    
    $onlyForChannels[$getServerVar[gchatch];]
$blacklistIDS[Tutaj Zmutuj ID kogoś kogo nie lubisz, możesz dodać więcej osób dodając ";" na końcu ; ]
`
}, {
    name: "gchat",
    type: "awaitedCommand",
    code: `
    $channelSendMessage[$getServerVar[gchatch];{author:$userTag[$authorID] | ($authorID):$authorAvatar} {description:${msg}} {color:RANDOM} {footer:jakiś footer XD}]
$cooldown[2s]
$suppressErrors[]`
}]