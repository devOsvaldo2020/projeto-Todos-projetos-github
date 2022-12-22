
const inicio = document.querySelector('.back-to-top');
const voltar = document.querySelector('#voltar')
inicio.addEventListener('click', function () {
    pages[0].classList.remove("active")
    pages[1].classList.remove("active")
    pages[2].classList.remove("active")
    pages[3].classList.remove("active")
    pages[4].classList.remove("active")
    pages[0].classList.add('active');
    const posicao = voltar.getBoundingClientRect()    
});