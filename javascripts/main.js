function display_toggle(month){
    var ul = document.getElementById("ul-" + month);
    var li = document.getElementById("li-" + month);
    if (ul.style.display == "block"){
        li.innerHTML="►  ";
        ul.style.display="none";
    }
    else {
        li.innerHTML="▼  ";
        ul.style.display="block";
    }
}
function open_current_month(){
    var now = new Date();
    var month = now.getMonth()+1;
    while (month>=1){
        if (document.getElementById("ul-" + month) && document.getElementById("li-" + month)){
            display_toggle(month);
            return;
        }
        --month;
    }
}
window.onload = open_current_month;
