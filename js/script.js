document.addEventListener('DOMContentLoaded', () => {
    let scenes = document.querySelectorAll('.scene')
    setTimeout(() => {
        scenes.forEach((item, i) => {
            setTimeout(() => {
                item.classList.add('js-active')
            }, i * 150)
        });
    }, 1000)

    // $('.parralax').parallax()

})