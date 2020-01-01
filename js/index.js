//fullpagejs

new fullpage('#fullPage', {
    autoScrolling:true
});

  // move section down one
  $(document).on('click', '#moveDown', function(){
    fullpage_api.moveSectionDown();
  });

//animations

// TweenMax.to('#cta', 1, {opacity: 1, x: 0, ease:Linear.easeIn});
// document.getElementById('cta').addEventListener('click', function() {
//     TweenMax.to('.panel', 1, {scaleY: 1, height: '100vh', ease:Circ.easeIn});
//     TweenMax.to('#img', 1, {opacity: 1, y: 0, delay: 1, ease:Linear.easeIn});
//     TweenMax.to('#lorem', 1, {opacity: 1, x: 0, delay: 1.5, ease:Linear.easeIn});
  
// });