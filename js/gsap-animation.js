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
        trigger: '#sectionSkills',
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
        trigger: '#projects',
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
        trigger: '#sectionReviews',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
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

gsap.from('[data-contacts]', 
{
    opacity: 0,
    duration: 1,

    scrollTrigger:{
        trigger: '#contacts',
        start: '80% 95%',
        end:'80% 95%',
        scrub: 2,
    }
})

gsap.from('#footerTextAndLogo', 
{
    x: -1000,
    opacity: 0,

    scrollTrigger:{
        trigger: '#contacts',
        start: '60% 90%',
        end:'60% 90%',
        scrub: 2,
    }
})