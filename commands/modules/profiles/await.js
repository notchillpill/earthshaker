module.exports [{
    name: "p2",
    type: 'onInteractionCreate',
    code: `$awaitMessages[$authorID;20s;everything;p3;Koniec Czasu!]
    $sendMessage[Teraz napisz swój wiek.;no]
    $setGlobalUserVar[name;$message;$authorID]`
}, {
    type: 'onInteractionCreate',
    name: "p3",
    code: `$awaitMessages[$authorID;20s;everything;p4;Koniec Czasu!]
    $sendMessage[Wpisz ulubionego zwierzaka.;no]
    $setGlobalUserVar[age;$message;$authorID]` 
}, {
    type: 'onInteractionCreate',
    name: "p4",
    code: `$awaitMessages[$authorID;20s;everything;p5;Koniec Czasu]
    $sendMessage[Napisz miejsce w którym mieszkasz.;no]
    $setGlobalUserVar[pet;$message;$authorID]`

}, {
    type: 'onInteractionCreate',
    name: "p5",
    code: `$setGlobalUserVar[country;$message;$authorID]
    $title[Twój profil]
    $description[:bust_in_silhouette: Imie: $getGlobalUserVar[name;$mentioned[1]]
    :calendar: Wiek: $replaceText[$replaceText[$checkCondition[$isNumber[$getGlobalUserVar[age;$authorID]]==true];true;$getGlobalUserVar[age;$authorID];1];false;Nie ustawiono;1]
    :dog: Ulubione zwierzę: $getGlobalUserVar[pet;$mentioned[1]]
    :globe_with_meridans: Kraj: $getGlobalUserVar[country;$mentioned[1]]`
}]
