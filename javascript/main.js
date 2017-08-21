var selector = {
  objectContainer: document.querySelector('.coca-cola-container'),
  object: document.querySelector('.coca-cola'),
  axes: document.querySelector('.axes'),
  printResult: document.querySelector('.print-result')
};

var control = {
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  scaleX: 1,
  scaleY: 1,
  scaleZ: 1,
  scale3D: 1,
  originX: 50,
  originY: 50,
  originZ: -50,
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
      'rotateX(' + control.rotateX + 'deg) ' +
      'rotateY(' + control.rotateY + 'deg) ' +
      'rotateZ(' + control.rotateZ + 'deg) ' +
      'translateX(' + control.translateX + 'px) ' +
      'translateY(' + control.translateY + 'px) ' +
      'translateZ(' + control.translateZ + 'px) ' +
      'scaleX(' + control.scaleX.toFixed(3) + ') ' +
      'scaleY(' + control.scaleY.toFixed(3) + ') ' +
      'scaleZ(' + control.scaleZ.toFixed(3) + ') ' +
      'scale3d(' +
        control.scale3D.toFixed(3) + ', ' +
        control.scale3D.toFixed(3) + ', ' +
        control.scale3D.toFixed(3) +
      ');';

  applyTransform();
};

var transformOrigin = function() {
  property.transformOrigin =
    'transform-origin: ' +
      control.originX + '% ' + control.originY + '% ' + control.originZ + 'px;';

  selector.axes.setAttribute('style',
    'top: ' + control.originY + '%;' +
    'left: ' + control.originX + '%;' +
    'transform: translate3d(50%, 50%, ' + control.originZ + 'px);'
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
  property.perspective = 'perspective: ' + control.perspective + 'px;';

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

GUITransformOrigin.add(control, 'originX', -600, 600).step(1).onChange(function(){
  transformOrigin();
});
GUITransformOrigin.add(control, 'originY', -100, 200).step(1).onChange(function(){
  transformOrigin();
});
GUITransformOrigin.add(control, 'originZ', -100, 100).step(1).onChange(function(){
  transformOrigin();
});

var GUITransform = GUI.addFolder('transform');
GUITransform.open();

// GUI Rotate
var GUIRotate = GUITransform.addFolder('rotate');
GUIRotate.open();

GUIRotate.add(control, 'rotateX', -180, 180).step(1).onChange(function(){
  transform();
});
GUIRotate.add(control, 'rotateY', -180, 180).step(1).onChange(function(){
  transform();
});
GUIRotate.add(control, 'rotateZ', -180, 180).step(1).onChange(function(){
  transform();
});

// GUI Translate
var GUITranslate = GUITransform.addFolder('translate');
GUITranslate.open();

GUITranslate.add(control, 'translateX', -100, 100).step(1).onChange(function(){
  transform();
});
GUITranslate.add(control, 'translateY', -100, 100).step(1).onChange(function(){
  transform();
});
GUITranslate.add(control, 'translateZ', -100, 100).step(1).onChange(function(){
  transform();
});

// GUI Scale
var GUIScale = GUITransform.addFolder('scale');
GUIScale.open();

GUIScale.add(control, 'scale3D', -1, 2).onChange(function(){
  transform();
});
GUIScale.add(control, 'scaleX', -1, 2).onChange(function(){
  transform();
});
GUIScale.add(control, 'scaleY', -1, 2).onChange(function(){
  transform();
});
GUIScale.add(control, 'scaleZ', -1, 2).onChange(function(){
  transform();
});

// GUI Perspective
var GUIPerspective = GUI.addFolder('perspective');
GUIPerspective.open();

GUIPerspective.add(control, 'perspective', 100, 1000).step(1).onChange(function(){
  perspective();
});

window.onload = function() {
  transform();
  transformOrigin();
  perspective();
}
