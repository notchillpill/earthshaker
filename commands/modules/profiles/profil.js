module.exports = {
    name: "profil",
    code: `
    $if[$isNumber[$getGlobalUserVar[age;$authorID]]==true]
    $title[Profil użytkownika $username[$authorID]]
    $addField[👤 Profil: ;
    👤 Imie: $getGlobaluserVar[name;$authorID]
    📅 Wiek: $getGlobalUserVar[age;$authorID]
    🐶 Ulubione zwierzę: $getGlobalUserVar[pet;$authorID]
    🌐 Miejsce zamieszkania: $getGlobalUserVar[country;$authorID]
    $addField[👥 Użytkownik: ;
    👤 Nazwa: $userTag[$authorID]
    📅 Utworzono: $creationDate[$authorID;date]]
        $addfield[🌐 Globalne:;
        $customEmoji[rsc_globe] Uprawnienia: $getGlobalUserVar[rank]
        :warning: Ostrzeżenia globalne: $getGlobalUserVar[globalwarns]]

    $else

    $title[Profil użytkownika $username[$authorID]]
    $addField[👤 Profil: ;
    👤 Imie: $getGlobaluserVar[name;$authorID]
    📅 Wiek: Nie ustawiono
    🐶 Ulubione zwierzę: $getGlobalUserVar[pet;$authorID]
    🌐 Miejsce zamieszkania: $getGlobalUserVar[country;$authorID]
    $addfield[🌐 Globalne:;
        $customEmoji[rsc_globe] Uprawnienia: $getGlobalUserVar[rank]
        :warning: Ostrzeżenia globalne: $getGlobalUserVar[globalwarns]]
        $addField[😀 Użytkownik: ; 
        :bust_in_silhouette: Nazwa: $userTag[$authorID]
        :calendar: Utworzono: $creationDate[$authorID;date]]

$endif`


    
}