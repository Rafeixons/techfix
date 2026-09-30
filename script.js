function calcularOrcamento() {
    let nome = document.getElementById("nome").value;
    let servico = document.getElementById("servicos").value;
    let valor = 0;
    

    if (servico === "formatacao") {
        nomeServico = "Formatação de computador",
        valor = 120;
    }if( servico === "limpeza"){
        nomeServico = "Limpeza e manutenção",
        valor = 80;
    }if( servico === "instalacao"){
        nomeServico = "Instalação de programas",
        valor = 50;
    }if( servico === "backup"){
        nomeServico = "Backup de arquivos",
        valor = 100;
    }



    document.getElementById("resultado").innerHTML = 
        "<p>Olá, "+ nome +"!</p>"+
        "<h3>Orçamento</h3>"+
        "<p><strong>Serviço escolhido: "+ nomeServico +"</strong></p>"+
        "<p><strong>Valor do serviço: R$"+valor+",00</strong></p>";

}