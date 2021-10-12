module.exports = {
    name: "reload",
    code: `$if[$getGlobalUserVar[rank]==Dev]
    $updatecommands 
    Wykonano
    
    $else
    
    $title[Błąd!]
    $description[Brak uprawnień!
    Wymagane uprawnienia: Dev
    Twoje Uprawnienia: $getGlobalUserVar[rank]]
    $color[RED]
    $endif`
}