var control = {
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  scaleX: 1,
  scaleY: 1,
  scaleZ: 1,
  scale3D: 1,
  originX: 50,
  originY: 50,
  originZ: -50
};

var property = {
  transform: null,
  transformOrigin: null
}

var element = document.querySelector('.coca-cola');
var printTransform = document.querySelector('.print-result .transform');
var printTransformOrigin = document.querySelector('.print-result .transform-origin');
var axes = document.querySelector('.axes');

var transform = function() {
  property.transform =
    'translateX(' + control.translateX + 'px) ' +
    'translateY(' + control.translateY + 'px) ' +
    'translateZ(' + control.translateZ + 'px) ' +
    'rotateX(' + control.rotateX + 'deg) ' +
    'rotateY(' + control.rotateY + 'deg) ' +
    'rotateZ(' + control.rotateZ + 'deg) ' +
    'scaleX(' + control.scaleX.toFixed(3) + ') ' +
    'scaleY(' + control.scaleY.toFixed(3) + ') ' +
    'scaleZ(' + control.scaleZ.toFixed(3) + ') ' +
    'scale3d(' +
      control.scale3D.toFixed(3) + ', ' +
      control.scale3D.toFixed(3) + ', ' +
      control.scale3D.toFixed(3) +
    ')';

  applyTransform();
};

var transformOrigin = function() {
  property.transformOrigin =
    control.originX + '% ' + control.originY + '% ' + control.originZ + 'px'

  axes.setAttribute('style',
    'top: ' + control.originY + '%;' +
    'left: ' + control.originX + '%;' +
    'transform: translate3d(50%, 50%, ' + control.originZ + 'px);'
  );

  applyTransform();
};

var applyTransform = function() {
  element.setAttribute('style',
    'transform: ' + property.transform + ';' +
    'transform-origin: ' + property.transformOrigin + ';'
  );

  printTransform.innerHTML = property.transform;
  printTransformOrigin.innerHTML = property.transformOrigin;
}

// Init GUI
var GUI = new dat.GUI({width: 400});

// GUI Transform Origin
var GUITransformOrigin = GUI.addFolder('transform-origin');
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

// GUI Translate
var GUITranslate = GUITransform.addFolder('translate');
GUITranslate.add(control, 'translateX', -100, 100).step(1).onChange(function(){
  transform();
});
GUITranslate.add(control, 'translateY', -100, 100).step(1).onChange(function(){
  transform();
});
GUITranslate.add(control, 'translateZ', -100, 100).step(1).onChange(function(){
  transform();
});

// GUI Rotate
var GUIRotate = GUITransform.addFolder('rotate');

GUIRotate.add(control, 'rotateX', -180, 180).step(1).onChange(function(){
  transform();
});
GUIRotate.add(control, 'rotateY', -180, 180).step(1).onChange(function(){
  transform();
});
GUIRotate.add(control, 'rotateZ', -180, 180).step(1).onChange(function(){
  transform();
});

// GUI Scale
var GUIScale = GUITransform.addFolder('scale');
GUIScale.add(control, 'scale3D', 0, 2).onChange(function(){
  transform();
});
GUIScale.add(control, 'scaleX', 0, 2).onChange(function(){
  transform();
});
GUIScale.add(control, 'scaleY', 0, 2).onChange(function(){
  transform();
});
GUIScale.add(control, 'scaleZ', 0, 2).onChange(function(){
  transform();
});

// Open GUI Folders

GUIRotate.open();
GUITranslate.open();
GUIScale.open();

window.onload = function() {
  transform();
  transformOrigin();
}
