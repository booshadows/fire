//fullpagejs

new fullpage('#fullPage', {
    autoScrolling:true
});

  // move section down one
  $(document).on('click', '#moveDown', function(){
    fullpage_api.moveSectionDown();
  });

//animations
TweenMax.to(".header-bg", 1, {
  // delay: 0.3,
  opacity:1,
  ease: Expo.easeInOut
});

TweenMax.to("#a1", 3, {
  // delay: 0.3,
  opacity:1,
  y: -50,
  ease: Expo.easeInOut
});

TweenMax.to("#a2", 3, {
  delay: 0.3,
  opacity:1,
  y: -60,
  ease: Expo.easeInOut
});

TweenMax.to("#a3", 3, {
  delay: 0.6,
  opacity:1,
  y: -70,
  ease: Expo.easeInOut
});

TweenMax.to(".logo", 3, {
  // delay: 0.7,
  opacity:1,
  ease: Expo.easeInOut
});

TweenMax.to(".phone", 3, {
  // delay: 0.7,
  opacity:1,
  ease: Expo.easeInOut
});
TweenMax.to(".move-down ", 3, {
  // delay: 0.7,
  opacity:1,
  ease: Expo.easeInOut
});

 // animations on scroll
var tween = new TimelineMax()
    .add(TweenMax.to('.a5', 0.3, {opacity: 1, delay: 0.1}))
    .add(TweenMax.to('.line', 0.9, {width: '7%', delay:0.2}))
    .add(TweenMax.to('#first-box', 0.5, {opacity: 1, delay:0.1}))
    .add(TweenMax.to('#second-box', 0.5, {opacity: 1, delay:0.2}))
    .add(TweenMax.to('#third-box', 0.5, {opacity: 1, delay:0.3}));



    // scrolmagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.s2',
  // duration: 1000,
})
.setTween(tween)
.addIndicators()
.addTo(controller);

// section 3 animation

var tween2 = new TimelineMax()
.add(TweenMax.to('.line2', 2, {width: '15%', delay: 0.3}))
// doesnt work idk why
// .add(TweenMax.to('.a6', 0.5, {opacity: 1}))
// .add(TweenMax.to('.a7', 0.5, {opacity: 1}))
// .add(TweenMax.to('.a8', 0.5, {opacity: 1}));

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.s3'
})
.setTween(tween2)
.addIndicators()
.addTo(controller2)

// section 4 animation

var tween3 = new TimelineMax()
.add(TweenMax.to('.line3', 2, {width: '15%', delay: 0.3}))

const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
  triggerElement: '.s4'
})
.setTween(tween3)
.addIndicators()
.addTo(controller3)