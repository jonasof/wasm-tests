Compilação:

emcc bolhadupla.cpp -o bolhadupla.js -s EXPORTED_FUNCTIONS="['_printSizeOfInt',
'_ordenar']" -s WASM=1 -s "BINARYEN_METHOD='native-wasm'" -Os

