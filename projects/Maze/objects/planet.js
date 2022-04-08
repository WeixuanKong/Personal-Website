const geometry = new THREE.SphereGeometry( 300, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const sphere = new THREE.Mesh( geometry, material );
sphere.position.set(0,0,0);
const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set(0,0,0);

let group = THREE.Group();
group.add(sphere);
group.add(spotLight);

export let planet = group;

