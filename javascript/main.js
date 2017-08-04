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
};

var element = document.querySelector('.coca-cola');
var printResult = document.querySelector('.print-result .value');

var transform = function() {
  var value =
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

  element.setAttribute('style', 'transform: ' + value);

  printResult.innerHTML = value;
};

// Init GUI
var gui = new dat.GUI();

// GUI Translate
var translate = gui.addFolder('translate');
translate.add(control, 'translateX', -100, 100).step(1).onChange(function(){
  transform();
});
translate.add(control, 'translateY', -100, 100).step(1).onChange(function(){
  transform();
});
translate.add(control, 'translateZ', -100, 100).step(1).onChange(function(){
  transform();
});

// GUI Rotate
var rotate = gui.addFolder('rotate');

rotate.add(control, 'rotateX', -180, 180).step(1).onChange(function(){
  transform();
});
rotate.add(control, 'rotateY', -180, 180).step(1).onChange(function(){
  transform();
});
rotate.add(control, 'rotateZ', -180, 180).step(1).onChange(function(){
  transform();
});

// GUI Scale
var scale = gui.addFolder('scale');
scale.add(control, 'scale3D', 0, 2).onChange(function(){
  transform();
});
scale.add(control, 'scaleX', 0, 2).onChange(function(){
  transform();
});
scale.add(control, 'scaleY', 0, 2).onChange(function(){
  transform();
});
scale.add(control, 'scaleZ', 0, 2).onChange(function(){
  transform();
});

// Open GUI Folders
rotate.open();
translate.open();
scale.open();

window.onload = transform();
