let dataHoje = new Date().toLocaleDateString();

let listaPalestrantes = ["josué", "Carlos", "Maurício"]
let listaParticipantes = ["João", "Maria", "José", "Antônio", "Francisco"]
let idadesParticipantes = [22, 35, 29, 18, 21]

let qtdParticipantes = listaParticipantes.length

console.log("Informe a data da realização do evento: ")

//Informação de data em formato yyyy-MM-dd
let dataInformada = new Date("2022-7-5").toLocaleDateString();
console.log(`Data inserida: ${dataInformada.toString()}`);

if(dataInformada < dataHoje){
    console.log("----------------------------------")
    console.log("Data Inválida, informe uma data superior a data Atual!");
    console.log("----------------------------------")
    return; //Return para quebrar o fluxo da aplicação caso a condição não seja aceita
}
else{
    console.log("----------------------------------")
    console.log("Evento cadastrado com sucesso!");
    console.log("----------------------------------")
}

let idade = 18
let nome = "Marcos"
console.log("Informe o nome do participante: ")
console.log(`Nome inserido: ${nome}`);
console.log("Informe a idade do participante: ")
console.log(`Idade inserida: ${idade}`);

if(idade < 18){
    console.log("----------------------------------")
    console.log("Participante não possui idade suficiente!");
    console.log("----------------------------------")
    return; //Return para quebrar o fluxo da aplicação caso a condição não seja aceita
}
else if(qtdParticipantes > 100){
    console.log("----------------------------------")
    console.log("Cadastro NÃO realizado. Limite de público excedido!");
    console.log("----------------------------------")
    return; //Return para quebrar o fluxo da aplicação caso a condição não seja aceita
}
else{
    console.log("----------------------------------")
    console.log("Participante adicionado com sucesso!");
    console.log("----------------------------------")
    listaParticipantes.push(nome)
    idadesParticipantes.push(idade)
}

let resposta = "Sim"
console.log("Deseja visualizar a lista dos integrantes do evento?")
console.log(`Resposta: ${resposta}`);

if(resposta == "Sim"){
    
    console.log("--------- Palestrantes -----------") 
    for (let i = 0; i < listaPalestrantes.length; i++) {
        console.log(`Nome: ${listaPalestrantes[i]}`)
    }
    console.log("")

    console.log("--------- Participantes -----------") 
    for (let i = 0; i < listaParticipantes.length; i++) {
        console.log(`Nome: ${listaParticipantes[i]} - Idade: ${idadesParticipantes[i]}`)
    }
    console.log("----------------------------------")
}