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
