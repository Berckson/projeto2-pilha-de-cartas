let deck = []
let hub = prompt(`tamanho do deck\n1°${deck.lenght}\nOPÇÕES:\n1: colocar carta \n2: tirar carta\n3: Sair do menu`)
while(hub !=  3) {
   if (hub == 1) {
    let nameP = prompt('nome da carta')
    patients.push(nameP)
   }
   if (hub == 2) {

    patients.pop()
   }
    hub = prompt(`tamanho do deck\n1°${deck.length}\nOPÇÕES:\n1: colocar carta \n2: tirar carta\n3: Sair do menu`)

}