
import {skybox} from './objects/skydome.js'
import {terrain} from './objects/terrain.js'
import {maze} from './objects/maze.js'
import {tree} from './objects/tree.js'

window.onload = function() {

    //create scene and camera
    const scene = new THREE.Scene()

    //fog
    scene.fog = new THREE.Fog('#b2bac2', 0, 9000)


    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20000)
    //move camera inside cube
    camera.position.set(1400,50,300)
    camera.lookAt(1400 ,50, 0)

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    //add skybox
    scene.add(skybox)

    maze.position.set(-1700,200,100)

    scene.add(maze)
    maze.scale.x = 3
    maze.scale.y = 5
    maze.scale.z = 2

    scene.add(tree);


    //add terrain and rotate by ~90 degrees
    terrain.rotateX(-Math.PI/2)
    terrain.position.set(-80, -50, -200)
    scene.add(terrain)



    //light
    let light = new THREE.DirectionalLight(0xffffff );
    light.position.set( 2, 1000, 1000).normalize();
    light.target.position.set(0,0,0)
    scene.add(light);

    const loader = new THREE.TextureLoader();

    let texture= loader.load('./textures/sphere/sun.jpg', function(texture){
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( 2, 2 );
    });
    const geometry = new THREE.SphereGeometry( 300, 32, 16 );
    const material = new THREE.MeshBasicMaterial( { map: texture } );
    const sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(10,2000,10);
    scene.add( sphere );

    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 10, 2000, 10 );
    scene.add( spotLight );

    const mtlLoader = new THREE.MTLLoader()
    mtlLoader.load(
        'textures/rock/rock.mtl',
        (materials) => {
            materials.preload()
            const objLoader = new THREE.OBJLoader();
            //load the object
            objLoader.setMaterials(materials)
            objLoader.load(
                'objects/rock.obj',
                (object) => {
                    //set its position and add to scene
                    object.position.set(1400,-50,100)
                    object.scale.set(20, 10, 10)
                    scene.add(object)
                },
                (xhr) => {

                    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
                },
                (error) => {

                    console.log('An error happened')
                }
            )
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log('An error happened')
        }
    )
    mtlLoader.load(
        'textures/golem/golem.mtl',
        (materials) => {
            materials.preload()
            const objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials)
            objLoader.load(
                //load the OBJ
                'objects/golem.obj',
                (object) => {
                    //set position
                    object.position.set(-100,-60,-2000)
                    object.scale.set(300, 300, 300)

                    //add to scene
                    scene.add(object)
                },
                (xhr) => {

                    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
                },
                (error) => {

                    console.log('An error happened')
                }
            )
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log('An error happened')
        }
    )


    /*------------------------------------------------------------------------------------------------*/
    //initialize the controls with PointerLockCOntrols
    function initControls() {
        //let controls = initControls(camera, document);
        let controls = new THREE.PointerLockControls(camera, document.body);
        //it will provide a control of view by mouse by default
        document.addEventListener('click', function () {//once click the page, lock the pointer
            controls.lock();
        });
        scene.add(controls.getObject());
        return controls;
    }
    let controls = initControls();

    //to control move by "WASD"
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;

    //press key
    function onKeyDown(event) {
        //W, A, S, D -> move
        //set up uppercase to receive both lowercase and uppercase input
        if (event.key.toUpperCase() === "W"){
            moveForward = true;
        }
        else if (event.key.toUpperCase() === "S"){
            moveBackward = true;
        }
        else if (event.key.toUpperCase() === "A"){
            moveLeft = true;
        }
        else if (event.key.toUpperCase() === "D"){
            moveRight = true;
        }

    }
    //release the key
    function onKeyUp(event) {
        if (event.key.toUpperCase() === "W"){
            moveForward = false;
        }
        else if (event.key.toUpperCase() === "S"){
            moveBackward = false;
        }
        else if (event.key.toUpperCase() === "A"){
            moveLeft = false;
        }
        else if (event.key.toUpperCase() === "D"){
            moveRight = false;
        }
    }
    //add event listeners for key input
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    //Reference: https://threejs.org/examples/#misc_controls_pointerlock
    let velocity = new THREE.Vector3();
    let direction = new THREE.Vector3();
    let rotation = new THREE.Vector3();
    //this is the ray caster for horizontal
    let horizontalRaycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(), 20, 50);
    let oldTime = performance.now();//set the time and index to get delta time
    let clock = new THREE.Clock(true);
    //the move method includes both move by arrow key and collision detection part
    function move(speed) {//update: add the delta time
        let delta = clock.getDelta();

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions
        let control = controls.getObject();
        let wDir = new THREE.Vector3();//the world direction
        camera.getWorldDirection(wDir);//it will pass the world direction of camera to wDir
        rotation.copy(wDir.multiply(wDir, new THREE.Vector3(-1, 0, -1)));

        let rotateMatrix = new THREE.Matrix4();//set a 4x4 matrix to store the angle
        if(direction.z < 0){
            if(direction.x < 0){
                rotateMatrix.makeRotationY(Math.PI/4);
            }
            else if(direction.x > 0){
                rotateMatrix.makeRotationY(-Math.PI/4);
            }
            else{
                rotateMatrix.makeRotationY(0);
            }
        }
        else if(direction.z > 0){
            if(direction.x < 0){
                rotateMatrix.makeRotationY(Math.PI/4*3);
            }
            else if(direction.x > 0){
                rotateMatrix.makeRotationY(-Math.PI/4*3);
            }
            else{
                rotateMatrix.makeRotationY(Math.PI);
            }
        }
        else {
            if (direction.x > 0) {
                rotateMatrix.makeRotationY(Math.PI / 2);
            } else if (direction.x < 0) {
                rotateMatrix.makeRotationY(-Math.PI / 2);
            }
        }
        //Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective.
        rotation.applyMatrix4(rotateMatrix);
        horizontalRaycaster.set( control.position, rotation );

        let horizontalIntersections = horizontalRaycaster.intersectObjects(scene.children, true);
        let intersected = horizontalIntersections.length > 0;//if intersected with an object

        if(!intersected){
            if (moveForward || moveBackward) {//if forward or backward moving
                velocity.z = direction.z * speed * delta;
            }
            else {
                velocity.z = 0;
            }
            if (moveLeft || moveRight) {
                velocity.x = direction.x * speed * delta;
            }
            else {
                velocity.x = 0;
            }
        }
        else{
            velocity.z = 0;
            velocity.x = 0;

        }
        //since the PointerLockControls only have moveRight and MoveForward,
        //that use negative number of velocity of move left and backward
        controls.moveRight(velocity.x);
        controls.moveForward(velocity.z);

    }

    //add to scene
    scene.add(controls.getObject());
    /*------------------------------------------------------------------------------*/

    //rotate the sky
    function animate() {
        skybox.rotation.y += 0.0001;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
        move(500);
        
    }
    animate()





  
   


}