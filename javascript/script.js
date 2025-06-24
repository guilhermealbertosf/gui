let frases = ["'Não espere por uma crise para descobrir o que é importante em sua vida'" , "Platão"
]

//alert(`${frases.Platão}`)

let frase = document.getElementById("frase") 
let autor = document.getElementById("autor")
embaralhar()
function embaralhar(){
    frase.innerHTML = frases[0]
    autor.innerHTML = frases[1]
}