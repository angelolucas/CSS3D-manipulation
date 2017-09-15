var selector = {
  objectContainer: document.querySelector('.object-container'),
  object: document.querySelector('.object'),
  axes: document.querySelector('.axes'),
  printResult: document.querySelector('.print-result')
};

var control = {
  transform: {
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    translate: {
      x: 0,
      y: 0,
      z: 0
    },
    scale: {
      xyz: 1,
      x: 1,
      y: 1,
      z: 1,
    },
    perspective: {
      apply: false,
      value: 4000
    }
  },
  transformOrigin: {
    x: 50,
    y: 50,
    z: -50
  },
  perspective: {
    value: 400,
    x: 50,
    y: 50
  },
  preserve3d: true
};

var property = {
  transform: '',
  transformOrigin: '',
  perspective: '',
  perspectiveOrigin: '',
  preserve3d: ''
};

var transform = function() {
  property.transform = 'transform: ';
  var initValue = property.transform;

  if (control.transform.rotate.x != 0)
    property.transform += 'rotateX(' + control.transform.rotate.x + 'deg) ';

  if (control.transform.rotate.y != 0)
    property.transform += 'rotateY(' + control.transform.rotate.y + 'deg) ';

  if (control.transform.rotate.z != 0)
    property.transform += 'rotateZ(' + control.transform.rotate.z + 'deg) ';

  if (control.transform.translate.x != 0)
    property.transform += 'translateX(' + control.transform.translate.x + 'px) ';

  if (control.transform.translate.y != 0)
    property.transform += 'translateY(' + control.transform.translate.y + 'px) ';

  if (control.transform.translate.z != 0)
    property.transform += 'translateZ(' + control.transform.translate.z + 'px) ';

  if (control.transform.scale.x != 1)
    property.transform += 'scaleX(' + control.transform.scale.x.toFixed(3) + ') ';

  if (control.transform.scale.y != 1)
    property.transform += 'scaleY(' + control.transform.scale.y.toFixed(3) + ') ';

  if (control.transform.scale.z != 1)
    property.transform += 'scaleZ(' + control.transform.scale.z.toFixed(3) + ') ';

  if (control.transform.scale.xyz != 1) {
    property.transform +=
      'scale3d(' +
         control.transform.scale.xyz.toFixed(3) + ', ' +
         control.transform.scale.xyz.toFixed(3) + ', ' +
         control.transform.scale.xyz.toFixed(3) +
       ') ';
  }

  if (control.transform.perspective.apply === true)
    property.transform += 'perspective(' + control.transform.perspective.value + 'px) ';

  /* Hide transform if it's empty,
  * put a final comma if there's value */
  if (property.transform === initValue) {
    property.transform = '';
  } else {
    property.transform += '; ';
  }

  applyObjectStyle();
};

// Transform origin
var transformOrigin = function() {
  property.transformOrigin =
    'transform-origin: ' +
      control.transformOrigin.x + '% ' + control.transformOrigin.y + '% ' + control.transformOrigin.z + 'px; ';

  // Move the axes to show the transform-origin location
  selector.axes.setAttribute('style',
    'top: ' + control.transformOrigin.y + '%;' +
    'left: ' + control.transformOrigin.x + '%;' +
    'transform: translate3d(50%, 50%, ' + control.transformOrigin.z + 'px); '
  );

  applyObjectStyle();
};

// Perspective
var perspective = function() {
  property.perspective = 'perspective: ' + control.perspective.value + 'px; ';

  applyObjectContainerStyle();
};

// Perspective origin
var perspectiveOrigin = function() {
  property.perspectiveOrigin =
    'perspective-origin: ' +
      control.perspective.x + '% ' +
      control.perspective.y + '%; ';

  applyObjectContainerStyle();
}

// Transform-style preserve-3d
var preserve3d = function() {
  if (control.preserve3d === true) {
    selector.objectContainer.classList.add('preserve-3d');
    property.preserve3d = 'transform-style: preserve-3d';

  } else {
    selector.objectContainer.classList.remove('preserve-3d');
    property.preserve3d = 'transform-style: initial';
  }

  printValues();
}

// Applies the values in the object container
var applyObjectContainerStyle = function() {

  selector.objectContainer.setAttribute('style', property.perspective + property.perspectiveOrigin);

  printValues();
};

// Applies the values in the object
var applyObjectStyle = function() {
  selector.object.setAttribute('style',
    property.transform +
    property.transformOrigin
  );

  printValues();
};

// Print values
var printValues = function() {
  selector.printResult.innerHTML =
    '<span class="print-result__selector">.object-container</span> { ' +
      '<span class="print-result__value">' + property.perspective + '</span>' +
      '<span class="print-result__value">' + property.perspectiveOrigin + '</span>'
    +'}<br><br>'+
    '<span class="print-result__selector">.object-container *</span> { ' +
      '<span class="print-result__value">' + property.preserve3d + '</span>' +
    '} <br><br>' +
    '<span class="print-result__selector">.object</span> {' +
      '<span class="print-result__value">' + property.transformOrigin + '</span>' +
      '<span class="print-result__value">' + property.transform + '</span>'
    + '}' ;
}

window.onload = function() {
  transform();
  transformOrigin();
  perspective();
  perspectiveOrigin();
  preserve3d();
}
