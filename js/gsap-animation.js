gsap.registerPlugin(ScrollTrigger); 

gsap.from('#hero-info', {
    scale:3,
    duration:2.5,
    opacity:0,
    ease:'bounce',
}) 

gsap.from('[data-card-skill]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '#section-skills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        // toggleActions: 'play none none reverse',
    }
})

gsap.from('[data-card-project]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '#project-card-section',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        // toggleActions: 'play none none reverse',
    }
})