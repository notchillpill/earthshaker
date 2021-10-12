module.exports = {
    name: "gwarn",
    code: `$if[$getGlobalUserVar[rank]==Dev]
    $title[GWARN]
    $color[RED]
    $description[Dostałeś GWarna od $userTag[$authorID]
    $dm[$message]
    Możliwe powody: Wyzywanie bota, scamowanie na serwerze support, i inne rzeczy]
    

    $elseif[$getGlobalUserVar[rank]==Admin]
    $title[GWARN]
    $color[RED]
    $description[Dostałeś GWarna od $userTag[$authorID]
    Możliwe powody: Wyzywanie bota, scamowanie na serwerze support, i inne rzeczy]
    $dm[$message]
    $endelseif
    
    $elseif[$getGlobalUserVar[rank]==Moderator]
    $title[GWARN]
    $color[RED]
    $description[Dostałeś GWarna od $userTag[$authorID]
    Możliwe powody: Wyzywanie bota, scamowanie na serwerze support, i inne rzeczy]
    $dm[$message]
    $endelseif
    
    $else
    
    
    $endif`
}