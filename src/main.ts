import { Scene, Camera, PerspectiveCamera, WebGLRenderer, Renderer, Geometry, BoxGeometry, Material, MeshPhongMaterial, Mesh, Light , DirectionalLight, PointLight} from "three"

let scene: Scene = new Scene();
let camera: Camera = new PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000);
let renderer: Renderer = new WebGLRenderer;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry: Geometry = new BoxGeometry(1, 1, 1);
let material: Material = new MeshPhongMaterial({ color: 0x00ff00 });
let cube: Mesh = new Mesh(geometry, material);
var light: Light = new PointLight( 0xffffff, 1, 100 );
light.position.set( 25, 25, 25 );

scene.add(cube);
scene.add(light);

camera.position.z = 5;


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
