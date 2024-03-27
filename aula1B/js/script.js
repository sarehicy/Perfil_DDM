let Page1 = document.getElementById("lore");
let Page2 = document.getElementById("hobbies");
let Page3 = document.getElementById("infAcd");

let um = document.getElementById('um');
let dois = document.getElementById('dois');
let tres = document.getElementById('tres');

function changeToPage1(){
    Page2.setAttribute("style","display: none");
    Page3.setAttribute("style","display: none");
    Page1.setAttribute("style", "display: block");

    um.setAttribute("style", "color: #631717; font-size: 22px;");
    dois.removeAttribute("style");
    tres.removeAttribute("style");
    
}

function changeToPage2(){
    Page1.setAttribute("style", "display: none");
    Page3.setAttribute("style","display: none");
    Page2.setAttribute("style", "display: block")

    dois.setAttribute("style", "color: #631717; font-size: 22px;");
    um.removeAttribute("style");
    tres.removeAttribute("style");
}

function changeToPage3(){
    Page1.setAttribute("style", "display: none");
    Page2.setAttribute("style","display: none");
    Page3.setAttribute("style", "display: block");

    tres.setAttribute("style", "color: #631717; font-size: 22px;");
    um.removeAttribute("style");
    dois.removeAttribute("style");
}