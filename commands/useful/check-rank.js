module.exports = {
    name: "check-rank",
    aliases: ['crank'],
    code: `$title[Rank Check!]
    $color[YELLOW]
    $description[Uprawnienia użytkownika <@$mentioned[1]> to: $getGlobalUserVar[rank;$mentioned[1]]]
    $argsCheck[1; {title:Błąd} {color:RED} {description:Nie oznaczyłeś użytkownika!}]`
}