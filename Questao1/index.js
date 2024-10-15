const numero = -8;

if (isFibonacci(numero)) {
    console.log(`O numero ${numero} pertence a sequencia de Fibonacci.`);
} else {
    console.log(`O numero ${numero} NÃO pertence a sequencia de Fibonacci.`);
}



function isFibonacci(target) {
    let fibonacciAnterior = 0;
    let fibonacciAtual = 1;

    //O loop quebrará se a sequencia de Fibonacci ultrapassar o valor alvo.
    while (fibonacciAtual <= target) {
        if (fibonacciAtual === target) {
            return true;
        }

        let aux = fibonacciAtual;
        fibonacciAtual += fibonacciAnterior;
        fibonacciAnterior = aux;
    }

    return false;
}