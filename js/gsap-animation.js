gsap.registerPlugin(ScrollTrigger); 

gsap.from('#hero-info', {
    scale:3,
    duration:2.5,
    opacity:0,
    ease:'bounce',
}) 

const textElement = document.querySelector('#aboutHeroText');
const textContent = textElement.textContent;
textElement.innerHTML = '';

textContent.split('').forEach(letter => {
    const wrapperForLetter = document.createElement('span');
    wrapperForLetter.textContent = letter;
    textElement.appendChild(wrapperForLetter);
});

gsap.from("#aboutHeroText span",  
    { 
    opacity: 0, 
    scale: 10, 
    stagger: 0.05,
    duration: 0.5,
    scrollTrigger: {
        // markers: true,
        trigger: "#aboutMe",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true
    }
    }
);

gsap.from('#pictureLogo',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers: true,
        trigger: '#aboutMe',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
    }
})

gsap.from('[data-card-skill]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger: '#section-skills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
    }
})

gsap.from('[data-card-project]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger: '#project-card-section',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
    }
})

gsap.from('[data-slider]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger: '#section-reviews',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
    }
})