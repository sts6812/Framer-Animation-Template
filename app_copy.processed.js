(function() {
    var data, i, map, objAnimate, spotsIn, tl;

    data = JSON.parse(Utils.domLoadDataSync("http://127.0.0.1:8887/imported/Stream%20TV%20and%20Movies%20Live%20and%20Online%20%20Hulu%2001%401x"));

    console.log(data);

    map = Framer.Importer.load("http://127.0.0.1:8887/imported/Stream%20TV%20and%20Movies%20Live%20and%20Online%20%20Hulu%2001%401x", {
      scale: .1
    });

    console.log(map);

    Utils.globalLayers(map);

    topParent._element.style.overflow = 'visible';

    $(document).ready(function() {});

    objAnimate = $('div[name*="animate"]');

    console.log(objAnimate);

    console.log($('body'));

    tl = new TimelineMax;

    i = 0;

    tl = new TimelineMax;

    spotsIn = function(obj) {
      tl = new TimelineMax;
      tl.staggerTo(obj, 1, {
          x: '+=615',
          repeat: 100,
          repeatDelay: 1,
          yoyo: true,
          ease: EaseLookup.find("easeInOutElastic").config(1, 1),
          cycle: {
            delay: function() {
              return Math.exp(i++/ 20, .1);
              }
            }
          });
        return tl;
      };

      spotsIn(objAnimate).play();

    }).call(this);