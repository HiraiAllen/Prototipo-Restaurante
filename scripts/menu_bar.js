const bar = document.getElementById('menu-bar');
const resp = document.getElementById('resp');

bar.addEventListener('click', showMenu);

function showMenu(){
    resp.classList.toggle('active');
}
