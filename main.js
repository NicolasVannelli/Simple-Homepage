const dark = document.getElementById('dark');
const a = document.querySelectorAll('a')
const body = document.body;

const nav = document.getElementById('nav')
const switc = document.getElementById('switch')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')
const icono = document.querySelectorAll('rect')


const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    body.classList.add('darkmode');
    nav.classList.add('darkmodep');
    icono.forEach(nose=>{
        nose.classList.add('oscuro')
    })
    a.forEach(link => {
        link.classList.add('darkmodep');
    });
    dark.checked = true;
}
dark.addEventListener('change', () => {
    if (dark.checked) {
        body.classList.toggle('darkmode');
        nav.classList.add('darkmode');
        a.forEach(link => {
            link.classList.add('darkmodep');
        });
        icono.forEach(nose=>{
            nose.classList.add('oscuro')
        })
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('darkmode');
        nav.classList.remove('darkmode');
        a.forEach(link => {
            link.classList.remove('darkmodep');
        });
        icono.forEach(nose=>{
            nose.classList.remove('oscuro')
        })
        localStorage.setItem('darkMode', 'disabled');
    }
});

abrir.addEventListener("click",()=>{
    nav.classList.add("visible")
    switc.classList.add("visible")
})
cerrar.addEventListener("click",()=>{
    nav.classList.remove("visible")
    switc.classList.remove("visible")
})