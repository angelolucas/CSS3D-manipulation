var selector = {
  objectContainer: document.querySelector('.coca-cola-container'),
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
  perspective: 400
};

var property = {
  transform: '',
  transformOrigin: '',
  perspective: ''
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
      ');';

  applyTransform();
};

var transformOrigin = function() {
  property.transformOrigin =
    'transform-origin: ' +
      value.transformOrigin.x + '% ' + value.transformOrigin.y + '% ' + value.transformOrigin.z + 'px;';

  selector.axes.setAttribute('style',
    'top: ' + value.transformOrigin.y + '%;' +
    'left: ' + value.transformOrigin.x + '%;' +
    'transform: translate3d(50%, 50%, ' + value.transformOrigin.z + 'px);'
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
  property.perspective = 'perspective: ' + value.perspective + 'px;';

  selector.objectContainer.setAttribute('style', property.perspective);

  printValues();
};

var printValues = function() {
  selector.printResult.innerHTML =
    '<span>' + property.transformOrigin + '</span>' +
    '<span>' + property.transform + '</span>' +
    '<span>' + property.perspective + '</span>';
}

// Init GUI
var GUI = new dat.GUI({width: 300});

// GUI Transform Origin
var GUITransformOrigin = GUI.addFolder('transform-origin');
GUITransformOrigin.open();

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
GUIRotate.open();

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
GUITranslate.open();

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
GUIScale.open();

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
GUIPerspective.open();

GUIPerspective.add(value, 'perspective', 100, 1000).step(1).onChange(function(){
  perspective();
});

window.onload = function() {
  transform();
  transformOrigin();
  perspective();
}
