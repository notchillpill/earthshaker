module.exports = {
    name: "djseval",
    code: `$if[$checkContains[$message;client.to]==true]
    nie
$else
$if[$getGlobalUserVar[rank]==Dev]
    
$djseval[$message;yes] 


$else

$title[Błąd!]
$description[Brak uprawnień!
Wymagane uprawnienia: Dev
Twoje Uprawnienia: $getGlobalUserVar[rank]]
$color[RED]

$endif
$endif`
}