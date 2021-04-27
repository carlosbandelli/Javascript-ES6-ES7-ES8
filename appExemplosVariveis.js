var nome = "Carlos" //Global
let nome2 = "joão" //Global
// Global: todo mundo pode usar esse cara!
// local : só a função onde foi delacrad, pode usa-lo.
// VAR só te doi escopos: Global e Local
// LET também tem esses escopos: Global, local e Bloco

function Func1(){
    var sobrenome = "lima"; //Local
    let sobrenome2 = "Oliveira"; //Local
    console.log("Oi " + nome + " "+ sobrenome)
    console.log("Oi " + nome2 +" "+ sobrenome2)

}

Func1();
console.log(nome);
console.log(nome2);
console.log("===============================")

let a= 10
let testar = true

if(testar){
    let b = 20 //bloco
    console.log( a + b)
}

