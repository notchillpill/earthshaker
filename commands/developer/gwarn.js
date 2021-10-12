module.exports = {
    name: "gwarn",
    code: `$if[$getGlobalUserVar[rank]==Dev]
    Wykonano
    $setGlobalUserVar[globalwarns;$sum[$getGlobalUserVar[globalwarns];1];$message[1]]
    

    $elseif[$getGlobalUserVar[rank]==Admin]
    Wykonano
    $setGlobalUserVar[globalwarns;$sum[$getGlobalUserVar[globalwarns];1];$message[1]]
    $endelseif
    
    $elseif[$getGlobalUserVar[rank]==Moderator]
    Wykonano
    $setGlobalUserVar[globalwarns;$sum[$getGlobalUserVar[globalwarns];1];$message[1]]
    $endelseif
    
    $else
    
    $title[Błąd!]
    $description[Brak uprawnień!
        Wymagane uprawnienia: Moderator
        Twoje Uprawnienia: $getGlobalUserVar[rank]]
        $color[RED]
    $endif`
}