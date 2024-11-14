class Carrusel {
    constructor(arr_imgs,tiempo){
        this.imgs = arr_imgs;
        this.indiceImg = 0;
        this.ocultar_todas_menos_la_primera();
        setInterval(()=>{
            this.nextImg();
        },tiempo*1000)
    }

    ocultar_todas_menos_la_primera(){
        let i = 0;
        this.imgs.forEach(img => {
            if(i!=0){
                img.style.display = 'none'
            }else{
                img.style.display = 'block'
            }
        })
    }

    nextImg(){
        this.imgs[this.indiceImg].style.display = 'none';
        if(this.imgs[this.indiceImg+1]){
            this.imgs[this.indiceImg+1].style.display = 'block';
            this.indiceImg += 1
        }else{
            this.imgs[0].style.display = 'block';
            this.indiceImg = 0
        }
    }

}

document.querySelectorAll('.carrusel').forEach(carrusel =>{
    let imgs = [];
    carrusel.querySelectorAll('img').forEach(img => {
        const widthCarrusel = carrusel.clientWidth
        img.style.width = widthCarrusel+'px';
        img.style.animation = 'slide 2s linear infinite'
        imgs.push(img);
    });
    new Carrusel(imgs,2);
})

