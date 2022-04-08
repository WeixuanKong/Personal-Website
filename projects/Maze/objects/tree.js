
/*MOSS Texture. Did not include in assigment as it was very difficult
 for my gpu to render so many trees with this texture
*/

// const textureLoader = new THREE.TextureLoader();
// const treeMap = textureLoader.load('../textures/moss/Moss003_1K_Color.jpg')
// const treeNormalMap = textureLoader.load('../textures/moss/Moss003_1K_NormalDX.jpg')
// const treeDispMap = textureLoader.load('../textures/moss/Moss003_1K_Displacement.jpg')
// const treeRoughMap = textureLoader.load('../textures/moss/Moss003_1K_Roughness.jpg')

// // const material = new THREE.MeshStandardMaterial({
// //     map:treeMap,
// //     normalMap:treeNormalMap,
// //     displacementMap:treeDispMap,
// //     displacementScale:0.3,
// //     roughnessMap:treeRoughMap,
// //     roughness:0.5,
// // })


const material = new THREE.MeshLambertMaterial({color:0x255929})

//create three cones to make it look like a tree
const coneGeo1 = new THREE.ConeGeometry(17, 25, 512, 512)
coneGeo1.translate(0,3,0)

const coneGeo2 = new THREE.ConeGeometry(12, 15, 512, 512)
coneGeo2.translate(0,10,0)

const coneGeo3 = new THREE.ConeGeometry(25, 30, 512, 512)
coneGeo3.translate(1,-10,0)

//merge the three cones
const treeGeo = THREE.BufferGeometryUtils.mergeBufferGeometries([coneGeo1, coneGeo2, coneGeo3])

const cone = new THREE.Mesh(treeGeo, material)

//create tree bark using a cylinder
const cylinderGeo = new THREE.CylinderGeometry(7, 7, 25, 10)
cylinderGeo.translate(0, -30, 0)
const cylinderMat = new THREE.MeshLambertMaterial({color:0x694637})
const treeBark = new THREE.Mesh(cylinderGeo, cylinderMat)

//group tree top and tree bottom
const treeGroup = new THREE.Group()
treeGroup.add(cone)
treeGroup.add(treeBark)

export let tree = treeGroup