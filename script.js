function pegarNum() {
    var num1 = document.querySelector("#num-p").value;
    var num2 = document.querySelector("#num-mult").value;

    const title = document.getElementById("title");
    title.textContent = `Tabuada do número: ${num1}`;

    mostraTabela(num1, num2);
}

function mostraTabela(num1, num2) {
    const p = document.getElementById("p");
    const tabela = document.getElementById("tabela");
    const text = "Informe um número para calcular uma tabuada..."
    tabela.innerHTML = "";
    p.innerHTML = "";

    for(let i=1; i<=num2; i++) {
        let resultado = num1 * i;
        tabela.innerHTML += `<td>${num1} x ${i} = ${resultado}</td>`;
    }
}

