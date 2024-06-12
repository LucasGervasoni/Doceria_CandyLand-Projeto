function abrirModal(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        })
        
    const modal = document.getElementById('janela_modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' ||  e.target.id == 'janela_modal'){
            modal.classList.remove('abrir');
        }
    })
}