$(function() {
    const lis = document.querySelectorAll('li.slick-slide')
    lis.forEach((li, index) => {
        li.addEventListener('click', (event) => {
            // console.log(index)
            const Allis = document.querySelectorAll('li.slick-slide')
            const onlyLi = document.querySelectorAll('li.slick-slide:not(.slick-cloned)')

            const findTheLi = Array.from(onlyLi).find(item => item.textContent === event.target.textContent)
            let getOnlyIndexOfRealLis;
            if (window.matchMedia("(min-width: 768px)").matches) {
                /* a viewport tem pelo menos 400 pixels de largura */
                getOnlyIndexOfRealLis = (Array.from(Allis).indexOf(findTheLi) - 4)
            } else {
                /* a viewport menos que 400 pixels de largura */
                  getOnlyIndexOfRealLis = (Array.from(Allis).indexOf(findTheLi) - 4)
            }
                    
            


            // lis.forEach(li => li.classList.remove('active-custom-slider'))

            // const actualLi = event.target
            // console.log(actualLi)
            // actualLi.classList.add('active-custom-slider')
            // console.log(Math.abs(getOnlyIndexOfRealLis))
            console.log(getOnlyIndexOfRealLis)
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