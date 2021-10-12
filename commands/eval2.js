module.exports = {
    name: "komnaty",
    code: `$if[$getGlobalUserVar[rank]==Dev]
    
 $sendMessage[A ten wpierdol za co? :cry:;no]
    
    
    $else
    
    $title[Błąd!]
    $description[Brak uprawnień, Nie możesz dać botowi wpier**l
    Wymagane uprawnienia: Dev
    Twoje Uprawnienia: $getGlobalUserVar[rank]]
    $color[RED]
    
    $endif`
}