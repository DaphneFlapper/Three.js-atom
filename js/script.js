
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
renderer = new THREE.WebGLRenderer;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color(0x55a1ad);

	var geometry = new THREE.RingGeometry( 6.5, 7, 60 );
	var material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
	var mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.set(-45, 0, 0);
		scene.add( mesh );

	var mesh2 = new THREE.Mesh( geometry, material );
		mesh2.rotation.set(0, -45, 0);
		scene.add( mesh2 );

	var geometry2 = new THREE.SphereGeometry( 3, 32, 60 );
	var material2 = new THREE.MeshBasicMaterial( {color: 0xBA6E92} );
	var sphere = new THREE.Mesh( geometry2, material2 );
	scene.add( sphere );

	var geometry4 = new THREE.RingGeometry( 8, 8.5, 60 );
	var mesh3 = new THREE.Mesh( geometry4, material );
	mesh3.rotation.set(-80, 0, 0);
	scene.add( mesh3 );

	var geometry3 = new THREE.RingGeometry( 7, 7.5, 60 );
	var mesh4 = new THREE.Mesh( geometry3, material );
	mesh4.rotation.set(0, 60, 0);
	scene.add( mesh4 );


camera.position.z = 60;

function animate() {
	requestAnimationFrame( animate );

	mesh.rotation.y += 0.02;
	mesh2.rotation.x += 0.02;
	mesh3.rotation.y += 0.02;
	mesh4.rotation.x += 0.02;

	if (camera.position.z > 30) {
		camera.position.z -= 0.1;
		}

 camera.lookAt(scene.position);

	renderer.render( scene, camera );
}

animate();
