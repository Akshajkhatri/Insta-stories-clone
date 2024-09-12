var arr = [
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcj_J2-VN9qvsWIk_Edncw_doLe3MkNCXovQ&s", 
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftRA-9bSXp6TCctcElprf_X7wkni4jKtktnOLVTIxyMI5jlcvpFiwr9x1N-lD1UCAMco&usqp=CAU",
    },

    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrHAZiM2CJ1Pp5J3_ri4aOv-vBANMP3Kz5A&s",

        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnEsZDFymV15GvVYH5qkfV0xsEG6YfLlsi4mQ-L0FIZnjnDTA2a3kgzzR78R6Yc89O0c&usqp=CAU",
    },

    {
        dp:"https://i.pinimg.com/736x/71/c8/13/71c813deb4cd1dcbf22c473c68fe8398.jpg",

        story:"https://i.pinimg.com/236x/4c/21/d0/4c21d08d5cc583a01d59c33f0ddf2436.jpg",
    },
    {
        dp:"https://w0.peakpx.com/wallpaper/73/1022/HD-wallpaper-tony-tony-chopper-anime-animes-animesfw-one-piece-thumbnail.jpg",

        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSQQBpnQ2kzjWzHYrYDBhc7TJKeyq3tuw62MJINsJozJ4fROEocZWivxNfKCGBB5uxPU&usqp=CAU",
    }

]

var stories = document.querySelector("#stories")
var clutter ="";

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">  
            </div>`
})


stories.innerHTML = clutter;

stories.addEventListener("click", function(dets){
  
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
       document.querySelector("#full-screen").style.display = "none"
        
    }, 3000)
})


