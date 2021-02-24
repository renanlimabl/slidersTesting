const sliders = document.querySelectorAll('.slick-wrapper')

sliders.forEach((item, index) => {
    const arrowRight = item.querySelector('.arrow-right')
    const arrowLeft = item.querySelector('.arrow-left')
    arrowRight.classList.add(`arrow-right-${index}`)
    arrowLeft.classList.add(`arrow-left-${index}`)
})