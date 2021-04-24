module.exports = ({
  name: "offers",
  code: `$color[RANDOM]
$if[$getGlobalUserVar[lang]==en]
$title[Offers]
$description[Wanna help bot development?
**Donation**
If you donate to bot here (soon), you'll get *premium*
Premium gives you access to alpha features

**Custom Bot**
Don't wanna premium? Sure, contact me directly (DM's) and I'll do custom bot for you! (hosting not included, free bug fixes)

**Custom economy (this bot)**
It includes following:
- custom shop
- custom currency
- custom items
Contact me directly (DM's) and I'll do that for you!

**Custom commands**
Just wanna custom commands? Sure, contact me directly (DM's) and I'll do that you!]
$footer[Made by: Cnnn666#5460 | Version: $getVar[version]]
$else
$if[$getGlobalUserVar[lang]==pl]

$title[Oferty]
$description[Chcesz pomóc w rozwojowi bota?
**Dotacje**
Jeśli wspomożesz bota tutaj (wkrótce), otrzymasz *premium*
Premium da ci dostęp do funkcji w wersji alpha

**Własny Bot**
Nie chcesz premium? Dobrze, napisz do mnie prywatnie (DM's) i zrobię dla ciebie własnego bota! (hosting nie jest włączony, darmowe naprawy błędów)

**Własna ekonomia (ten bot)**
To zawiera:
- własny sklep
- własna waluta
- własne przedmioty
Napisz do mnie prywatnie (DM's) i zrobię to dla ciebie!

**Własne komendy**
Chcesz tylko własne komendy? Pewnie, napisz do mnie prywatnie (DM's) i zrobię to dla ciebie!]
$footer[Stworzone przez: Cnnn666#5460 | Wersja: $getVar[version]]

$endif
$else
$if[$getGlobalUserVar[lang]==de]

$endif
$endif
$onlyIf[$message[1]==;]`
})