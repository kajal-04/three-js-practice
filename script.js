/////////////////////////////////////////////////////////////////////////////////////////////////////////
//FONT

let scene, camera, renderer, text;
let ADD = 0.01;


let createGeometry = function () {
    // const loader = new THREE.FontLoader();
    // var textOptions = { size: 40, height: 10, curveSegments: 5, font: "helvetiker" };
    // var text = new THREE.TextGeometry( "Hello World", textOptions);
    
    // let material = new THREE.MeshBasicMaterial({
    //             color: 0x034b59,
    //           });
              
    // text = new THREE.Mesh(geometry, material);
    // text.position.x = -15;
    // scene.add(text);
        
          
    let loader = new THREE.FontLoader();
    let font = loader.parse('./node_modules/three/examples/fonts/helvetiker_bold.typeface.json');

      let geometry = new THREE.TextGeometry("Kaju", {
        font: font,
        size: 5,
        height: 1,
      });

      let material = new THREE.MeshBasicMaterial({
        color: 0x034b59,
      });
      debugger
      text = new THREE.Mesh(geometry, material);
      text.position.x = -15;
      scene.add(text);
    
};
// set up the environment -
// initiallize scene, camera, objects and renderer
let init = function () {
  // 1. create the scenew
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // 2. create an locate the camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 20;

  //camera.position.x = 10;

  // 3. create and locate the objects on the scene

  createGeometry();

  // axes = new THREE.AxesHelper(10);
  // scene.add(axes);
  // 4. create the renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
};

let mainLoop = function () {
  text.rotation.x += ADD;
  // shape.rotation.y += ADD;

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
// mainLoop();

//////////////////////////////////////////////////////////////////////////////////////////////////
//BUTTERFLY

// let scene, camera, renderer, shape;
//         let ADD = 0.02;

//         let createGeometry = function() {
//             const geometry  = new  THREE.BufferGeometry();

//             const vertices = new Float32Array( [
//                  0, 0,  0,
//                  5, 0,  0,
//                  2, 4,  3,

//                  0, 0,  0,
//                  5, 0,  0,
//                  2, 4,  -3,

//                 //  0, 5,  0,
//                 //  0, 0,  2,
//                 //  1, 2,  -2,

//                 //  3, 0,  0,
//                 //  0, 5,  0,
//                 //  1, 2,  -2,

//             ] );
//             geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

//             let material = new THREE.MeshBasicMaterial({
//                 color: 0xffffff,
//                 side:THREE.DoubleSide,
//                 wireframe : true,
//             });

//             shape = new THREE.Mesh( geometry, material);

//             shape.rotation.z = 0.7;
//             shape.rotation.x = 0.6;
//             scene.add(shape);

//         };

//                 // set up the environment -
//                 // initiallize scene, camera, objects and renderer
//                 let init = function() {
//                     // 1. create the scenew
//                     scene = new THREE.Scene();
//                     scene.background = new THREE.Color(0x000000);

//                     // 2. create an locate the camera
//                     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
//                     camera.position.z = 20;
//                     //camera.position.x = 10;

//                     // 3. create and locate the objects on the scene

//                     createGeometry();

//                     // axes = new THREE.AxesHelper(10);
//                     // scene.add(axes);
//                     // 4. create the renderer
//                     renderer = new THREE.WebGLRenderer();
//                     renderer.setSize(window.innerWidth, window.innerHeight);

//                     document.body.appendChild(renderer.domElement);
//                 };

//                 let mainLoop = function() {
//                     // shape.rotation.x += ADD;
//                     // shape.rotation.y += ADD;
//                     let y=0, index = 0;
//                     positions[ index ++ ] = y;
//                     y += ADD;
//                     shape.geometry.attributes.position.needsUpdate = true;

//                     if(shape.geometry.vertices[2].y < -4 ||
//                         shape.geometry.vertices[2].y > 4 )
//                         ADD *= -1;

//                     renderer.render(scene, camera);
//                     requestAnimationFrame(mainLoop);
//                 };

//                 ///////////////////////////////////////////////
//                 init();
//                 mainLoop();

///////////////////////////////////////////////////////////////////////////////////////////////////
//CUSTOM POLYGON
// let scene, camera, renderer, shape;
//         let ADD = 0.02;

//         let createGeometry = function() {
//             const geometry  = new  THREE.BufferGeometry();

//             const vertices = new Float32Array( [
//                  3, 0,  0,
//                  0, 5,  0,
//                  0, 0,  2,

//                  0, 5,  0,
//                  0, 0,  2,
//                  1, 2,  -2,

//                  3, 0,  0,
//                  0, 5,  0,
//                  1, 2,  -2,

//             ] );
//             geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

//             let material = new THREE.MeshBasicMaterial(
//                 {color: 0xffffff,
//                 side:THREE.DoubleSide,
//                 wireframe: true,
//                 }
//             );

//             shape = new THREE.Mesh( geometry, material);
//             scene.add(shape);
//         };

//                 // set up the environment -
//                 // initiallize scene, camera, objects and renderer
//                 let init = function() {
//                     // 1. create the scenew
//                     scene = new THREE.Scene();
//                     scene.background = new THREE.Color(0x000000);

//                     // 2. create an locate the camera
//                     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
//                     camera.position.z = 20;
//                     //camera.position.x = 10;

//                     // 3. create and locate the objects on the scene

//                     createGeometry();

//                     // axes = new THREE.AxesHelper(10);
//                     // scene.add(axes);
//                     // 4. create the renderer
//                     renderer = new THREE.WebGLRenderer();
//                     renderer.setSize(window.innerWidth, window.innerHeight);

//                     document.body.appendChild(renderer.domElement);
//                 };

//                 let mainLoop = function() {
//                     // shape.rotation.x += ADD;
//                     // shape.rotation.y += ADD;

//                     renderer.render(scene, camera);
//                     requestAnimationFrame(mainLoop);
//                 };

//                 ///////////////////////////////////////////////
//                 init();
//                 mainLoop();
