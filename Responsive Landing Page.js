window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    if(window.pageYOffset>0){
        navbar.classList.add('Responsive');
    } else{
         navbar.classList.remove('Responsive');

     }
 });