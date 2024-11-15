class Carrusel {
    constructor(arr_imgs,tiempo){
        this.imgs = arr_imgs;
        this.indiceImg = 0;
        this.ocultar_todas_menos_la_primera();
        setInterval(()=>{
            this.nextImg();
        },tiempo.split('s')[0]*1000) 
    }

    ocultar_todas_menos_la_primera(){
        let i = 0;
        this.imgs.forEach(img => {
            if(i!=0){
                img.style.display = 'none';
            }else{
                img.style.display = 'block';
            }
        })
    }

    nextImg(){
        this.imgs[this.indiceImg].style.display = 'none';
        if(this.imgs[this.indiceImg+1]){
            this.imgs[this.indiceImg+1].style.display = 'block';
            this.indiceImg += 1;
        }else{
            this.imgs[0].style.display = 'block';
            this.indiceImg = 0;
        }
    }

}

document.querySelectorAll('.carrusel').forEach(carrusel =>{
    let imgs = [];
    const widthCarrusel = carrusel.clientWidth;
    const tiempo = carrusel.getAttribute('data-tiempo');
    carrusel.querySelectorAll('img').forEach(img => {
        img.style.animationDuration = tiempo;
        img.style.width = widthCarrusel+'px';
        imgs.push(img);
    });

    new Carrusel(imgs,tiempo);
});


document.querySelectorAll('.galeria.animacionLateral').forEach(galeria =>{
        galeria.style.left = '0%';
})