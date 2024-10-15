const string = "Olá, Target! Então, vamos conversar?";
const result = contadorDeA(string);

console.log(`A letra 'A' apareceu ${result} vezes na string "${string}"`);



function contadorDeA(string) {
    //Converte a string toda para maiúsculas
    const stringMaiuscula = string.toUpperCase();

    //Array com as possíveis variações da letra A.
    const variacoes = ["A", "À", "Á", "Â", "Ã", "Ä"];

    let contador = 0;

    for (let i = 0; i < string.length; i++) {

        for (let j = 0; j < variacoes.length; j++) {

            //Se o caractere atual da string for uma das variações de A...
            if (stringMaiuscula[i] === variacoes[j]) {
                contador++;
            }
        }
    }

    return contador;
}
