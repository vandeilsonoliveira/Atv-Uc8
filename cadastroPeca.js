// Se a peça possuir o peso superior a 100 gramas, pode cadastrar

// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10,
// informar que não possuir capacidade suficiente

// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informar erro

var listaPecas = ["Pastilhas de Freio","Suspensão","Motor","Parachoque","Parabrisa","Pneu","Caixa de Marcha"];

if(listaPecas.length > 10){
    console.log("Capacidade insuficiente! Cadastro NÃO realizado.")
}
else{
    console.log("Cadastro realizado com sucesso!");
}

let peso = 60;

if(peso > 100){
    console.log("Peso permitido!");
}
else{
    console.log("O peso está abaixo do permitido");
}

let peca = "Farol";
if(peca.length < 3){
    console.log("Descrição do item muito pequeno");
}
else{
    console.log("Descrição válida");
}