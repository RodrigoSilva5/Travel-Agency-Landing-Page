// hero banner / header / first screen ---  start

// menu-mobile
const navbar = document.querySelector("#nav-bar").addEventListener("click", () => {
    menumobile.classList.remove("active")
})
const menumobile = document.querySelector("i#menu-mobile")
menumobile.addEventListener("click", () => {
    menumobile.classList.toggle('active')
})
// menu-mobile end


const slides = document.querySelectorAll(".slides")
const slideicons = document.querySelectorAll(".slideicons")
const numofslides = slides.length
var slidenumber = 0

// image slider autoplay
let playerslider;
let repeater = () => {
    playerslider = setInterval(function(){nextslide() }, 6000)
}

repeater()

// stop the image slider autoplay on mouseover
slides[slidenumber].addEventListener("mouseover", () => {
    clearInterval(playerslider)
})
// start the image slider autoplay on mouseout
slides[slidenumber].addEventListener("mouseout", () => {
    repeater();
})

// preview images - next button 
const prevrio = document.querySelector("#prev-rio").addEventListener("click", function() {nextslide()})
const previndo = document.querySelector("#prev-indo").addEventListener("click", function() {nextslide()})
const previsrael = document.querySelector("#prev-israel").addEventListener("click", function() {nextslide()})
const prevbali = document.querySelector("#prev-bali").addEventListener("click", function() {nextslide()})

// second preview slide
const previewback2 = document.querySelectorAll(".preview-image-background:nth-child(even)")
previewback2[0].addEventListener("click", gotoslide3)
previewback2[1].addEventListener("click", gotoslide4)
previewback2[2].addEventListener("click", gotoslide1)
previewback2[3].addEventListener("click", gotoslide2)

// map image buttons 1, 2 , 3, 4
const slideicon1 = document.querySelector("#slideicon-1").addEventListener("click", gotoslide1);
const slideicon2 = document.querySelector("#slideicon-2").addEventListener("click", gotoslide2);
const slideicon3 = document.querySelector("#slideicon-3").addEventListener("click", gotoslide3);
const slideicon4 = document.querySelector("#slideicon-4").addEventListener("click", gotoslide4);

// functions for change background
function gotoslide1(){
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slideicons.forEach((slideicon) => {
        slideicon.classList.remove("active")
    });
    slidenumber = 0;  
    slides[0].classList.add('active');
    slideicons[0].classList.add('active');
    changeback();

}
function gotoslide2(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideicons.forEach((slideicon) => {
        slideicon.classList.remove("active")
    });
    slidenumber = 1;
    slides[1].classList.add('active');
    slideicons[1].classList.add('active');
    changeback();
}
function gotoslide3(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideicons.forEach((slideicon) => {
        slideicon.classList.remove("active")
    });
    slidenumber = 2;
    slides[2].classList.add('active');
    slideicons[2].classList.add('active');
    changeback();
}
function gotoslide4(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideicons.forEach((slideicon) => {
        slideicon.classList.remove("active")
    });
    slidenumber = 3;
    slides[3].classList.add('active');
    slideicons[3].classList.add('active'); 
    changeback();
}

//  function for go to the next slide
function nextslide(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideicons.forEach((slideicon) => {
        slideicon.classList.remove("active")
    });

    slidenumber++

    if(slidenumber > (numofslides - 1 )){
        slidenumber = 0;
    }

    slides[slidenumber].classList.add('active');
    slideicons[slidenumber].classList.add('active');
    
    changeback();

}

