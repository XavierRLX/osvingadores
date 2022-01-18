var m = document.getElementById('menuf')
    var x = document.getElementById('menua')
    var mop = document.getElementById('menu')
    
    m.addEventListener('click', abrir)
    x.addEventListener('click', fechar)

    function abrir(){
        x.style.display = 'inline'
        mop.style.display = 'inline'
        m.style.display = 'none'
        

    }
    function fechar(){
        m.style.display = 'inline'
        x.style.display = 'none'
        mop.style.display = 'none'
    }