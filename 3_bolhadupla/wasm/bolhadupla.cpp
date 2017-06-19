#include <string.h>

bool is_numeric(char * string);
int to_int(char a);

extern "C" {

    int printSizeOfInt()
    {
        return sizeof(int);
    }

    int * ordenar(int * vetor, int sizeofarray){

        bool trocou = false;
        int aux = 0;

	    do {
            trocou = false;

            for(int contador = 0; contador < sizeofarray - 2; contador++)
            {
                if (vetor[contador] > vetor[contador+1]) {
                    aux = vetor[contador];
                    vetor[contador] = vetor[contador+1];
                    vetor[contador+1] = aux;
                    trocou = true;
                }

                if (vetor[sizeofarray - contador - 1] < vetor [sizeofarray - contador -2])
                {
                    aux = vetor[sizeofarray - contador - 1];
                    vetor[sizeofarray - contador - 1] = vetor[sizeofarray - contador -2];
                    vetor[sizeofarray -  contador - 2] = aux;
                    trocou=true;
                }
            }
        } while (trocou == true);

        return vetor;
    }
}
