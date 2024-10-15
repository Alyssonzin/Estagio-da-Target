/*
int INDICE = 12, SOMA = 0, 
K = 1; 
enquanto K < INDICE faça { 
    K = K + 1; 
    SOMA = SOMA + K; 
} 
imprimir(SOMA);
*/

const i = 12;
let soma = 0;
let k = 1;

while (k < i) {
    k++;
    soma += k;
}

console.log(soma); // 77
