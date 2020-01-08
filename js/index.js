//fullpagejs

new fullpage("#fullPage", {
  autoScrolling: true
});

// move section down one
$(document).on("click", "#moveDown", function () {
  fullpage_api.moveSectionDown();
});

//animations
TweenMax.to(".header-bg", 1, {
  // delay: 0.3,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.to("#a1", 3, {
  // delay: 0.3,
  opacity: 1,
  y: -50,
  ease: Expo.easeInOut
});

TweenMax.to("#a2", 3, {
  delay: 0.3,
  opacity: 1,
  y: -60,
  ease: Expo.easeInOut
});

TweenMax.to("#a3", 3, {
  delay: 0.6,
  opacity: 1,
  y: -70,
  ease: Expo.easeInOut
});

TweenMax.to(".logo", 3, {
  // delay: 0.7,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.to(".phone", 3, {
  // delay: 0.7,
  opacity: 1,
  ease: Expo.easeInOut
});
TweenMax.to(".move-down ", 3, {
  // delay: 0.7,
  opacity: 1,
  ease: Expo.easeInOut
});

// animations on scroll
var tween = new TimelineMax()
  .add(
    TweenMax.to(".a5", 0.3, {
      opacity: 1,
      delay: 0.1
    })
  )
  .add(
    TweenMax.to(".line", 0.9, {
      width: "7%",
      delay: 0.2
    })
  )
  .add(
    TweenMax.to("#first-box", 0.5, {
      opacity: 1,
      delay: 0.1
    })
  )
  .add(
    TweenMax.to("#second-box", 0.5, {
      opacity: 1,
      delay: 0.2
    })
  )
  .add(
    TweenMax.to("#third-box", 0.5, {
      opacity: 1,
      delay: 0.3
    })
  );

// scrolmagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".s2"
    // duration: 1000,
  })
  .setTween(tween)
  .addTo(controller);

// section 3 animation

var tween2 = new TimelineMax().add(
  TweenMax.to(".line2", 2, {
    width: "15%",
    delay: 0.3
  })
);
// doesnt work idk why
// .add(TweenMax.to('.a6', 0.5, {opacity: 1}))
// .add(TweenMax.to('.a7', 0.5, {opacity: 1}))
// .add(TweenMax.to('.a8', 0.5, {opacity: 1}));

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".s3"
  })
  .setTween(tween2)
  .addTo(controller2);

// section 4 animation

var tween3 = new TimelineMax().add(
  TweenMax.to(".line3", 2, {
    width: "15%",
    delay: 0.3
  })
);

const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".s4"
  })
  .setTween(tween3)
  .addTo(controller3);

// section 5 animation

var tween4 = new TimelineMax().add(
  TweenMax.to(".line5", 2, {
    width: "15%",
    delay: 0.3
  })
);

const controller4 = new ScrollMagic.Controller();

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".s5"
  })
  .setTween(tween4)
  .addTo(controller4);

// section 6 animation
var tween5 = new TimelineMax().add(
  TweenMax.to(".box-line", 3, {
    width: "36%",
    delay: 0.3
  })
);

const controller5 = new ScrollMagic.Controller();

const scene5 = new ScrollMagic.Scene({
    triggerElement: ".s6"
  })
  .setTween(tween5)
  .addTo(controller5);

// section 7 animation
var tween6 = new TimelineMax().add(
  TweenMax.to(".box-line2", 3, {
    width: "36%",
    delay: 0.3
  })
);

const controller6 = new ScrollMagic.Controller();

const scene6 = new ScrollMagic.Scene({
    triggerElement: "#s7-animation"
  })
  .setTween(tween6)
  .addIndicators()
  .addTo(controller6);

// section 8 animation
var tween7 = new TimelineMax().add(
  TweenMax.to(".line8", 3, {
    width: "15%",
    delay: 0.3
  })
);

const controller7 = new ScrollMagic.Controller();

const scene7 = new ScrollMagic.Scene({
    triggerElement: "#s-8"
  })
  .setTween(tween7)
  .addIndicators()
  .addTo(controller7);

// let clickPlus = 0;

// $('#plus').click(function () {


//   if (clickPlus == 0) {
//     $('.svgs svg:first-child').removeClass('active-svg');
//     $('#two').addClass('active-svg');
//   } else {
//     $('#two').removeClass('active-svg');
//     $('.svgs svg:last-child').addClass('active-svg');
//   }
//   ++clickPlus;
//   console.log(clickPlus);
// });

$('#plus').click(function () {
  var clicks = $(this).data('clicks');
  if (clicks) {
    $('.svgs svg:first-child').removeClass('active-svg');
    $('#two').removeClass('active-svg');
    $('.svgs svg:last-child').addClass('active-svg');
  } else {
    $('.svgs svg:first-child').removeClass('active-svg');
    $('#two').addClass('active-svg');
    // $('#two').removeClass('active-svg');
    $('.svgs svg:last-child').removeClass('active-svg');
  }
  $(this).data("clicks", !clicks);
});

$('#minus').click(function () {
  var clicks = $(this).data('clicks');
  if (clicks) {
    $('.svgs svg:first-child').addClass('active-svg');
    $('#two').removeClass('active-svg');
  } else {
    $('.svgs svg:last-child').removeClass('active-svg');
    $('#two').addClass('active-svg');
    // $('.svgs svg:first-child').addClass('active-svg');
  }
  $(this).data("clicks", !clicks);
});

// let clickMinus = 0;

// $('#minus').click(function () {


//   if (clickMinus == 0) {
//     $('.svgs svg:last-child').removeClass('active-svg');
//     $('#two').addClass('active-svg');
//   } else {
//     $('#two').removeClass('active-svg');
//     $('.svgs svg:first-child').addClass('active-svg');
//   }
//   ++clickMinus;
// });