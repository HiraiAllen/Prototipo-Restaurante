const bar = document.getElementById('menu-bar');
const resp = document.getElementById('resp');
let sidebar_ontop= true;

bar.addEventListener('click', showMenu);

function showMenu(){
    
    if (sidebar_ontop == true)   {
        resp.style.top = "0";
        resp.style.visibility = "visible";        
        sidebar_ontop = false;        
    }else{
        resp.style.top = "-100%";
        resp.style.visibility = "hidden";                        
        sidebar_ontop = true;
    }
}
