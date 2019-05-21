var box = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1) > img');
var box2 = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1) > img:nth-of-type(2)');

//HEADER
var undergroundInfo = document.querySelector('body > header div:nth-of-type(1) img');

var Info1 = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)');
var Info2 = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)');

var Even = document.querySelector('main > section:nth-of-type(2) #Even');
var Oneven = document.querySelector('main > section:nth-of-type(2) #Oneven');

var intro = document.querySelector('main > section:nth-of-type(1) > div:nth-of-type(1)');
var docHeight = intro.offsetHeight;

var artwork = document.querySelector('main > section:nth-of-type(2) > div:nth-of-type(1)');
var artworkText1 = document.querySelector('main > section:nth-of-type(2) > div:nth-of-type(1) > div > h3:nth-of-type(1)');
var artworkText2 = document.querySelector('main > section:nth-of-type(2) > div:nth-of-type(1) > div > h3:nth-of-type(2)');
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

var artworkEl11 = document.querySelector('main > section:nth-of-type(2) #Oneven_13');
var artworkEl12 = document.querySelector('main > section:nth-of-type(2) #Oneven_14');
var artworkEl13 = document.querySelector('main > section:nth-of-type(2) #Oneven_15');
var artworkEl14 = document.querySelector('main > section:nth-of-type(2) #Oneven_17');
var artworkEl15 = document.querySelector('main > section:nth-of-type(2) #Oneven_18');

var oogLinks = document.querySelector('main > section:nth-of-type(2) #Oneven_4');
var oogRechts = document.querySelector('main > section:nth-of-type(2) #Oneven_5');

//SNOR
var noseGroup1 = document.querySelector('main > section:nth-of-type(2) #Snorharen_Group_1');
var noseGroup1Detail1 = document.querySelector('main > section:nth-of-type(2) #Snorharen_Group_1 > #Snorharen_1');
var noseGroup1Detail2 = document.querySelector('main > section:nth-of-type(2) #Snorharen_Group_1 > #Snorharen_2');
var noseGroup1Detail3 = document.querySelector('main > section:nth-of-type(2) #Snorharen_Group_1 > #Snorharen_3');
var noseGroup2 = document.querySelector('main > section:nth-of-type(2) #Snorharen_Group_2');
var noseHoverCircle = document.querySelector('main > section:nth-of-type(2) > div:nth-of-type(1) > div > div');

//ZOO INHOUD
var zooInhoud1 = document.querySelector('main > section:nth-of-type(2) #Zoo1');
var zooInhoud2 = document.querySelector('main > section:nth-of-type(2) #Zoo2');

//DARK MODE
var body = document.querySelector('body');
var darkModeButton = document.querySelector('body > header > button');

//HEADER SCROLL
;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

// bron hier
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
        
//         var scrolledText = window.scrollY / (docHeight2 - window.innerHeight) * 100 - 100;
//        var translateValueText = 'translate(' + scrolledText + 'vw,0px)';

        //      console.log(scrolled);
        //      console.log(blurValue);
        //      console.log(translateValueEven);
        //      console.log(translateValueOneven);
//        console.log(opacityValue)

        box.style.transform = transformValue;
        box2.style.transform = transformValue;
//              box.style.webkitFilter = blurValue;

        Info1.style.opacity = opacityValue;
        Info2.style.opacity = opacityValue;

        Even.style.transform = translateValueEven;
        Oneven.style.transform = translateValueOneven;
        
//        artworkText1.style.transform = translateValueText;
//        artworkText2.style.transform = translateValueText;

    }, false);

}, false);


