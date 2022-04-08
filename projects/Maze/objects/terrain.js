//create a simple plane
const planeGeo = new THREE.PlaneGeometry(4096,4096,199,199)

//we load the jotunheimen file which contains elevation data 
//source - https://blog.mastermaps.com/2013/10/terrain-building-with-threejs.html
var terrainLoader = new THREE.TerrainLoader();
terrainLoader.load('../textures/jotunheimen.bin', function(data) {
    for(let i = 0 ; i < data.length; i++){
        //set move the Z vertice of the plane
        planeGeo.attributes.position.setZ(i, data[i] / 65535 * 25)
        planeGeo.attributes.position.needsUpdate = true;
    }
});

//add ground texture
let material = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('./textures/ground/Cobblestone.png')
  });

const terrainMesh = new THREE.Mesh(planeGeo, material)

export let terrain = terrainMesh
