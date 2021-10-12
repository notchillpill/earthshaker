module.exports = {
    name: "prefix",
    code: `$title[Powodzenie]
    $description[Ustawiono prefix!
    Nowy prefix: $message
    $color[GREEN]
    $setServerVar[prefix;$message]]
    $onlyPerms[admin;{title:Błąd!} {description: Nie masz uprawnień administratora!} {color:RED} ]
    $argsCheck[1; {title:Błąd} {description:Nie podałeś nowego prefixu!} {color:RED} ]`
}