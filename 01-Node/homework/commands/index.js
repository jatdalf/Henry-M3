var fs = require('fs');

module.exports = {
    suma: function (a,b){
        let val1 = a;
        let val2 = b;
        let resultado = val1 + val2;
        process.stdout.write(resultado.toString()); 
    },
    pwd: ()=>{
        let directorio = process.cwd();
        process.stdout.write(directorio); 
    },
    date: () => {
        process.stdout.write(Date()); 
    },
    otraSuma: (a,b)=>{
        process.stdout.write((a+b).toString());
    },
    ls: ()=>{
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
          process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
      });
    },
}