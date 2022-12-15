const commands = require('./commands/index.js');

// const cmd ="";

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea   
});

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remueve la nueva línea
    // if(cmd === 'date') {
    //   commands.date();
    // }
    // if(cmd === 'pwd') {
    //   commands.pwd();
    // }
    // if(cmd === "suma"){
    //     commands.suma(1,1);
    // }
    // if(cmd === "otraSuma"){
    //     commands.otraSuma(2,2);
    // }
    // if(cmd === "ls"){
    //     commands.ls();
    // }
    process[commands.cmd];
    process.stdout.write('\nprompt > ');
  });



// commands[cmd]() // la función dentro de la propiedad pwd