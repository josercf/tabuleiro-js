function criarCasa(corCasa){
    var div = $("<div/>");
    div.addClass("casa");
    div.addClass(corCasa);
    div.addClass("float-left");

    return div;
}

function criarLinha(nomeDoContainer, linha) {
    const QTD_COLUNAS = 8;

    var linha = $("<div/>");
    linha.addClass("linha");

    for (var coluna = 1; coluna <= QTD_COLUNAS; coluna++) {
        var corCasa = 'branca';

        if (linhaIgualColuna(linha, coluna)) {
            corCasa = 'preta';
        }

        var div = criarCasa(corCasa);

        linha.append(div);        
    }

    $(nomeDoContainer).append(linha);
}

function criarTabuleiro(){
    const QTD_LINHAS = 8;

    for (var linha = 1; linha <= QTD_LINHAS; linha++) {
        criarLinha("#tabuleiro", linha);
    }
}

function ePar(numero) {
    return numero % 2 == 0;
}

function eImpar(numero) {
    return ePar(numero) == false;
}

function linhaIgualColuna(linha, coluna) {
    return (eImpar(linha) && eImpar(coluna)) || (ePar(linha) && ePar(coluna));
}