// change background
function changeback(){
    const header = document.querySelector("#header")
    const previewback = document.querySelectorAll(".preview-image-background:nth-child(odd)")
    const previewback2 = document.querySelectorAll(".preview-image-background:nth-child(even)")
    

    const containerprev1 = document.querySelector(".container-desc-prev-1")
    if(containerprev1.classList.contains("active")){

        // media query
    if(window.matchMedia("(min-width : 1224px)").matches){
        // the viewport is greater or equal to 1224px 
        header.style.background = (" url(./images/desktop/bali/felfin05-evin--background-bali-desktop.jpg) no-repeat right center ");
        header.style.backgroundSize = ('cover')


    }else{
        // the viewport is less  or equal to 1224px 
        header.style.background = (" url(./images/mobile/bali/felfin05-evin--background-bali-mobile.jpg) no-repeat center");
        header.style.backgroundSize = ('cover')

    }


    previewback[0].style.background = (' url(images/mobile/rio-de-janeiro/joao-victor-valeriote-mobile.jpg) no-repeat center')
    previewback[0].style.backgroundSize = ("cover")


    previewback2[0].style.background = (" url(images/mobile/indonesia/ifan-bima-mobile.jpg) no-repeat center ")
    previewback2[0].style.backgroundSize = ("cover")

    
    }
    
    const containerprev2 = document.querySelector(".container-desc-prev-2")
    if(containerprev2.classList.contains("active")){

    // media query
     if(window.matchMedia("(min-width : 1224px)").matches){
        // the viewport is greater or equal to 1224px 
        header.style.background = (" url(./images/desktop/rio-de-janeiro/raphael-nogueira-background-desktop.jpg) no-repeat ");
        header.style.backgroundSize = ('cover')


    }else{
        // the viewport is less  or equal to 1224px 
        header.style.background = (" url(images/mobile/rio-de-janeiro/raphael-nogueira-background-mobile.jpg) no-repeat center top");
        header.style.backgroundSize = ('cover')
    }
        previewback[1].style.background = (" url(images/mobile/indonesia/ifan-bima-mobile.jpg) no-repeat center ")
        previewback[1].style.backgroundSize = ("cover")

        previewback2[1].style.background = (' url(images/mobile/israel/pontus-wellgraf-mobile.jpg) no-repeat center')
        previewback2[1].style.backgroundSize = ("cover")

    
        }
    
    const containerprev3 = document.querySelector(".container-desc-prev-3")
    if(containerprev3.classList.contains("active")){

    // media query
    if(window.matchMedia("(min-width : 1224px)").matches){
        // the viewport is greater or equal to 1224px 
        header.style.background = (" url(./images/desktop/indonesia/jason-cooper-background-desktop.jpg) no-repeat ");
        header.style.backgroundSize = ('cover')


    }else{
        // the viewport is less  or equal to 1224px 
        header.style.background = (" url(images/mobile/indonesia/jason-cooper-background-mobile.jpg) no-repeat center");
        header.style.backgroundSize = ('cover')

    }        
        previewback[2].style.background = (' url(images/mobile/israel/pontus-wellgraf-mobile.jpg) no-repeat center')
        previewback[2].style.backgroundSize = ("cover")
    
        previewback2[2].style.background = (' url(images/mobile/bali/alexa-west--bali-mobile.jpg) no-repeat center')
        previewback2[2].style.backgroundSize = ("cover")

    
    }
    
    const containerprev4 = document.querySelector(".container-desc-prev-4")
    if(containerprev4.classList.contains("active")){
    // media query
    if(window.matchMedia("(min-width : 1224px)").matches){
        // the viewport is greater or equal to 1224px 
        header.style.background = (" url(./images/desktop/israel/shai-pal-background-desktop.jpg) no-repeat ");
        header.style.backgroundSize = ('cover')


    }else{
        // the viewport is less  or equal to 1224px 
        header.style.background = (" url(images/mobile/israel/shai-pal-background-mobile.jpg) no-repeat center");
        header.style.backgroundSize = ('cover')

    }  
        previewback[3].style.background = (' url(images/mobile/bali/alexa-west--bali-mobile.jpg) no-repeat center')
        previewback[3].style.backgroundSize = ("cover")
    
        previewback2[3].style.background = (' url(images/mobile/rio-de-janeiro/joao-victor-valeriote-mobile.jpg) no-repeat center')
        previewback2[3].style.backgroundSize = ("cover")

        }
    
}

// hero banner / header / first screen ---  end
// testimonials start
const slidestestimonials = document.querySelectorAll(".slides-testimonials")
const numofslidestesti = slidestestimonials.length
var slidenumbertesti = 0

document.querySelector(".fa-chevron-right").addEventListener("click", () => {
    slidestestimonials.forEach((slide) => {
        slide.classList.remove("active")
    })
    slidenumbertesti++

    if(slidenumbertesti > (numofslidestesti - 1 )){
        slidenumbertesti = 0
    }

    slidestestimonials[slidenumbertesti].classList.add("active")
})

document.querySelector(".fa-chevron-left").addEventListener("click", () => {
    slidestestimonials.forEach((slide) => {
        slide.classList.remove("active")
    })
    slidenumbertesti--

    if(slidenumbertesti < 0){
        slidenumbertesti = numofslidestesti - 1
    }

    slidestestimonials[slidenumbertesti].classList.add("active")
})
// media query for adjust svg
window.addEventListener("resize", adjustsvg)

