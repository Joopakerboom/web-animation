var box = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1) > img');

var Info1 = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)');
var Info2 = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)');

var Even = document.querySelector('main > section:nth-of-type(2) #Even');
var Oneven = document.querySelector('main > section:nth-of-type(2) #Oneven');

var intro = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1)');
var docHeight = intro.offsetHeight;

var artwork = document.querySelector('main > section:nth-of-type(2) > div:nth-of-type(1)');
var docHeight2 = artwork.offsetHeight;

//ARTWORK ELEMENTEN
var artworkEl1 = document.querySelector('main > section:nth-of-type(2) #London_underground');
var artworkEl2 = document.querySelector('main > section:nth-of-type(2) #Overlay_london');
var artworkEl3 = document.querySelector('main > section:nth-of-type(2) #Nose');
var artworkEl4 = document.querySelector('main > section:nth-of-type(2) #Snorharen_Group_1');
var artworkEl5 = document.querySelector('main > section:nth-of-type(2) #Snorharen_Group_2');
var artworkEl6 = document.querySelector('main > section:nth-of-type(2) #Mouth');
var artworkEl7 = document.querySelector('main > section:nth-of-type(2) #Zoo');
var artworkEl8 = document.querySelector('main > section:nth-of-type(2) #Even');
var artworkEl9 = document.querySelector('main > section:nth-of-type(2) #Oneven');
var artworkEl10 = document.querySelector('main > section:nth-of-type(2) #Giraffe');

//DARK MODE
var body = document.querySelector('body');
var darkModeButton = document.querySelector('body > header > button');

window.addEventListener('load', function () {
    window.addEventListener('scroll', function () {
        // normalize scroll position as percentage
        var scrolled = window.scrollY / (docHeight - window.innerHeight) + 1;
        var transformValue = 'scale(' + scrolled + ')';

        var scrolledBlur = window.scrollY / (docHeight - window.innerHeight);
        var blurValue = 'blur(' + scrolledBlur + 'px)';

        var scrolledOpacity = -window.scrollY / (docHeight - window.innerHeight) + 1;
        var opacityValue = scrolledOpacity;

        var scrolledEven = window.scrollY / (docHeight2 - window.innerHeight) * 100 - 100;
        var translateValueEven = 'translate(' + scrolledEven + 'vw,0px)';

        var scrolledOneven = -window.scrollY / (docHeight2 - window.innerHeight) * 100 + 100;
        var translateValueOneven = 'translate(' + scrolledOneven + 'vw,0px)';

        //      console.log(scrolled);
        //      console.log(blurValue);
        //      console.log(translateValueEven);
        //      console.log(translateValueOneven);
//        console.log(opacityValue)

        box.style.transform = transformValue;
//              box.style.webkitFilter = blurValue;

        Info1.style.opacity = opacityValue;
        Info2.style.opacity = opacityValue;

        Even.style.transform = translateValueEven;
        Oneven.style.transform = translateValueOneven;

    }, false);

}, false);


window.addEventListener("scroll", function(){
  if (window.pageYOffset >= 2300){
      console.log("check1");
      artworkEl1.classList.add("artappear");
      artworkEl2.classList.add("artappear");
      artworkEl3.classList.add("artappear");
      artworkEl4.classList.add("artappear");
      artworkEl5.classList.add("artappear");
      artworkEl6.classList.add("artappear");
      artworkEl7.classList.add("artappear");
      
      darkModeButton.classList.add("buttonappear");
      }
    
    else {
        artworkEl1.classList.remove("artappear");
      artworkEl2.classList.remove("artappear");
      artworkEl3.classList.remove("artappear");
      artworkEl4.classList.remove("artappear");
      artworkEl5.classList.remove("artappear");
      artworkEl6.classList.remove("artappear");
      artworkEl7.classList.remove("artappear");
        
        darkModeButton.classList.remove("buttonappear");
    }
    
},false);


function darkMode() {
    body.classList.add("darkmode");
    darkModeButton.classList.add("darkmode");
    artworkEl1.classList.add("darkmode");
    artworkEl2.classList.add("darkmode");
    artworkEl3.classList.add("darkmode");
    artworkEl4.classList.add("darkmode");
    artworkEl5.classList.add("darkmode");
    artworkEl7.classList.add("darkmode");
    artworkEl8.classList.add("darkmode");
    artworkEl9.classList.add("darkmode");
}

function lightMode() {
    body.classList.remove("darkmode");
    darkModeButton.classList.remove("darkmode");
      artworkEl1.classList.remove("darkmode");
    artworkEl2.classList.remove("darkmode");
    artworkEl3.classList.remove("darkmode");
    artworkEl4.classList.remove("darkmode");
    artworkEl5.classList.remove("darkmode");
    artworkEl7.classList.remove("darkmode");
    artworkEl8.classList.remove("darkmode");
    artworkEl9.classList.remove("darkmode");
}

function giraffeMode() {
    artworkEl10.classList.add("giraffeanimation");
}

function giraffeModeOff() {
    artworkEl10.classList.remove("giraffeanimation");
}


darkModeButton.addEventListener("mouseover", darkMode);
darkModeButton.addEventListener("mouseout", lightMode);

artworkEl1.addEventListener("mouseover", giraffeMode);
artworkEl1.addEventListener("mouseout", giraffeModeOff);

