let skyboxGeo = new THREE.BoxGeometry(6000, 6000, 6000)

const front = new THREE.TextureLoader().load("./textures/skybox/front.png")
const back = new THREE.TextureLoader().load("./textures/skybox/back.png")
const top = new THREE.TextureLoader().load("./textures/skybox/top.png")
const bottom = new THREE.TextureLoader().load("./textures/skybox/bottom.png")
const left = new THREE.TextureLoader().load("./textures/skybox/left.png")
const right = new THREE.TextureLoader().load("./textures/skybox/right.png")

let matArray = [
    new THREE.MeshBasicMaterial({map:front, side:THREE.BackSide}),
    new THREE.MeshBasicMaterial({map:back, side:THREE.BackSide}),
    new THREE.MeshBasicMaterial({map:top, side:THREE.BackSide}),
    new THREE.MeshBasicMaterial({map:bottom, side:THREE.BackSide}),
    new THREE.MeshBasicMaterial({map:left, side:THREE.BackSide}),
    new THREE.MeshBasicMaterial({map:right, side:THREE.BackSide}),
]

let skyboxMesh = new THREE.Mesh(skyboxGeo, matArray)


export let skybox = skyboxMesh