var victor = {
    nome: "Carlos Bandelli",
    empresa: "Guia do programador",
    salario:1000,
}// Verificar

var david = {
    nome: "David",
    empresa: "Umbler",
    salario: 800
}// Verificar

var erik = {
    nome: "Erik Fig",
    empresa: "Udemy",
    salario: 500
}// Verificar


// find encontra um unico registro no array 
var users = [victor, david, erik]
// ou seja ele vai percorrer á varaiel users acima, e para todos o conteudo do array ele vai usar esse parametro
var usuarios = users.find(user => user.nome ==="Carlos Bandelli") // vai ser como verificar, no primeiro usuario que ele encontrar essa condição ele retorna, e para de rodar
         // parametro user, para cada user vou querer somente o nome e esse nome tem que ser o que eu pedi
// ele vai parar assim que encontar a primeira condição true
var salario = users.find(pay => pay.salario === 800)

console.log(usuarios)
console.log(salario)