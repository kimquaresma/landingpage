$(function(){  //로드후 실행되는 스크립트구현시 사용


    const lenis = new Lenis()
  
    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)


    $(document).mousemove(function(e){
      x=e.clientX;
      y=e.clientY;
    
      gsap.to('.cursor',{
        left:x,
        top:y
      })
    })

    $('.introlink').click(function(){
      lenis.scrollTo('#intro')
    })
    $('.aboutlink').click(function(){
      lenis.scrollTo('#about')
    })
    $('.worklink').click(function(){
      lenis.scrollTo('#work')
    })
    $('.contactlink').click(function(){
      lenis.scrollTo('#contact')
    })
    

    introSlide = new Swiper('.sc-intro .swiper',{
      loop:true,
      speed:3000,
      autoplay:{
        delay:0
      },
      slidesPerView:"auto",
      spaceBetween:20,
      breakpoints:{
        768:{
          spaceBetween:80,
        },
        1024:{
          spaceBetween:100,
        }
      }
    })
  

    

    sloganTl = gsap.timeline({
      scrollTrigger:{
            trigger:".slogan",
            start:"0% 100%",
            end:"100% 0%",
            scrub: 0,
          },
    })
    sloganTl.to('.slogan .top',{xPercent:-50},'a')
    sloganTl.to('.slogan .bot',{xPercent:30},'a')



    $('.work .item').each(function(){
      gsap.to($(this),{
        scrollTrigger:{
          trigger:$(this),
          start:"0% 100%",
          end:"100% 0%",
          scrub: 0,
        },
        width:'90%'
      })
      

    })

    

    gsap.to('.sc-projectimage .top',{
      scrollTrigger:{
        trigger:".work .fourth",
        start:"10% 5%",
        end:"100% 5%",
        scrub: 10,
      },
      xPercent: 10,
    })

    gsap.to('.sc-projectimage .bot',{
      scrollTrigger:{
        trigger:".work .fourth",
        start:"50% 5%",
        end:"100% 5%",
        scrub: 10,
      },
      xPercent: -10,
    })
    
    


});