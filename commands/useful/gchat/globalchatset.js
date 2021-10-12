 module.exports = {
    name: "global",
    
    code: `$channelsendmessage[895405866860306462; PROSBA O ZALOZENIE GLOBALNEJ ZIEMII

ID osoby wnioskującej: $authorID
Zaproszenie do serwera: $getserverinvite
Nazwa serwera $serverName
kanał: $message

komenda: $getServerVar[prefix]set #kanał
]
Oczekuj na zweryfikowanie
$argscheck[1; wyslij wzmianke kanalu]
$blacklistIDS[Tutaj osoba jaką nie lubisz UŚMIESZEK;]`
}