const path = require('path');

module.exports = {
  entry: './src/index.js',  // Reemplaza con la ruta de tu archivo principal
  output: {
    filename: 'bundle.js',  // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'),  // Directorio de salida (reemplaza 'dist' con tu directorio deseado)
  },
};
