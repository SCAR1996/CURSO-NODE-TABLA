const fs = require('fs');

const colors = require('colors');
const crearArchivo =async (base = 5, listar = false, h = h) => {

        try {

           
         
    
            let salida = '';
            let consola = '';
    
            for ( let i = 1; i <=h; i++) {
            salida += `${base} x ${i} = ${base * i }\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i }\n`;
            }
            
            if (listar) {

                console.log ('==================='.rainbow);
                console.log ('Tabla del:'.brightCyan, base);
                console.log ('==================='.rainbow);
                console.log (consola.brightWhite);
            }
            
    
            fs.writeFileSync ( `./salida/tabla-${base}.txt`, salida);
    
           return `tabla-${base}.txt`;
    
              
        } catch (err) {
            throw err;
        }

   
        
    }

    module.exports = {
        crearArchivo
    }


   