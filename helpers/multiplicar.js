var colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5,listar = false,hasta=10) => {

    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            consola = consola + `${base} ${colors.red('x')} ${i} ${colors.red('=')} ${colors.cyan(base * i)}\n`;
            salida = salida +`${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log(colors.rainbow('======================'));
            console.log(colors.underline(`     ${colors.green(`Tabla del ${base}`)}      `));
            console.log(colors.rainbow('======================'));
            console.log(consola);
        };

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `${colors.bgYellow(`tabla-${base}.txt`)} ${colors.green(`creado con exito`)}`;

    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}