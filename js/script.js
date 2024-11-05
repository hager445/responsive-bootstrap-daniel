var typed = new Typed('#element', {
    strings: ['designer', 'larry daniels' , 'developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
  });

 const nav = document.querySelector('.my-nav');



 
window.onscroll = function () { 
    if (document.documentElement.scrollTop >= 610 ) {
        nav.classList.add('navbar-light');
    
        
        
        nav.classList.remove('navbar-dark' , 'bg-transparent');
        nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        nav.style.boxShadow = '0px 10px 30px -8px rgba(0, 0, 0, 0.1)';
    } 
    else {
    
        nav.classList.add('navbar-dark' ,'bg-transparent' );
        nav.classList.remove('navbar-light' );
        nav.style.boxShadow = 'none';

        

    }
};