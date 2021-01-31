let boton=document.querySelector('.comp')
let cuadro=document.querySelector('.share')
let flecha=document.querySelector('.box')


boton.addEventListener('click', () =>{
    if (cuadro.style.opacity == 0 && flecha.style.opacity == 0){
        cuadro.style.opacity = 1;
        flecha.style.opacity = 1;
    }else{
        flecha.style.opacity = 0;
        cuadro.style.opacity = 0;
    }
}
        );