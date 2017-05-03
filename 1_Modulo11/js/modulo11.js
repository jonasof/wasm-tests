function Verifica_Matricula(txtMatricula) {

    var Soma = 0;
    var Digito;

    if (! is_numeric(txtMatricula) || txtMatricula.length != 8) {
        //deu ERRO
        return -1;
    }

    //Soma com pesos 7,6,5,4,3,2,1 para cada algarismo da Matrícula
    for (var x = 0; x < 7; x++) {
        Soma = Soma + (parseInt(txtMatricula.charAt(x)) * (8 - (x+1)));
    }

    //Obtém resto da divisão de Soma por 11
    Digito = Soma % 11;
    if (Digito > 1) {
        Digito = 11 - Digito;
    }

    return (Digito == txtMatricula.charAt(7));

}

function is_numeric(a_string)
{
    return ! isNaN(a_string);
}
