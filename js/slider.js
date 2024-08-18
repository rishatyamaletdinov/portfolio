$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    
    prevArrow: `
        <button class="slider__arrow slider__arrow--left">
        <svg viewBox="0 0 189 305" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M188.7 35.7L153 0L0 153L153 306L188.7 270.3L71.4 153L188.7 35.7Z" fill="white"/>
        </svg>
        
        </button>
        `,

        nextArrow: `
        <button class="slider__arrow slider__arrow--right">
        <svg viewBox="0 0 189 305" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 270.3L35.7 306L188.7 153L35.7 0L0 35.7L117.3 153L0 270.3Z" fill="white"/>
        </svg>
        
        </button>
        `,
});

