# Import file "Stream TV and Movies Live and Online  Hulu 01"
data = JSON.parse Utils.domLoadDataSync "http://127.0.0.1:8887/imported/Stream%20TV%20and%20Movies%20Live%20and%20Online%20%20Hulu%2001%401x"
console.log data
map = Framer.Importer.load("http://127.0.0.1:8887/imported/Stream%20TV%20and%20Movies%20Live%20and%20Online%20%20Hulu%2001%401x", scale: .1)
console.log(map)
Utils.globalLayers(map)


topParent._element.style.overflow='visible'



$(document).ready ->
objAnimate = $('div[name*="animate"]')
console.log objAnimate

	#Velocity($('.this'),{left:50})
#animation = (obj)->
	#obj.each (i, element) ->
#console.log(i)			
#$(this).velocity(left:50, { delay:i*200, easing:'easeInOutQuad'})

console.log($('body'))
tl = new TimelineMax
i=0
tl= new TimelineMax
spotsIn = (obj) ->
  tl = new TimelineMax
  tl.staggerTo obj, 1,
    x:'+=615'
    repeat:100
    repeatDelay:1
    yoyo:true
    ease: EaseLookup.find("easeInOutElastic").config(1,1)
    cycle: delay: ->
      Math.exp i++/20 ,.1,
  tl
  
spotsIn(objAnimate).play()



