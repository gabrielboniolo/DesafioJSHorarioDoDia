function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var titulo = document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=4 && hora<12) {
        titulo.innerHTML = 'Bom dia!'
        img.src = 'imagens/foto manha.jpg'
        document.body.style.background = '#8e985a'
    }

    else if(hora>=12 && hora<18) {
        titulo.innerHTML = 'Boa tarde!'
        img.src = 'imagens/foto tarde.jpg'
        document.body.style.background = '#9ba7b7'
    }

    else{
        titulo.innerHTML = 'Boa noite!'        
           img.src = 'imagens/foto noite.jpg' 
           document.body.style.background = '#294f64'
        }
        
}
