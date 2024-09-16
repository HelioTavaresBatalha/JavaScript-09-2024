function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if ((hora >= 0) && (hora < 12)) {
        //Bom dia
        foto.src = 'manha.jpg'
        document.body.style.background = '#515154'
    } else if ((hora >= 12) && (hora <= 18)) {
        // Boa tarde 
        foto.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'

    } else {
        //Boa noite
        foto.src = 'noite.jpg'
        document.body.style.background = 'Black'

    }

}