window.addEventListener("scroll", function(){
  if (window.pageYOffset >= 2300){
      artworkEl1.classList.add("artappear");
      artworkEl2.classList.add("artappear");
      artworkEl3.classList.add("artappear");
      artworkEl4.classList.add("artappear");
      artworkEl5.classList.add("artappear");
      artworkEl6.classList.add("artappear");
      artworkEl7.classList.add("artappear");
      
      darkModeButton.classList.add("buttonappear");
      
      artworkText1.classList.add("artappear");
      artworkText2.classList.add("artappear");
      
      artworkEl11.classList.add("staartanimation");
      artworkEl12.classList.add("staartanimation");
      artworkEl13.classList.add("staartanimation");
      artworkEl14.classList.add("staartanimation");
      artworkEl15.classList.add("staartanimation");
      }
//    
//     if (window.screen.width <= 1024 && window.pageYOffset >= 2150){
//         console.log("check1");
//      artworkEl1.classList.add("artappear");
//      artworkEl2.classList.add("artappear");
//      artworkEl3.classList.add("artappear");
//      artworkEl4.classList.add("artappear");
//      artworkEl5.classList.add("artappear");
//      artworkEl6.classList.add("artappear");
//      artworkEl7.classList.add("artappear");
//      
//      darkModeButton.classList.add("buttonappear");
//      
//      artworkText1.classList.add("artappear");
//      artworkText2.classList.add("artappear");
//      
//      artworkEl11.classList.add("staartanimation");
//      artworkEl12.classList.add("staartanimation");
//      artworkEl13.classList.add("staartanimation");
//      artworkEl14.classList.add("staartanimation");
//      artworkEl15.classList.add("staartanimation");
//      }
    
    else {
        artworkEl1.classList.remove("artappear");
      artworkEl2.classList.remove("artappear");
      artworkEl3.classList.remove("artappear");
      artworkEl4.classList.remove("artappear");
      artworkEl5.classList.remove("artappear");
      artworkEl6.classList.remove("artappear");
      artworkEl7.classList.remove("artappear");
        
        darkModeButton.classList.remove("buttonappear");
        
        artworkText1.classList.remove("artappear");
      artworkText2.classList.remove("artappear");
        
        artworkEl11.classList.remove("staartanimation");
      artworkEl12.classList.remove("staartanimation");
      artworkEl13.classList.remove("staartanimation");
      artworkEl14.classList.remove("staartanimation");
      artworkEl15.classList.remove("staartanimation");
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
    
    oogLinks.classList.add("darkmode");
    oogRechts.classList.add("darkmode");
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
    
    oogLinks.classList.remove("darkmode");
    oogRechts.classList.remove("darkmode");
}

function giraffeMode() {
    artworkEl1.classList.add("giraffeanimation");
    artworkEl10.classList.add("giraffeanimation");
}

function giraffeModeOff() {
    artworkEl1.classList.remove("giraffeanimation");
    artworkEl10.classList.remove("giraffeanimation");
}

function noseModeHover() {
    noseHoverCircle.classList.add("nosemode");
}

function noseModeHoverOut() {
    noseHoverCircle.classList.remove("nosemode");
    noseHoverCircle.style.transform = 'scale(1)';
}

var more = 2;

function noseMode() {
    artworkEl3.classList.add("nosemode");
    noseGroup1.classList.add("nosemode");
//    noseGroup1Detail1.classList.add("nosemode");
//    noseGroup1Detail2.classList.add("nosemode");
//    noseGroup1Detail3.classList.add("nosemode");
    
    noseGroup2.classList.add("nosemode");
    
    noseHoverCircle.style.transform = 'scale(' + more++ + ')';
    
    setTimeout(function(){
    artworkEl3.classList.remove("nosemode");
    noseGroup1.classList.remove("nosemode");
   noseGroup2.classList.remove("nosemode");
},1000);
}

window.addEventListener('keydown', function(e) {
    if (e.keyCode === 32) {
        zooInhoud1.classList.add("zoorotation");
        zooInhoud2.classList.add("zoorotation");
    }
    
    if (e.keyCode === 8) {
        zooInhoud1.classList.remove("zoorotation");
        zooInhoud2.classList.remove("zoorotation");
    }
}, false);

darkModeButton.addEventListener("mouseover", darkMode);
darkModeButton.addEventListener("mouseout", lightMode);

artworkEl1.addEventListener("click", giraffeMode);
artworkEl1.addEventListener("mouseout", giraffeModeOff);

artworkEl3.addEventListener("mouseover", noseModeHover);
artworkEl3.addEventListener("mouseout", noseModeHoverOut);
artworkEl3.addEventListener("click", noseMode);

window.addEventListener("scroll", function() {
    undergroundInfo.style.transform = "rotate("+window.pageYOffset+"deg)";
});

