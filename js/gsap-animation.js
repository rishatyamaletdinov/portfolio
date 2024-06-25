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

gsap.from('[data-slider]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '#section-reviews',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        // toggleActions: 'play none none reverse',
    }
})

function paralax() {
    const preview = document.querySelector('#welcome');
    const initialX = preview.offsetLeft + preview.offsetWidth / 2;
    const initialY = preview.offsetTop + preview.offsetHeight / 2;

    document.addEventListener('mousemove', function(event){
    const mouseX = event.clientX - initialX;
    const mouseY = event.clientY - initialY;
    
    
    gsap.to(
        '#picture-avatar-one', 
        {
            rotationX: -mouseX * 0.02, 
            rotationY: mouseY * 0.02, 
            x:-mouseX * 0.02,
            y: mouseY * 0.02,
            ease: 'power2.out' ,
        },);
        
    gsap.to(
        '#picture-avatar-two', 
        {
            rotationX: mouseX * 0.025, 
            rotationY: -mouseY * 0.025,
            x:-mouseX * 0.02,
            y: mouseY * 0.02, 
            ease: 'power2.out' ,
        },);
        
        gsap.to(
        '#picture-avatar-photo', 
        {
            rotationX: -mouseX * 0.025, 
            rotationY: -mouseY * 0.025, 
            x:-mouseX * 0.02,
            y: mouseY * 0.02,
            ease: 'power2.out' ,
        },);
    }) 
}

paralax()