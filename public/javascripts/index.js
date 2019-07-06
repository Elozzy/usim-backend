
//bacground slide
$(function() {
  var body = $('#intro');
  var backgrounds = new Array(
  'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("css/img/principald.jpg")',
  'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("css/img/teacherd.jpg")',
  'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("css/img/ph1d.jpg")',
  'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("css/img/parentsd.jpg")',
  );
  //Photo by Jopwell x PGA from Pexels
  //Photo by rawpixel.com from Pexels
  //Photo 1 by Ben White on Unsplash
  //Photo by Eye for Ebony on Unsplash
  var words = $('strong.word');
  var changeword = new Array('Perform everything from managing staff to admitting students within minutes',
  'Organized classroom operations, for increased productivity', 
  'Stay connected to your classmates and academia outside the school premises',
   "Be actively involved in your child's academic growth");
  var current = 0;
  var nW = 0;

  function nextBackground() {
  body.css({
  'background-image':
   backgrounds[current = ++current % backgrounds.length], 'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center'
});
words.text(changeword[nW = ++nW % changeword.length]).delay(6000);
words.fadeOut(2000);
words.fadeIn();
setTimeout(nextBackground, 8000);
  }
  setTimeout(nextBackground, 8000)
  words.text(changeword[0]);
  body.css('background', backgrounds[0]);
  });
 

  //navbar toggle
  (function(){
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function(){
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });
  (function(){
    $('#about').click(function(){
      $('.learnmore').scrollIntoView(true);
    });
  });

    //control link hovers
    $('#sch, #tch, #prt, #std').hover(function(){
      $(this).toggleClass('has-text-success');
    });
  });


  