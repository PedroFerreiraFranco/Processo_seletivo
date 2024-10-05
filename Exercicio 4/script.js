const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentuais(faturamentos) {
    const total = Object.values(faturamentos).reduce((acc, val) => acc + val, 0);
    const percentuais = {};

    for (const estado in faturamentos) {
        percentuais[estado] = ((faturamentos[estado] / total) * 100).toFixed(2);
    }

    return { total, percentuais };
}

const { total, percentuais } = calcularPercentuais(faturamentoEstados);
let resultadosHTML = `<p><strong>Faturamento Total: R$ ${total.toFixed(2)}</strong></p>`;
resultadosHTML += `<ul class="list-group">`;

for (const estado in percentuais) {
    resultadosHTML += `<li class="list-group-item">${estado}: ${percentuais[estado]}%</li>`;
}

resultadosHTML += `</ul>`;
document.getElementById('resultados').innerHTML = resultadosHTML;
