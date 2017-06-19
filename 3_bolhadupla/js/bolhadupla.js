// Algorítmo da Bolha Dupla
// Coloca um array de números inteiros em ordem crescente,
// pelo método da Bolha Bidirecional

function ordenar(vetor){

    var trocou = false;
    var aux = 0;

    do {
        trocou = false;

        for(var contador = 0; contador < vetor.length - 2; contador++)
        {
            if (vetor[contador] > vetor[contador+1]) {
                aux = vetor[contador];
                vetor[contador] = vetor[contador+1];
                vetor[contador+1] = aux;
                trocou = true;
            }

            if (vetor[vetor.length - contador - 1] < vetor [vetor.length- contador -2])
            {
                aux = vetor[vetor.length - contador - 1];
                vetor[vetor.length - contador - 1] = vetor[vetor.length - contador -2];
                vetor[vetor.length -  contador - 2] = aux;
                trocou=true;
            }
        }
    } while (trocou == true);

    return vetor;
}
