module.exports = {
    name: "remove-premium",
    code: `$if[$getGlobalUserVar[rank]==Dev]
    Usunięto premium dla serwera $message
    $setServerVar[premium;no;$message]
    

    $elseif[$getGlobalUserVar[rank]==Admin]
    Usunięto premium dla serwera $message
    $setServerVar[premium;no;$message]
    $endelseif
    
    $elseif[$getGlobalUserVar[rank]==Moderator]
    Usunięto premium dla serwera $message
    $setServerVar[premium;no;$message]
    $endelseif
    
    $else
    
    $title[Błąd!]
    $description[Brak uprawnień!
        Wymagane uprawnienia: Moderator
        Twoje Uprawnienia: $getGlobalUserVar[rank]]
        $color[RED]
    $endif`
}