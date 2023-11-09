let fruta = "laranja"
let nome = "Jamerson"
switch(fruta){
    case "laranja":
    case "manga":
    console.log("Olá " + nome, "seu suco de " + fruta, "está sendo preparado")
    break
    case "banana":
    case "abacate":
    console.log("vitamina de " + fruta)
    break
    case "limão":
    case "abacaxi":
    case "morango":
    console.log("roska de " + fruta)
    break
    default:
    console.log("opcão não disponível no momento")
}
