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
  
    // introTextArr = [
    //   'Adaptable',
    //   'excelling',
    //   'challenges',
    //   'communication'
    // ]

    // setInterval(() => {
    //   textRoll();
    // }, introTextArr.length*300);

    // textRoll();
    // function textRoll(){
    //   for (let index = 0; index < introTextArr.length; index++) {
    //     setTimeout(() => {
    //       $('.sc-intro .text-area h2').html(introTextArr[index])
    //     }, 300*index);
    //   }
    // }




    // $(window).on('scroll mousemove', function(e){
    //   $('.cursor').css('left', e.pageX + 'px');
    //   $('.cursor').css('top', e.pageY + 'px');
    //   });



    // let lastScroll = 0;
    // $(window).scroll(function(){
    //   current = $(this).scrollTop();
      
    //   if(current > lastScroll){
    //     $('.header').addClass('hide')
    //   } else {
    //     $('.header').removeClass('hide')
    //   }
    //   lastScroll = current;
    // })


    sloganTl = gsap.timeline({
      scrollTrigger:{
            trigger:".slogan",
            start:"0% 100%",
            end:"100% 0%",
            markers: true,
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
          markers: true,
          scrub: 0,
        },
        width:'90%'
      })
      

    })



    // gsap.to('.slogan .top',{
    //   scrollTrigger:{
    //     trigger:".video2 .inner .text",
    //     start:"10% 5%",
    //     end:"100% 5%",
    //     markers: true,
    //     scrub: 10,
    //   },
    //   xPercent: 30,
    // })
    // gsap.to('.slogan .bot',{
    //   scrollTrigger:{
    //     trigger:".video2 .inner .text",
    //     start:"10% 5%",
    //     end:"100% 5%",
    //     markers: true,
    //     scrub: 10,
    //   },
    //   xPercent: -50,
    // })


    gsap.to('.sc-projectimage .top',{
      scrollTrigger:{
        trigger:".work .fourth",
        start:"10% 5%",
        end:"100% 5%",
        markers: true,
        scrub: 10,
      },
      xPercent: 10,
    })

    gsap.to('.sc-projectimage .bot',{
      scrollTrigger:{
        trigger:".work .fourth",
        start:"50% 5%",
        end:"100% 5%",
        markers: true,
        scrub: 10,
      },
      xPercent: -10,
    })



});