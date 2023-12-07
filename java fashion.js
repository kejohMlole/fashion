let image = document.querySelector(".slider")
let image1 = "https://images.bewakoof.com/uploads/category/desktop/Inside-Desktop-banner_Women-Short-Tops_(1)-1699636386.jpg"
let image2 = "https://images.bewakoof.com/uploads/grid/app/Midsize-banner-720x420-1699355906.jpg"
let image3 = "https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos-1699277122.jpg"


function changeImg(){
    let random = Math.ceil(Math.random()*3)
    if(random ==1){
        image.setAttribute("src",image1)
    }
    if(random == 2){
        image.setAttribute("src",image2)
    }
    if(random == 3){
        image.setAttribute("src",image3)
    }
    console.log(random)
}

let interval = setInterval(()=>{
    changeImg()
},1000)