function criarTabuleiro() {
    const QTD_LINHAS = 8;

    for (var linha = 1; linha <= QTD_LINHAS; linha++) {
        criarLinhaComCasasAlternadas("#tabuleiro", linha);
    }
}

function criarLinhaComCasasAlternadas(nomeDoContainer, indiceLinha) {
    const QTD_COLUNAS = 8;

    var linha = criarDivLinha();
    var cabecalhoColuna = criarDivLinha();

    for (var coluna = 1; coluna <= QTD_COLUNAS; coluna++) {

        if (indiceLinha == 1) {
            var celula = criarCabecalhoLinha(coluna)
            cabecalhoColuna.append(celula);
        }

        var div = criarColuna(indiceLinha, coluna);

        linha.append(div);
    }

    if (indiceLinha == 1) {
        $(nomeDoContainer).append(cabecalhoColuna);
    }
    $(nomeDoContainer).append(linha);
}

function criarCabecalhoLinha(indiceLinha) {
    var paragrafo = $("<p/>");
    paragrafo.text(indiceLinha);

    var innerDiv = $("<div/>");
    innerDiv.addClass("vertical-center");
    innerDiv.append(paragrafo);

    var cabecalho = $("<div/>");
    cabecalho.addClass("container-cabecalho");
    cabecalho.addClass("float-left");
    cabecalho.append(innerDiv);
    return cabecalho;
}

function criarCabecalhoLinha(indiceColuna) {

    var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    var paragrafo = $("<p/>");
    paragrafo.text(letras[indiceColuna - 1]);

    var cabecalho = $("<div/>");
    cabecalho.addClass("casa");
    cabecalho.addClass("float-left");
    cabecalho.append(paragrafo);


    return cabecalho;
}



function criarColuna(indiceLinha, indiceColuna) {
    var corCasa = 'branca';

    if (linhaIgualColuna(indiceLinha, indiceColuna)) {
        corCasa = 'preta';
    }

    var div = criarCasa(corCasa);
    return div;
}

function criarCasa(corCasa) {
    var div = $("<div/>");
    div.addClass("casa");
    div.addClass(corCasa);
    div.addClass("float-left");

    return div;
}

function criarDivLinha() {
    var linha = $("<div/>");
    linha.addClass("linha");

    return linha;
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