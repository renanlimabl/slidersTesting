$(function() {
    const lis = document.querySelectorAll('li.slick-slide')
    lis.forEach((li, index) => {
        li.addEventListener('click', (event) => {
            // console.log(index)
            const Allis = document.querySelectorAll('li.slick-slide')
            const onlyLi = document.querySelectorAll('li.slick-slide:not(.slick-cloned)')
            const realLis = Math.floor((Allis.length - onlyLi.length ^ 2) / 3)
            
            const getOnlyIndexOfRealLis = (onlyLi.length - index - realLis)            

            // lis.forEach(li => li.classList.remove('active-custom-slider'))

            // const actualLi = event.target
            // console.log(actualLi)
            // actualLi.classList.add('active-custom-slider')
            // console.log(Math.abs(getOnlyIndexOfRealLis))
            apperFirstSlide(Math.abs(getOnlyIndexOfRealLis), event.currentTarget)
        })
    })

    function apperFirstSlide(id, currentTarget) {
        const getAllSliders = document.querySelectorAll('.container')
        getAllSliders.forEach((slide, index) => {
            slide.classList.remove('active')
        })
        const onlyLi = document.querySelectorAll('li.slick-slide:not(.slick-cloned)')

        const lis = document.querySelectorAll('li.slick-slide')
        lis.forEach(li => li.classList.remove('active-custom-slider'))
        currentTarget.classList.add('active-custom-slider')

        // console.log(currentTarget.textContent)

        const AddAgainStyleMenu = Array.from(lis).filter(li => li.textContent === currentTarget.textContent)
        AddAgainStyleMenu.forEach(item => item.classList.add('active-custom-slider'))

        if (onlyLi.length === id) {
            id = 0
        }

        if (getAllSliders[id]) {
            getAllSliders[id].classList.add('active')
        }
    }
})