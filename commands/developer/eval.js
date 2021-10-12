module.exports = {
    name: "eval",
    code: `$if[$getGlobalUserVar[rank]==Dev]
    $eval[$message] 
    
    
    $else
    
    $title[Błąd!]
    $description[Brak uprawnień!
    Wymagane uprawnienia: Dev
    Twoje Uprawnienia: $getGlobalUserVar[rank]]
    $color[RED]
    
    $endif`
}