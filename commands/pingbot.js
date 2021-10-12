module.exports = {
    name: "<@!$clientID>",
    code: `$title[Kto mnie tu oznacza!]
    $description[Nazywam się Earthshaker, i jestem botem, oraz lubie koty i ziemie 🌎 :cat: oraz lubię pić wode z mlekiem
    Mój prefix na tym serwerze to: $getServerVar[prefix]
    
    Pare informacji o mnie:
    
    :clock1: Uptime: $uptime
    
    :ping_pong: Ping: $ping
    
    <:nodejs:891617486515077171> Wersja node.js: $nodeVersion
    
    :computer: System: $djseval[if (process.platform) {
        const { platform } = process;
        if (platform === 'win32') result = 'Windows';
        else if (platform === 'aix') result = 'Aix';
        else if (platform === 'linux') result = 'Linux';
        else if (platform === 'darwin') result = 'Darwin';
        else if (platform === 'openbsd') result = 'OpenBSD';
        else if (platform === 'sunos') result = 'Solaris';
        else if (platform === 'freebsd') result = 'FreeBSD';
};yes]]
    $color[BLUE]`,
    nonPrefixed: true
}