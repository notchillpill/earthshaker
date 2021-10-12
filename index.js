const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
    token: "Token Bota", // Token
    prefix: "$getServerVar[prefix]", // Prefix
    mobile: true // Mobile presence
})

bot.onMessage() // Initial Command line

bot.loadCommands('./commands')

bot.readyCommand({
    channel: "Wpisz kanał do wysłania wiadomości", // Message Channel
    code: `$log[Uruchomiono! Zalogowano jako $userTag[$clientID]]
    $channelSendMessage[Wpisz kanał do wysłania wiadomości;:white_check_mark: Bot został uruchomiony poprawnie!;no]
    $setStatus[Mój prefix to: Tuaj wstaw prefix | $pingms;playing;online]`
});



bot.variables({
   prefix: "Tutaj prefix",
   rank: "User",
   ideach: "0",
   name: "Nie ustawiono",
   age: "Nie ustawiono",
   pet: "Nie ustawiono",
   country: "Nie ustawiono",
   premium: "yes",
   globalwarns: "0"
   
})

bot.botJoinCommand({
    channel: "Tutaj ID Kanału (Tryb Developera)",
    code: `$channelSendMessage[Tutaj ID Kanału (Tryb Developera);
    Nazwa: $serverName[$guildID]
    ID: $guildID
    ID Właściciela: $ownerName]`
    })

    bot.botLeaveCommand({
        channel: "Tutaj ID Kanału (Tryb Developera)",
        code: `$channelSendMessage[Tutaj ID Kanału (Tryb Developera);
            Nazwa: $serverName[$guildID]
            ID: $guildID
            ID Właściciela: $ownerName;no]`
        })

        // Profile Awaited Commands below

    bot.awaitedCommand({
        name: "p2",
        code: `$awaitMessages[$authorID;20s;everything;p3;Koniec Czasu!]
    $sendMessage[Teraz napisz swój wiek.;no]
    $setGlobalUserVar[name;$message;$authorID]`
    })
    
    bot.awaitedCommand({
        name: "p3",
        code: `$awaitMessages[$authorID;20s;everything;p4;Koniec Czasu!]
        $sendMessage[Wpisz ulubionego zwierzaka.;no]
        $setGlobalUserVar[age;$message;$authorID]`
    })

    bot.awaitedCommand({
        name: "p4",
        code: `$awaitMessages[$authorID;20s;everything;p5;Koniec Czasu]
        $sendMessage[Napisz miejsce w którym mieszkasz.;no]
        $setGlobalUserVar[pet;$message;$authorID]`
    })

    bot.awaitedCommand({
        name: "p5",
        code: `$setGlobalUserVar[country;$message;$authorID]
        $title[Twój profil]
        $description[:bust_in_silhouette: Imie: $getGlobalUserVar[name]
        :calendar: Wiek: $replaceText[$replaceText[$checkCondition[$isNumber[$getGlobalUserVar[age;$authorID]]==true];true;$getGlobalUserVar[age;$authorID];1];false;Nie ustawiono;1]
        :dog: Ulubione zwierzę: $getGlobalUserVar[pet]
        :globe_with_meridians: Kraj: $getGlobalUserVar[country]]`
    })
