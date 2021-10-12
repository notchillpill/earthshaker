module.exports = {
    name: "add-premium",
    code: `$if[$getGlobalUserVar[rank]==Dev]
    Ustawiono premium dla serwera $message
    $setServerVar[premium;yes;$message]
    

    $elseif[$getGlobalUserVar[rank]==Admin]
    Ustawiono premium dla serwera $message
    $setServerVar[premium;yes;$message]
    $endelseif
    
    $elseif[$getGlobalUserVar[rank]==Moderator]
    Ustawiono premium dla serwera $message
    $setServerVar[premium;yes;$message]
    $endelseif
    
    $else
    
    $title[Błąd!]
    $description[Brak uprawnień!
        Wymagane uprawnienia: Moderator
        Twoje Uprawnienia: $getGlobalUserVar[rank]]
        $color[RED]
    $endif`
}