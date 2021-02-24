const lis = document.querySelectorAll('#slider-nav li')

lis.forEach((li, index) => {   
    li.addEventListener('click', (event) => {
        lis.forEach(li => li.classList.remove('active'))
        const actualLi = event.target
        actualLi.classList.add('active')
        apperFirstSlide(index)
    })
})

function apperFirstSlide(id) {
    const getAllSliders = document.querySelectorAll('.container')
    getAllSliders.forEach((slide, index) => {
        slide.classList.remove('active')
    })
    getAllSliders[id].classList.add('active')
}