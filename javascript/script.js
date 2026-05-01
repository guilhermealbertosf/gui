
AOS.init();

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

let estado_conhecimento_tecnico = "true"
let estado_experiencias = "false"
let estado_ferramentas = "false"

function recolher(x){
    let conhecimento_tecnico = document.getElementById("conhecimento_tecnico")
    
    let experiencias = document.getElementById("experiencias")
    let titulo_experiencias = document.querySelector("#titulo_experiencias")

    let ferramentas = document.getElementById("ferramentas")
    let titulo_ferramentas = document.getElementById("titulo_ferramentas")
    
    if( x == "c" ){
        /*
        if(estado_conhecimento_tecnico == "true"){
            conhecimento_tecnico.style.display = 'none'
            estado_conhecimento_tecnico = "false"
        }
        else{
            conhecimento_tecnico.style.display = 'block'
            estado_conhecimento_tecnico = "true"
        }
        
        */
    }
    else if( x == "e"){
        if(estado_experiencias == "true"){
            experiencias.style.display = "none"
            estado_experiencias = "false"
            titulo_experiencias.innerText = "EXPERIÊNCIAS..."
        }
        else{
            experiencias.style.display = "block"
            estado_experiencias = "true"
            
            titulo_experiencias.innerText = "EXPERIÊNCIAS"
        }
    }
    else if( x == "f"){
        
        if(estado_ferramentas == "true"){
            ferramentas.style.display = "none"
            estado_ferramentas = "false"
            titulo_ferramentas.innerText = "FERRAMENTAS..."
        }
        else{
            ferramentas.style.display = "block"
            estado_ferramentas = "true"
            
            titulo_ferramentas.innerText = "FERRAMENTAS"
        }
    }    
    else{
        alert("ERRO")
    }
}