document.addEventListener('DOMContentLoaded', () => {
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
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5lCRsLjMeso?start=422&autoplay=1&allowfullscreen=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    })
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
                if (dist > 30000) {
                    $('.scene5').removeClass('dnone');
                }
                cacheX=e.clientX;
                cacheY=e.clientY
            }
    }
    document.onmousemove = count;
})