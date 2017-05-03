## Compilando

emcc modulo11.cpp -o function.js -s EXPORTED_FUNCTIONS="['_Verifica_Matricula', '_Verifica_Matricula_milhao']" -s BINARYEN=1 -s "BINARYEN_METHOD='native-wasm'" -O0
