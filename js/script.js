document.addEventListener('DOMContentLoaded', function() {
//     const video = document.getElementById('videoMain');
    // $('body').css('overflow', 'hidden')
//     console.log('video', video)
    
    const LANDING = {};
    LANDING.intro = document.querySelector(".preloader-page");
    LANDING.path = LANDING.intro.querySelector("path");

    const svgAnimation = () => {

        anime({
            targets: LANDING.intro,
            duration: 2000,
            easing: "easeInOutSine",
            translateY: "-200vh"
        });

        anime({
            targets: LANDING.path,
            duration: 1500,
            easing: "easeInOutSine",
            d: LANDING.path.getAttribute("pathdata:id")
        });

        setTimeout(function() {
            $('body').css('overflow', '')
        }, 400)
    };
    
    setTimeout(() => {
        svgAnimation()
        start()
    }, 500)
})

function start() {
//     elem.addEventListener('ended',function(){
//         console.log('dadada')
//         $.scrollify.move("#2");
//     })
    let closeTrigger = false;
    let scenes = document.querySelectorAll('.scene')
    setTimeout(() => {
        scenes.forEach((item, i) => {
            setTimeout(() => {
                item.classList.add('js-active')
            }, i * 150)
        });
    }, 1000)
    const prWrapper = document.querySelector('.scene_parallax');
    var parallaxInstance = new Parallax(prWrapper);
    $('.scene5').addClass('dnone');
    // $('.closeIcon').on('click', function () {
    //     console.log('dada')
    // });

    $(document).on('click', '.scene5', function () {
        console.log('click')
        $('body').css('overflow', 'hidden');
        $('.modal_video').addClass('js-active');
        document.querySelector('.modal_video').innerHTML = `
            <div class="modal_wrapper">
                <div class="close_icon">x</div>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5lCRsLjMeso?start=422&autoplay=1&allowfullscreen=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `
    })

    $(document).on('click', '.close_icon', function() {
        $('.modal_video').removeClass('js-active');
        document.querySelector('.modal_video').innerHTML = ``
    });
    $(function() {
        $.scrollify({
          section : ".example-classname",
        });
      });
    let mainDist = 0
    
    function count(e) {
        // init section -executing ones then function called by first time
            if (!e) e = event;
            var cacheX=e.clientX,
                cacheY=e.clientY,
                dist=0,
                speedAvg=0,
                speed=0,
                distLastSec=0, 
                time=0;
            setInterval(function(){
                speed=dist-distLastSec;
                distLastSec=dist;
                time++; 
                speedAvg=dist/time;
                mainDist = dist
            // so, drop info into pane
                // var t=document.getElementById('ttx').getElementsByTagName('span');
                // t[0].innerHTML=dist;
                // t[1].innerHTML=speed;
                // t[2].innerHTML=speedAvg;
            },1000);
        // High magic!! - redefine onmousemove again
            document.onmousemove=function(e){
                if (!e) e = event;
                var dx=e.clientX - cacheX, dy=e.clientY - cacheY
                dist+=Math.sqrt(dx*dx+dy*dy)
                if (dist > 15000) {
                    $('.scene5').removeClass('dnone');
                }
                cacheX=e.clientX;
                cacheY=e.clientY
            }
    }
    document.onmousemove = count;
}
