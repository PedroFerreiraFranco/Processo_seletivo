function analisarFaturamento(dados) {
    const faturamentos = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);

    const menorValor = Math.min(...faturamentos);
    const maiorValor = Math.max(...faturamentos);
    const mediaMensal = faturamentos.reduce((acc, val) => acc + val, 0) / faturamentos.length;

    const diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaMensal).length;

    document.getElementById('resultados').innerHTML = `
        <div class="alert alert-success">
            <p><strong>Menor valor de faturamento:</strong> ${menorValor.toFixed(2)}</p>
            <p><strong>Maior valor de faturamento:</strong> ${maiorValor.toFixed(2)}</p>
            <p><strong>Número de dias com faturamento acima da média:</strong> ${diasAcimaDaMedia}</p>
        </div>`;
}

function carregarDados() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            analisarFaturamento(data);
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
            document.getElementById('resultados').innerHTML = `
                <div class="alert alert-danger">Erro ao carregar o arquivo JSON.</div>
            `;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    carregarDados();
});