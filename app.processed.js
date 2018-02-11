(function() {
  var controller, i, map, objAnimate, tl;

  map = Framer.Importer.load("http://127.0.0.1:8887/imported/Stream%20TV%20and%20Movies%20Live%20and%20Online%20%20Hulu%2001%401x/", {
    scale: .5
  });

  Utils.globalLayers(map);

  $(document).ready(function() {});

  objAnimate = $('div[name*="animate"]');

  i = 0;

  tl = new TimelineMax;

  tl.staggerTo(objAnimate, 1, {
    x: '+=615',
    repeat: 0,
    repeatDelay: 1,
    yoyo: false,
    ease: EaseLookup.find("easeInOutElastic").config(1, 1),
    cycle: {
      delay: function() {
        var iteration;
        iteration = i++;
        console.log($(objAnimate[iteration]).attr('id', iteration));
        return Math.exp(iteration / 20, .1);
      }
    }
  });

  console.log($('div[name*="animate"]'));

  controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '100%'
  }).setTween(tl).triggerElement($('div[name*="animate"]')).addTo(controller);

  new AnimPanel(tl, {
    condition: 6,
    shortcuts: {
      togglePlay: 'p',
      setRangeStart: 'i',
      setRangeEnd: 'o'
    }
  });

  $('.anim-panel').css({
    'z-index': 100,
    'position': 'fixed',
    'bottom': 0,
    'top': 'auto'
  });

}).call(this);