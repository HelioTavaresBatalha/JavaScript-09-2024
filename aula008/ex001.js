var idade = 18;
if (idade < 16) {
    console.log('Não votar, menor de idade ');
} else if ((idade < 18 ) || (idade >  67 )){
    console.log('Voto opcional, só vota se quiser');
} else {
    console.log('Você já pode votar, maior de idade ');
}