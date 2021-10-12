module.exports =  {
    name: "reset-prefix",
    code: `$if[$getGlobalUserVar[rank]==Dev]
    Zresetowano prefix dla serwera: $message
    $setServerVar[prefix;#COMMA#;$message]

    $elseif[$getGlobalUserVar[rank]==Admin]
    Zresetowano prefix dla serwera: $message
    $setServerVar[prefix;#COMMA#;$message]
    $endElseIf

    $else

    $title[Błąd!]
    $description[Brak uprawnień!
        Wymagane uprawnienia: Admin
        Twoje Uprawnienia: $getGlobalUserVar[rank]]
        $color[RED]
    $endif`
}