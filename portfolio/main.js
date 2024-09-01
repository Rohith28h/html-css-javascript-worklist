let menu=document.quearyselector('#menu-icon');
let navabar=document.quearyselector('.navbar');
let header=document.quearyselector('header');


menu.onclick =() =>{
    menu.classlist.toggle('bx-x')
    navbar.classlist.toggle('active')
    
}
window.onscroll=() =>{
    menu.classlist.remove('bx-x')
    navbar.classlist.remove('active')
}
window.addEventListener('scroll',()=>{
    header.classlist.toggle('shadow', window.scrollY>0);
});

const sr= ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true

})

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:200, origin:'top'})

