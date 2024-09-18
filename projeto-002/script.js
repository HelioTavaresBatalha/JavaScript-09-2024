function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        // Definir a imagem com base na idade
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-homem.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.jpg');
            } else {
                img.setAttribute('src', 'idoso-homem.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-mulher.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.jpg');
            } else {
                img.setAttribute('src', 'idoso-mulher.jpg');
            }
        }

        // Aplicando estilo à imagem
        img.style.cssText = "width: 250px; height: 250px; border-radius: 50%; display: block; margin: 10px auto;";

        // Atualizando o conteúdo do div#res
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`;
        res.appendChild(img);
    }
}
