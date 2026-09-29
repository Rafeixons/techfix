const precos = {
    formatacao: 120,
    limpeza: 80,
    instalacao: 50,
    backup: 100
}

const servico = document.getElementById("servico");
const botao = document.getElementById("gerar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const valor = precos[servico.value];

    const nomeServico =
        servico.options[servico.selectedIndex].text;

    const novaSection = document.createElement("section");

    novaSection.classList.add("beneficios");

    novaSection.innerHTML = `
<h3>Orçamento</h3>
<p><strong>Serviço:</strong> ${nomeServico}</p>
<p><strong>Valor:</strong> R$ ${valor.toFixed(2)}</p>
`;

    resultado.appendChild(novaSection);
});