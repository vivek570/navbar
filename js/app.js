window.addEventListener('load',()=>{
    const ham = document.querySelector('.ham');
    const menuList = document.querySelector('.menu-list');
    const menu = document.querySelector('.menu');
    const container = document.querySelector('.container');
    ham.addEventListener('click',()=>{
        ham.classList.toggle('make-x');
        menuList.classList.toggle('show');
        menu.classList.toggle('slide');
    });
    
})