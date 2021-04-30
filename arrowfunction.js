function soma(a,b){
    console.log(a+b)
}

var mult = function(a,b){ 
    console.log(a * b)
}// chamar uma função em uma variavel seria igual ao exmplo abaixo

// function mult(a,b){
//     console.log(a*b)
// }

// para trabalahar com arrow fucntion voce vai começar definindo os crops do parametro não precisa escrever function
// (a,b,c,d) => {
//     console.log(a*b*c*d)
// }
//ou quando vo ce quer salvar essas função dentro de uma variavel
var mult3 = (a,b,c) => {
    console.log(a*b*c)
}
// essa função acima é equivalente a essa aqui embaixo
//function mult3(a,b,c){}

var mult4 = a => console.log(a*2)// quando a arrow function tiver só um parametro não precia de (), se ela tiver só uma uma pode ser feito conforme exemplo

//return sem arrow fucntion

function soma1(a,b){
    return a+b //o return ele não mostra na tela 
}

var mult5 = function(a,b){ 
    return a * b 
}

var resultado = soma1(2,4)
var resultado1 = mult5(2,4)
console.log(resultado) //nesse momento ele só retorno o resultado
console.log(resultado1)