var agora = new Date();//Comando para pegar hora do próprio computador.
var hora = agora.getHours();

if (hora < 12) {
    console.log('Bom dia')
}
else if ((hora > 12) && (hora < 18)) {
    console.log('Boa tarde ');
} else {
    console.log('Boa noite')
}

