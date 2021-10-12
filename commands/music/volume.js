module.exports = {
    name: `volume`,
    code: `
    $if[$getServerVar[premium]==yes]
    $title[Głośność]
    $color[#9542f5]
    $description[:white_check_mark: Głośność ustawiona na: $message%]
    $footer[Polecenie wydane przez: $username]
    $volume[$message]
	$suppressErrors[{title:Błąd} {description:Bot nie jest na kanale głosowym} {color:RED}]
    
    $else
    
    $title[Błąd]
    $color[RED]
    $description[Nie posiadasz premium! Dowiedz się więcej na serwerze wsparcia bota!]
    $endif`
}
