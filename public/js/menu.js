let but = document.getElementById("toggle1");
let newc = document.getElementById("toggle2");
let custm = document.getElementById("custm");
let ic = document.getElementById("icon");
let ic2 = document.getElementById("icon2");

but.onclick = function(){
    newc.classList.toggle("nav-mobile");
    custm.classList.toggle("custm");
    ic.classList.toggle("not");
    ic2.classList.toggle("not")
};
