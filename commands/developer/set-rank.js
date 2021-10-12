module.exports = {
    name: "set-rank",
    code: `
    $setGlobalUserVar[rank;$message[2];$message[1]]
    ok ustawiono
    ID: $message[1]
    Rola: $message[2]
$onlyForIDs[Tutaj twoje id buiwfebuifebuiwfeubifwebuiwfe; {title:Błąd!} {description:Komenda dostępna tylko dla właściciela bota.} {color:#eb4034}]`
}