const loader = new THREE.TextureLoader();

let texture= loader.load('./textures/wall/Wall Texture.png', function(texture){
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 2, 2 );
});
let texture2= loader.load('./textures/wall/Wall Texture Long.png', function(texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set(0, 0);
    texture.repeat.set(2, 2);
});

const material = new THREE.MeshBasicMaterial({map : texture2});
const material2 = new THREE.MeshBasicMaterial( {map : texture} );
const material3 = new THREE.MeshBasicMaterial( {map : texture} );
const material4 = new THREE.MeshBasicMaterial( {map : texture2} );


//photoshop 1 



const wall1Geo = new THREE.BoxGeometry( 30, 60, 540 );
wall1Geo.translate(-15, -30, -270)
const wall1Mesh = new THREE.Mesh( wall1Geo, material );
wall1Mesh.position.set(0,0,-60)

const wall2Geo = new THREE.BoxGeometry( 1000, 60, 30 );
wall2Geo.translate(-500, -30, -15)
const wall2Mesh = new THREE.Mesh( wall2Geo, material );
wall2Mesh.position.set(1000,0,-60)

const wall3Geo = new THREE.BoxGeometry( 1000, 60, 30 );
wall3Geo.translate(-500, -30, -15)
const wall3Mesh = new THREE.Mesh( wall3Geo, material );
wall3Mesh.position.set(1080,0,-570)
const wall4Geo = new THREE.BoxGeometry( 30, 60, 510 );
wall4Geo.translate(-15, -30, -255)
const wall4Mesh = new THREE.Mesh( wall4Geo, material );
wall4Mesh.position.set(1080,0,-60)

const wall5Geo = new THREE.BoxGeometry( 30, 60, 120 );
wall5Geo.translate(-15, -30, -60)
const wall5Mesh = new THREE.Mesh( wall5Geo, material3 );
wall5Mesh.position.set(110,0,-365)

const wall6Geo = new THREE.BoxGeometry( 80, 60, 30 );
wall6Geo.translate(-40, -30, -15)
const wall6Mesh = new THREE.Mesh( wall6Geo, material2 );
wall6Mesh.position.set(80,0,-255)

const wall7Geo = new THREE.BoxGeometry( 95, 60, 30 );
wall7Geo.translate(-47.5, -30, -15)
const wall7Mesh = new THREE.Mesh( wall7Geo, material2 );
wall7Mesh.position.set(205,0,-455)

const wall8Geo = new THREE.BoxGeometry( 30, 60, 175 );
wall8Geo.translate(-15, -30, -85)
const wall8Mesh = new THREE.Mesh( wall8Geo, material2 );
wall8Mesh.position.set(315,0,-397.5)

const wall9Geo = new THREE.BoxGeometry( 315, 60, 30 );
wall9Geo.translate(-157.5, -30, -15)
const wall9Mesh = new THREE.Mesh( wall9Geo, material );
wall9Mesh.position.set(425,0,-365)

const wall10Geo = new THREE.BoxGeometry( 30, 60, 100 );
wall10Geo.translate(-15, -30, -50)
const wall10Mesh = new THREE.Mesh( wall10Geo, material2 );
wall10Mesh.position.set(210,0,-265)

const wall11Geo = new THREE.BoxGeometry( 30, 60, 100 );
wall11Geo.translate(-15, -30, -50)
const wall11Mesh = new THREE.Mesh( wall11Geo, material3 );
wall11Mesh.position.set(425,0,-265)

const wall12Geo = new THREE.BoxGeometry(105, 60, 30 );
wall12Geo.translate(-52.5, -30, -15)
const wall12Mesh = new THREE.Mesh( wall12Geo, material2 );
wall12Mesh.position.set(395,0,-265)

const wall13Geo = new THREE.BoxGeometry( 30, 60, 100 );
wall13Geo.translate(-15, -30, -50)
const wall13Mesh = new THREE.Mesh( wall13Geo, material3 );
wall13Mesh.position.set(320,0,-165)

const wall14Geo = new THREE.BoxGeometry( 200, 60, 30 );
wall14Geo.translate(-100, -30, -15)
const wall14Mesh = new THREE.Mesh( wall14Geo, material );
wall14Mesh.position.set(290,0,-165)

const wall15Geo = new THREE.BoxGeometry( 30, 60, 105 );
wall15Geo.translate(-15, -30, -52.5)
const wall15Mesh = new THREE.Mesh( wall15Geo, material3 );
wall15Mesh.position.set(425,0,-90)

const wall16Geo = new THREE.BoxGeometry( 30, 60, 105 );
wall16Geo.translate(-15, -30, -52.5)
const wall16Mesh = new THREE.Mesh( wall16Geo, material3 );
wall16Mesh.position.set(630,0,-90)

const wall17Geo = new THREE.BoxGeometry( 30, 60, 135 );
wall17Geo.translate(-15, -30, -67.5)
const wall17Mesh = new THREE.Mesh( wall17Geo, material3 );
wall17Mesh.position.set(630,0,-260)

const wall18Geo = new THREE.BoxGeometry( 30, 60, 105 );
wall18Geo.translate(-15, -30, -52.5)
const wall18Mesh = new THREE.Mesh( wall18Geo, material2 );
wall18Mesh.position.set(630,0,-465)

