

let nfrases = [0,1,2,3,4,5]

let frases = [
    '"A vida só pode ser compreendida, olhando-se para trás; mas só pode ser vivida, olhando-se para frente."',
    '"Não basta conquistar a sabedoria, é preciso usá-la."',
    '"A essência do conhecimento consiste em aplicá-lo, uma vez possuído."',
    '"Tente mover o mundo - o primeiro passo será mover a si mesmo."',
    '"Há uma característica em comum nos melhores profissionais que conheci, todos fizeram de seu trabalho uma arte."',
    '"Não espere por uma crise para descobrir o que é importante em sua vida"'



]
let autores = [
    'Søren Kierkegaard',
    'Cícero',
    'Confúcio',
    'Platão',
    'Kléber Novartes',
    "Platão"

]

setInterval(embaralhar(), 3000)

function embaralhar(){
    
    let txtfrase = document.getElementById("frase")
    let txtautor = document.getElementById("autor")
    
    
    nfrases.sort(() => Math.random() - 0.5)

    txtfrase.innerText = frases[nfrases[0]]
    txtautor.innerText = autores[nfrases[0]]
    
}
