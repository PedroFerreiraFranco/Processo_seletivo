function inverterString() {
    let str = document.getElementById('inputString').value;
    let strInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }

    document.getElementById('resultado').innerHTML = `
        <div class="alert alert-success">
            <strong>String original:</strong> ${str}<br>
            <strong>String invertida:</strong> ${strInvertida}
        </div>
    `;
}