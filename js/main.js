/**
  * Main JS File
  *
  * @package  hdy
  * @author   Kabolobari Benakole <i@kb.life>
*/

// Re-wrap images and iframes with figure element
new Vue({
    data: {
        contentImages: document.querySelectorAll('[content] p img'),
        iframes: document.querySelectorAll('iframe'),
    },
    created() {
        // Replacing all images with figure and caption...
        if (this.contentImages) {
            this.contentImages.forEach((element, i) => {  
                let parentImg    = element.closest('p'),
                    figure       = document.createElement('figure')
                figure.innerHTML = `
                    <img src="${element.src}" alt="${element.alt}" class="preferred-image-heights">
                    <figcaption>${element.alt}</figcaption>
                `
                parentImg.parentNode.replaceChild(figure, parentImg)
            })
        }
        
        // Replacing all iframes with figure and figcaption...
        if (this.iframes) {
            this.iframes.forEach(element => {
                let figure       = document.createElement('figure')
                figure.classList.add('video-wrapper')    
                figure.innerHTML = `
                    <iframe src="${element.src}" frameborder="0" allowfullscreen></iframe>
                `
                element.parentNode.replaceChild(figure, element)
            })
        }
    },
})


var mobileNav = document.querySelector(".mobile-nav");
var button = document.querySelector(".nav-menu");

function showmenu(x) {
    mobileNav.classList.toggle("open-nav");
    button.classList.toggle("change");
}


var body = document.body;
var element = document.querySelector(".sticky-nav");

//Update DOM on scroll
window.onload = function () {
    var scrollAmt = window.pageYOffset || document.documentElement.scrollTop;

	if(window.innerHeight >= scrollAmt) {
         element.style.opacity = 0;
    } else {
        element.style.opacity = 1;
    }
}

document.addEventListener("scroll", function() { 

    var scrollAmt = window.pageYOffset || document.documentElement.scrollTop;

	if(window.innerHeight >= scrollAmt) {
         element.style.opacity = 0;
    } else {
        element.style.opacity = 1;
    }

});