function adjustsvg(){
    if(window.matchMedia("(min-device-width : 0px) and (max-device-width : 700px)").matches){
        // mobile
        document.querySelector("#svg_1").setAttribute("d", "m-16.98707,72.88233l17.82336,-5.86416c17.82336,-5.64494 53.47006,-17.70208 89.11677,-8.76883c35.6467,8.60442 71.29341,38.19923 106.94013,26.3065c35.6467,-11.67351 71.29341,-64.28651 106.94013,-73.05534c35.6467,-8.76883 71.29341,26.3065 89.11677,43.84417l17.82336,17.53767l0,52.613l-17.82336,0c-17.82336,0 -53.47006,0 -89.11677,0c-35.6467,0 -71.29341,0 -106.94013,0c-35.6467,0 -71.29341,0 -106.94013,0c-35.6467,0 -71.29341,0 -89.11677,0l-17.82336,0l0,-52.613l0,-0.00001z")
        document.querySelector("#svg_2").setAttribute("d", "m407.60435,145.74912l-17.69567,3.96431c-17.69719,3.81758 -53.08626,11.96629 -88.62056,6.06587c-35.53202,-5.68033 -71.20928,-25.4098 -106.59949,-17.37113c-35.39172,7.89194 -70.50018,43.18519 -105.912,49.133c-35.41182,5.9478 -71.12699,-17.44984 -88.98458,-29.14866l-17.85759,-11.69882l-0.36403,-35.21454l17.73625,-0.03936c17.73625,-0.03936 53.20874,-0.11807 88.68123,-0.19678c35.47249,-0.07872 70.94498,-0.15743 106.41748,-0.23614c35.47249,-0.07872 70.94498,-0.15743 106.41748,-0.23614c35.47249,-0.07872 70.94498,-0.15743 88.68123,-0.19678l17.73625,-0.03936l0.36403,35.21454l-0.00002,0z")
        
    }else if(window.matchMedia("(min-device-width : 768px)  and (max-device-width : 1224px) and (orientation : landscape)").matches){
    //    tablets landscape
        document.querySelector("#svg_1").setAttribute("d", "m-25.9871,32.3322l43.57254,-2.72961c43.57254,-2.62757 130.71757,-8.23985 217.86263,-4.08166c87.14503,4.00513 174.29008,17.78072 261.43516,12.24498c87.14503,-5.43371 174.29008,-29.92366 261.43516,-34.00532c87.14503,-4.08166 174.29008,12.24498 217.86263,20.40829l43.57254,8.16332l0,24.48995l-43.57254,0c-43.57254,0 -130.71757,0 -217.86263,0c-87.14503,0 -174.29008,0 -261.43516,0c-87.14503,0 -174.29008,0 -261.43516,0c-87.14503,0 -174.29008,0 -217.86263,0l-43.57254,0l0,-24.48995l0,0z")
        document.querySelector("#svg_2").setAttribute("d", "m1023.60438,74.66962l-43.39464,2.11679c-43.39837,2.03844 -130.1821,6.38953 -217.32196,3.23894c-87.13428,-3.03307 -174.62472,-13.56783 -261.41124,-9.2755c-86.79022,4.21398 -172.88581,23.05919 -259.72532,26.23508c-86.83951,3.17589 -174.42292,-9.31753 -218.21464,-15.56423l-43.79171,-6.24671l-0.8927,-18.80317l43.49416,-0.02102c43.49416,-0.02102 130.48245,-0.06304 217.47074,-0.10507c86.98829,-0.04203 173.97659,-0.08406 260.9649,-0.12609c86.98829,-0.04203 173.97659,-0.08406 260.9649,-0.12609c86.98829,-0.04203 173.97659,-0.08406 217.47074,-0.10507l43.49416,-0.02102l0.8927,18.80317l-0.00005,0l-0.00002,-0.00001l-0.00001,0z")
       
    }else if(window.matchMedia("(min-device-width : 701px) and (max-device-width : 1224px)").matches){
// tablets 
        document.querySelector("#svg_1").setAttribute("d", "m-2.98707,93.62626l32.0317,-8.45624c32.0317,-8.14012 96.09506,-25.52678 160.15844,-12.64484c64.06336,12.40776 128.12674,55.0841 192.19013,37.93453c64.06336,-16.83345 128.12674,-92.70251 192.19013,-105.34735c64.06336,-12.64484 128.12674,37.93453 160.15844,63.22422l32.0317,25.28969l0,75.86906l-32.0317,0c-32.0317,0 -96.09506,0 -160.15844,0c-64.06336,0 -128.12674,0 -192.19013,0c-64.06336,0 -128.12674,0 -192.19013,0c-64.06336,0 -128.12674,0 -160.15844,0l-32.0317,0l0,-75.86906l0,-0.00001z")
        document.querySelector("#svg_2").setAttribute("d", "m768.60435,224.78619l-31.90092,6.55773c-31.90366,6.31501 -95.70141,19.79454 -159.76098,10.03411c-64.05545,-9.39636 -128.37274,-42.03269 -192.17255,-28.73519c-63.80253,13.05479 -127.09441,71.4366 -190.93317,81.27542c-63.83876,9.8388 -128.22439,-28.86539 -160.41722,-48.21748l-32.19282,-19.3521l-0.65626,-58.25162l31.97408,-0.06511c31.97408,-0.06511 95.92221,-0.19531 159.87035,-0.32551c63.94814,-0.13022 127.89627,-0.26042 191.84443,-0.39062c63.94814,-0.13022 127.89627,-0.26042 191.84443,-0.39062c63.94814,-0.13022 127.89627,-0.26042 159.87035,-0.32551l31.97408,-0.06511l0.65626,58.25162l-0.00004,0l-0.00002,-0.00002z")
       
    }else if(window.matchMedia("(min-width : 1224px)").matches){
        //large screen 
        document.querySelector("#svg_1").setAttribute("d", "m-30.63961,65.88233l52.35056,-5.86416c52.35056,-5.64494 157.05162,-17.70208 261.75271,-8.76883c104.70106,8.60442 209.40215,38.19923 314.10327,26.3065c104.70106,-11.67351 209.40215,-64.28651 314.10327,-73.05534c104.70106,-8.76883 209.40215,26.3065 261.75271,43.84417l52.35056,17.53767l0,52.613l-52.35056,0c-52.35056,0 -157.05162,0 -261.75271,0c-104.70106,0 -209.40215,0 -314.10327,0c-104.70106,0 -209.40215,0 -314.10327,0c-104.70106,0 -209.40215,0 -261.75271,0l-52.35056,0l0,-52.613l0,-0.00001z")
        document.querySelector("#svg_2").setAttribute("d", "m1221.49659,153.91107l-52.58129,4.32027c-52.5858,4.16036 -157.74163,13.04076 -263.329,6.61053c-105.58059,-6.19037 -211.59276,-27.69137 -316.75197,-18.9309c-105.1637,8.60057 -209.48572,47.06284 -314.70915,53.54471c-105.22343,6.48186 -211.34824,-19.01668 -264.41066,-31.76595l-53.06242,-12.74927l-1.08169,-38.37649l52.70187,-0.04289c52.70187,-0.04289 158.10557,-0.12867 263.50928,-0.21445c105.4037,-0.08579 210.80741,-0.17157 316.21114,-0.25734c105.4037,-0.08579 210.80741,-0.17157 316.21114,-0.25734c105.4037,-0.08579 210.80741,-0.17157 263.50928,-0.21445l52.70187,-0.04289l1.08169,38.37649l-0.00006,0l-0.00003,-0.00001z")
       
    }else if(window.matchMedia("(min-width : 1824px)").matches) {
    //    xlarge screen
        document.querySelector("#svg_1").setAttribute("d", "m-17.98713,29.25058l76.37953,-2.47257c76.37953,-2.38014 229.13851,-7.46392 381.89753,-3.69729c152.75898,3.62797 305.518,16.10635 458.27706,11.09189c152.75898,-4.92203 305.518,-27.1058 458.27706,-30.8031c152.75898,-3.69729 581.47769,21.51348 690.56362,23.85517l-230.24235,-4.29023l-2.04421,28.49991l-76.37953,0c-76.37953,0 -229.13851,0 -381.89753,0c-152.75898,0 -305.518,0 -458.27706,0c-152.75898,0 -305.518,0 -458.27706,0c-152.75898,0 -305.518,0 -381.89753,0l-76.37953,0l0,-22.18378l0,0z")
        document.querySelector("#svg_2").setAttribute("d", "m1814.72882,71.13728l-75.49144,2.37074c-75.49792,2.28299 -226.47111,7.15609 -378.06386,3.62752c-151.58302,-3.39695 -303.78567,-15.19559 -454.76372,-10.38829c-150.9845,4.71955 -300.76057,25.82564 -451.83082,29.38255c-151.07025,3.55691 -303.43461,-10.43537 -379.61681,-17.4315l-76.1822,-6.99614l-1.55299,-21.05902l75.66455,-0.02354c75.66455,-0.02354 226.99362,-0.07061 378.3227,-0.11768c151.32906,-0.04708 302.65813,-0.09415 453.98725,-0.14121c151.32906,-0.04708 302.65813,-0.09415 453.98725,-0.14121c151.32906,-0.04708 302.65813,-0.09415 378.3227,-0.11768l75.66455,-0.02354l1.55299,21.05902l-0.00009,0l-0.00004,-0.00001l-0.00001,-0.00001z")
       
    }else{ 
        console.log("error, media query adjust svg")
    }
}
// testimonials end
// footer
document.querySelector("footer").addEventListener("click", () => { 
    document.querySelector("footer").classList.add("active")
    document.querySelector(".more-information").style.display ="flex"
})
document.querySelector("footer").addEventListener("dblclick", () => {
    document.querySelector("footer").classList.remove("active")
    document.querySelector(".more-information").style.display ="none"  
})