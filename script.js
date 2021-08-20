window.onload = () => {
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')
    
    const car = new Image()
    car.src = "/Imagenes/car.png"

    car.onload = function(){                         
        setTimeout(() => {
            ctx.drawImage(car, canvas.width/2 - 50, canvas.height - 200, 100, 200)
        },100);
    }
}