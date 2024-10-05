function pertenceFibonacci(n) {
    let a = 0, b = 1;
    if (n === 0 || n === 1) {
        return true;
    }
    while (b < n) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b === n;
}

document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let numero = parseInt(document.getElementById('numero').value);
    
    let resultado = document.getElementById('resultado');
    if (pertenceFibonacci(numero)) {
        resultado.innerHTML = `<div class="alert alert-success">O número ${numero} pertence à sequência de Fibonacci.</div>`;
    } else {
        resultado.innerHTML = `<div class="alert alert-danger">O número ${numero} não pertence à sequência de Fibonacci.</div>`;
    }
});