const wall19Geo = new THREE.BoxGeometry( 105, 60, 30 );
wall19Geo.translate(-52.5, -30, -15)
const wall19Mesh = new THREE.Mesh( wall19Geo, material2 );
wall19Mesh.position.set(600,0,-165)

const wall20Geo = new THREE.BoxGeometry( 105, 60, 30 );
wall20Geo.translate(-52.5, -30, -15)
const wall20Mesh = new THREE.Mesh( wall20Geo, material2 );
wall20Mesh.position.set(600,0,-365)

const wall21Geo = new THREE.BoxGeometry( 30, 60, 85 );
wall21Geo.translate(-15, -30, -42.5)
const wall21Mesh = new THREE.Mesh( wall21Geo, material3 );
wall21Mesh.position.set(525,0,-195)

const wall22Geo = new THREE.BoxGeometry( 30, 60, 110 );
wall22Geo.translate(-15, -30, -55)
const wall22Mesh = new THREE.Mesh( wall22Geo, material3 );
wall22Mesh.position.set(525,0,-395)

const wall23Geo = new THREE.BoxGeometry( 100, 60, 30 );
wall23Geo.translate(-50, -30, -15)
const wall23Mesh = new THREE.Mesh( wall23Geo, material2 );
wall23Mesh.position.set(495,0,-475)

const wall24Geo = new THREE.BoxGeometry( 105, 60, 30 );
wall24Geo.translate(-52.5, -30, -15)
const wall24Mesh = new THREE.Mesh( wall24Geo, material2 );
wall24Mesh.position.set(735,0,-165)

const wall25Geo = new THREE.BoxGeometry( 210, 60, 30 );
wall25Geo.translate(-105, -30, -15)
const wall25Mesh = new THREE.Mesh( wall25Geo, material2 );
wall25Mesh.position.set(840,0,-260)

const wall26Geo = new THREE.BoxGeometry( 30, 60, 65 );
wall26Geo.translate(-15, -30, -32.5)
const wall26Mesh = new THREE.Mesh( wall26Geo, material3 );
wall26Mesh.position.set(735,0,-195)

const wall27Geo = new THREE.BoxGeometry( 30, 60, 120 );
wall27Geo.translate(-15, -30, -60)
const wall27Mesh = new THREE.Mesh( wall27Geo, material3 );
wall27Mesh.position.set(735,0,-365)

const wall28Geo = new THREE.BoxGeometry( 215, 60, 30 );
wall28Geo.translate(-107.5, -30, -15)
const wall28Mesh = new THREE.Mesh( wall28Geo, material );
wall28Mesh.position.set(950,0,-455)

const wall29Geo = new THREE.BoxGeometry( 30, 60, 165);
wall29Geo.translate(-15, -30, -82.5)
const wall29Mesh = new THREE.Mesh( wall29Geo, material3 );
wall29Mesh.position.set(840,0,-290)

const wall30Geo = new THREE.BoxGeometry( 200, 60, 30 );
wall30Geo.translate(-100, -30, -15)
const wall30Mesh = new THREE.Mesh( wall30Geo, material );
wall30Mesh.position.set(1050,0,-165)


const wall31Geo = new THREE.BoxGeometry( 105, 60, 30 );
wall31Geo.translate(-52.5, -30, -15)
const wall31Mesh = new THREE.Mesh( wall31Geo, material2 );
wall31Mesh.position.set(1050,0,-365)


const wall32Geo = new THREE.BoxGeometry( 30, 60, 95);
wall32Geo.translate(-15, -30, -47.5)
const wall32Mesh = new THREE.Mesh( wall32Geo, material3 );
wall32Mesh.position.set(975,0,-270)

//group tree top and tree bottom
const wallGroup = new THREE.Group()
wallGroup.add(wall1Mesh)
wallGroup.add(wall2Mesh)
wallGroup.add(wall3Mesh)
wallGroup.add(wall4Mesh)
wallGroup.add(wall5Mesh)
wallGroup.add(wall6Mesh)
wallGroup.add(wall7Mesh)
wallGroup.add(wall8Mesh)
wallGroup.add(wall9Mesh)
wallGroup.add(wall10Mesh)
wallGroup.add(wall11Mesh)
wallGroup.add(wall12Mesh)
wallGroup.add(wall13Mesh)
wallGroup.add(wall14Mesh)
wallGroup.add(wall15Mesh)
wallGroup.add(wall16Mesh)
wallGroup.add(wall17Mesh)
wallGroup.add(wall18Mesh)
wallGroup.add(wall19Mesh)
wallGroup.add(wall20Mesh)
wallGroup.add(wall21Mesh)
wallGroup.add(wall22Mesh)
wallGroup.add(wall23Mesh)
wallGroup.add(wall24Mesh)
wallGroup.add(wall25Mesh)
wallGroup.add(wall26Mesh)
wallGroup.add(wall27Mesh)
wallGroup.add(wall28Mesh)
wallGroup.add(wall29Mesh)
wallGroup.add(wall30Mesh)
wallGroup.add(wall31Mesh)
wallGroup.add(wall32Mesh)

export let maze = wallGroup