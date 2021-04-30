var nome = "Victor lima";
var idade = 20;
var empresa = {
    nome: "Guia do programador",
    cidade: "São paulo",
    site: "guia do programador.com",
    email: "guia@doprogramdor.com"
     
}

var user = { // Hoje só precisa adicionar ...(nome do objeto conforme exemplo)
    nome,
    idade,
    ... empresa
}

console.log(user)

// para copiar um objeto Json dentro do outro
// antes precisava ser assim
// var user = { 
//     nome ,
//     idade,
//     empresa:empresa.nome,
//     cidade: empresa.cidade,
//     site: empresa.site,
//     email: empresa.site
// }
