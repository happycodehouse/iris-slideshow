function createSlide(el) {
    return {
        el: el,
        imgWrap: el.querySelector('.img_wrap'),
        img: el.querySelector('.img'),
        text: [...el.querySelectorAll('.caption h2')],
        link: el.querySelector('.caption .link')
    };
}

function createSlideshow(el) {
    const slideEls = [...el.querySelectorAll(".slide")];
    const slides = slideEls.map(createSlide);
    const slidesTotal = slides.length;
    const config = {
        clipPath: {
            initial: "inset(10%)",
            final: "inset(20%)",
            hover: "",
        }
    }

    let current = 0;
    let isAnimating = false;

    function init() {
        slideEls[current].classList.add("current");
        gsap.set(slides[current].imgWrap, {  })
    }
}