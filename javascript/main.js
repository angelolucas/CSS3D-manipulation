var selector = {
  objectContainer: document.querySelector('.object-container'),
  object: document.querySelector('.coca-cola'),
  axes: document.querySelector('.axes'),
  printResult: document.querySelector('.print-result')
};

var value = {
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
    }
  },
  transformOrigin: {
    x: 50,
    y: 50,
    z: -50
  },
  perspective: {
    perspective: 400,
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
  property.transform =
    'transform: ' +
      'rotateX(' + value.transform.rotate.x + 'deg) ' +
      'rotateY(' + value.transform.rotate.y + 'deg) ' +
      'rotateZ(' + value.transform.rotate.z + 'deg) ' +
      'translateX(' + value.transform.translate.x + 'px) ' +
      'translateY(' + value.transform.translate.y + 'px) ' +
      'translateZ(' + value.transform.translate.z + 'px) ' +
      'scaleX(' + value.transform.scale.x.toFixed(3) + ') ' +
      'scaleY(' + value.transform.scale.y.toFixed(3) + ') ' +
      'scaleZ(' + value.transform.scale.z.toFixed(3) + ') ' +
      'scale3d(' +
        value.transform.scale.xyz.toFixed(3) + ', ' +
        value.transform.scale.xyz.toFixed(3) + ', ' +
        value.transform.scale.xyz.toFixed(3) +
      '); ';

  applyTransform();
};

var transformOrigin = function() {
  property.transformOrigin =
    'transform-origin: ' +
      value.transformOrigin.x + '% ' + value.transformOrigin.y + '% ' + value.transformOrigin.z + 'px; ';

  // Move the axes to show the transform-origin location
  selector.axes.setAttribute('style',
    'top: ' + value.transformOrigin.y + '%;' +
    'left: ' + value.transformOrigin.x + '%;' +
    'transform: translate3d(50%, 50%, ' + value.transformOrigin.z + 'px); '
  );

  applyTransform();
};

var applyTransform = function() {
  selector.object.setAttribute('style',
    property.transform +
    property.transformOrigin
  );

  printValues();
};

var perspective = function() {
  property.perspective = 'perspective: ' + value.perspective.perspective + 'px; ';

  applyPerspective();
};

var perspectiveOrigin = function() {
  property.perspectiveOrigin =
    'perspective-origin: ' +
      value.perspective.x + '% ' +
      value.perspective.y + '%; ';

  applyPerspective();
}

var applyPerspective = function() {

  selector.objectContainer.setAttribute('style', property.perspective + property.perspectiveOrigin);

  printValues();
};

var preserve3d = function() {
  if (value.preserve3d === true) {
    selector.objectContainer.classList.add('preserve-3d');
    property.preserve3d = 'transform-style: preserve-3d';

  } else {
    selector.objectContainer.classList.remove('preserve-3d');
    property.preserve3d = 'transform-style: initial';
  }

  printValues();
}

var printValues = function() {
  console.log(property.preserve3d);
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

// Init GUI
var GUI = new dat.GUI({width: 300});

// GUI Transform Origin
var GUITransformOrigin = GUI.addFolder('transform-origin');
//GUITransformOrigin.open();

GUITransformOrigin.add(value.transformOrigin, 'x', -600, 600).step(1).onChange(function(){
  transformOrigin();
});
GUITransformOrigin.add(value.transformOrigin, 'y', -100, 200).step(1).onChange(function(){
  transformOrigin();
});
GUITransformOrigin.add(value.transformOrigin, 'z', -100, 100).step(1).onChange(function(){
  transformOrigin();
});

var GUITransform = GUI.addFolder('transform');
GUITransform.open();

// GUI Rotate
var GUIRotate = GUITransform.addFolder('rotate');
//GUIRotate.open();

GUIRotate.add(value.transform.rotate, 'x', -180, 180).step(1).onChange(function(){
  transform();
});
GUIRotate.add(value.transform.rotate, 'y', -180, 180).step(1).onChange(function(){
  transform();
});
GUIRotate.add(value.transform.rotate, 'z', -180, 180).step(1).onChange(function(){
  transform();
});

// GUI Translate
var GUITranslate = GUITransform.addFolder('translate');
//GUITranslate.open();

GUITranslate.add(value.transform.translate, 'x', -100, 100).step(1).onChange(function(){
  transform();
});
GUITranslate.add(value.transform.translate, 'y', -100, 100).step(1).onChange(function(){
  transform();
});
GUITranslate.add(value.transform.translate, 'z', -100, 100).step(1).onChange(function(){
  transform();
});

// GUI Scale
var GUIScale = GUITransform.addFolder('scale');
//GUIScale.open();

GUIScale.add(value.transform.scale, 'xyz', -1, 2).onChange(function(){
  transform();
});
GUIScale.add(value.transform.scale, 'x', -1, 2).onChange(function(){
  transform();
});
GUIScale.add(value.transform.scale, 'y', -1, 2).onChange(function(){
  transform();
});
GUIScale.add(value.transform.scale, 'z', -1, 2).onChange(function(){
  transform();
});

// GUI Perspective
var GUIPerspective = GUI.addFolder('perspective');
//GUIPerspective.open();

GUIPerspective.add(value.perspective, 'perspective', 100, 1000).step(1).onChange(function(){
  perspective();
});

// GUI Perspective Origin
var GUIPerspectiveOrigin = GUI.addFolder('perspective-origin');

GUIPerspectiveOrigin.add(value.perspective, 'x', 0, 100).step(1).onChange(function(){
  perspectiveOrigin();
});
GUIPerspectiveOrigin.add(value.perspective, 'y', 0, 100).step(1).onChange(function(){
  perspectiveOrigin();
});

var GUITransformStyle = GUI.addFolder('transform-style');

GUITransformStyle.add(value, 'preserve3d').onChange(function(){
  preserve3d();
});

window.onload = function() {
  transform();
  transformOrigin();
  perspective();
  perspectiveOrigin();
  preserve3d();
}
