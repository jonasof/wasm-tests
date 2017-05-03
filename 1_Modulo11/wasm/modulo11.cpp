#include <string.h>

bool is_numeric(char * string);
int to_int(char a);

extern "C" {

    int Verifica_Matricula(char * txtMatricula);

    int Verifica_Matricula_milhao(char * txtMatricula) {
       for (int x = 0; x < 1000000; x++) {
	  Verifica_Matricula(txtMatricula);
	}
	return -1;
    }

    int Verifica_Matricula(char * txtMatricula) {

        int Ix;
        int Soma = 0;
        int Digito;

        if (! is_numeric(txtMatricula) || strlen(txtMatricula) != 8) {
            //deu ERRO
            return -1;
        }

        //Soma com pesos 7,6,5,4,3,2,1 para cada algarismo da Matrícula
        for (Ix = 0; Ix < 7; Ix++) {
            Soma = Soma + (to_int(txtMatricula[Ix]) * (8 - (Ix+1)));
        }


        //Obtém resto da divisão de Soma por 11
        Digito = Soma % 11;
        if (Digito > 1) {
            Digito = 11 - Digito;
        }



        return (Digito == to_int(txtMatricula[7]));

    }

    int main() {

      Verifica_Matricula_milhao("13299997");

    }


}



bool is_numeric(char * string)
{
   for(int i = 0; i < strlen( string ); i ++)
   {
      if (string[i] < 48 || string[i] > 57)
         return false;
   }

   return true;
}


int to_int(char a)
{
    return a - '0';
}
