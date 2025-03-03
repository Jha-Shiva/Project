const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

//gsap to animate
gsap.from('.nlink',{
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity:0
})

document.querySelector('#ftext button')
.addEventListener('mouseover',()=>{
    gsap.to('.future video',{
        opacity: 1,
        duration:1,
        ease: Power4
    })
})

document.querySelector('#ftext button')
.addEventListener('mouseleave',()=>{
    gsap.to('.future video',{
        opacity: 0,
        duration:1,
        ease: Power4
    })
})