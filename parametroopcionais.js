function soma(x,y,z,a=80,b=50){ //sempre primeiro os parametro obrigatórios e  opcionais por ultima conforme o exemplo
    console.log(a + b)
}

function sub(a,b, inverter = false){ //quando coloca esse paramentro opcional, dentro do bloco tem que haver as condiçoes, para qual sentido inverter
    
    if(inverter){ // quando chamar a função e o parametro opcionais for true, ele vai inverter conforme a condição
        console,log(b - a)

    }else{
         console.log(a - b)
    }
}

// Parametros opcionais, voce atribui um valor para ele, quando voce chamar a função e dentro dos parametros da função não estiver
//não estiver valores ele usará o que está nele, caso voce coloque valor eel sobreescreve
