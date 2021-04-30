var user = {
    nome:"Carlos Bandelli",
    prof:"Programador",
    empresa:"Guia do programador",
    curso:"Formação Node.js"
}

var { nome, prof, empresa} = user // com essas {}, voce esta falando assim Ei!, eu quero que dentro do campo nome voce pegue ele e transforme em uma variavel
var {curso} = user
//pode ser feito com mais campo dentro da {} basta adicionar , conforme exemplo acima


// antes para transformar o objeto dentro do Json uma variavel
// precisa fazer assim
// var nome = user.nome;
// var curso = user.curso;
// var empresa = user.empresa;
console.log(nome)
console.log(prof)
console.log(empresa)
console.log(curso)