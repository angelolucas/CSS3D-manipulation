var rotation = {
  x: 0,
  y: 0
};

$(document).ready(function() {
  var prevValues = {
    x: 0,
    y: 0
  };
  var rotating = false;

  $('.object-container').on('mousedown ', function(e) {
    var startX = e.pageX;
    var startY = e.pageY;

    $('.object-container').on('mousemove', function(e) {
      var deltaX;
      var deltaY;

      if (!rotating) {
        deltaX = startX - e.pageX;
        deltaY = startY - e.pageY;
        rotating = true;
      } else {
        deltaX = prevValues.x - e.pageX;
        deltaY = prevValues.y - e.pageY;
      }
      prevValues.x = e.pageX;
      prevValues.y = e.pageY;

      rotation.x += deltaY * 100 / 360;
      rotation.y -= deltaX * 100 / 360;

      // Keep degrees from 0˚ to 360˚
      if (rotation.x > 360) {
        rotation.x -= 360;
      } else if (rotation.x < 0) {
        rotation.x += 360;
      }

      if (rotation.y > 360) {
        rotation.y -= 360;
      } else if (rotation.y < 0) {
        rotation.y += 360;
      }

      control.transform.rotate.x = rotation.x.toFixed(3);
      control.transform.rotate.y = rotation.y.toFixed(3);

      transform();

    });

    $('.object-container').on('mouseup', function(e) {
      console.log('mouseup', rotating);
      $('.object-container').off('mousemove');
      $('.object-container').off('mouseup');
      rotating = false;
      prevValues.x = 0;
      prevValues.y = 0;
    });
  });
});
