// Init GUI
var GUI = new dat.GUI({width: 300});

// GUI Transform origin
var GUITransformOrigin = GUI.addFolder('transform-origin');
//GUITransformOrigin.open();

GUITransformOrigin.add(control.transformOrigin, 'x', -1200, 1200).step(1).onChange(function(){
  transformOrigin();
});
GUITransformOrigin.add(control.transformOrigin, 'y', -100, 200).step(1).onChange(function(){
  transformOrigin();
});
GUITransformOrigin.add(control.transformOrigin, 'z', -200, 200).step(1).onChange(function(){
  transformOrigin();
});

var GUITransform = GUI.addFolder('transform');
GUITransform.open();

// GUI Transform rotate
var GUITransformRotate = GUITransform.addFolder('rotate');

GUITransformRotate.add(control.transform.rotate, 'x', 0, 360).step(1).listen().onChange(function(){
  transform();
});
GUITransformRotate.add(control.transform.rotate, 'y', 0, 360).step(1).listen().onChange(function(){
  transform();
});
GUITransformRotate.add(control.transform.rotate, 'z', 0, 360).step(1).onChange(function(){
  transform();
});

// GUI Transform translate
var GUITransformTranslate = GUITransform.addFolder('translate');

GUITransformTranslate.add(control.transform.translate, 'x', -300, 300).step(1).onChange(function(){
  transform();
});
GUITransformTranslate.add(control.transform.translate, 'y', -300, 300).step(1).onChange(function(){
  transform();
});
GUITransformTranslate.add(control.transform.translate, 'z', -300, 300).step(1).onChange(function(){
  transform();
});

// GUI Transform scale
var GUITransformScale = GUITransform.addFolder('scale');

GUITransformScale.add(control.transform.scale, 'xyz', -1, 2).onChange(function(){
  transform();
});
GUITransformScale.add(control.transform.scale, 'x', -1, 2).onChange(function(){
  transform();
});
GUITransformScale.add(control.transform.scale, 'y', -1, 2).onChange(function(){
  transform();
});
GUITransformScale.add(control.transform.scale, 'z', -1, 2).onChange(function(){
  transform();
});

var GUITransformPerspective = GUITransform.addFolder('perspective');
//GUITransformPerspective.open();

var applyTransformPerspective;

GUITransformPerspective.add(control.transform.perspective, 'apply').onChange(function() {
  if (control.transform.perspective.apply === true) {
    applyTransformPerspective = GUITransformPerspective.add(control.transform.perspective, 'value', 100, 4000).step(1).onChange(function(){
      transform();
    });
  } else {
    GUITransformPerspective.remove(applyTransformPerspective);
  }
  transform();
});

// GUI Perspective
var GUIPerspective = GUI.addFolder('perspective');

GUIPerspective.add(control.perspective, 'value', 100, 1000).step(1).onChange(function(){
  perspective();
});

// GUI Perspective Origin
var GUIPerspectiveOrigin = GUI.addFolder('perspective-origin');
//GUIPerspectiveOrigin.open();

GUIPerspectiveOrigin.add(control.perspective, 'x', 0, 100).step(1).onChange(function(){
  perspectiveOrigin();
});
GUIPerspectiveOrigin.add(control.perspective, 'y', 0, 100).step(1).onChange(function(){
  perspectiveOrigin();
});

var GUITransformStyle = GUI.addFolder('transform-style');

GUITransformStyle.add(control, 'preserve3d').onChange(function(){
  preserve3d();
});
