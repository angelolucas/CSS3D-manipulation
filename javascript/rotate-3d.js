/*
JS used only for camera rotation, key click event's
*/
$(document).ready(function() {
  
  var winW = $(window).width();
  var winH = $(window).height();
  var $demo = $(".platform-3d__rotate");
  var rotation = {
    x: 70,
    z: 45
  };
  var prevValues = {
    x: 70,
    y: 45
  };
  var rotationActive = false;
  var startAnimTime = 5400;
  var timeout = setTimeout(function() {
    $demo.addClass("ready");
  }, 4400);
  
  $(document).on("mousedown", function(e) {
    var startX = e.pageX;
    var startY = e.pageY;
    
    $(document).on("mousemove", function(e) {
      var deltaX;
      var deltaY;
      if (!rotationActive) {
        deltaX = startX - e.pageX;
        deltaY = startY - e.pageY;
        rotationActive = true;
      } else {
        deltaX = prevValues.x - e.pageX;
        deltaY = prevValues.y - e.pageY;
      }
      prevValues.x = e.pageX;
      prevValues.y = e.pageY;
      
      var degX = deltaX * 100 / 360;
      var degY = deltaY * 100 / 360;
      
      rotation.x += degY;
      rotation.z += degX;
      
      $demo.css("transform", "rotateX("+rotation.x+"deg) rotateZ("+rotation.z+"deg)");
    });
    
    $(document).on("mouseup", function(e) {
      $(document).off("mousemove");
      $(document).off("mouseup");
      rotationActive = false;
      prevValues.x = 0;
      prevValues.y = 0;
    });
  });
  
  $(window).on("resize", function() {
    winW = $(window).width();
    winH = $(window).height();
  });
  
});