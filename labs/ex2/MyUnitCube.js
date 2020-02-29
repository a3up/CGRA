/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            -0.5,  0.5, -0.5,	//0 sup-esq-tras
             0.5,  0.5, -0.5, 	//1 sup-dir-tras
            -0.5, -0.5, -0.5,	//2 inf-esq-tras
             0.5, -0.5, -0.5,	//3 inf-dir-tras
             0.5, -0.5,  0.5,   //4 inf-dir-frent
            -0.5, -0.5,  0.5,   //5 inf-esq.frent
            -0.5,  0.5,  0.5,   //6 sup-esq-frent
             0.5,  0.5,  0.5    //7 sup-dir-frent

        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            1, 2, 0,
            1, 3, 2,
            4, 3, 1,
            7, 4, 1,
            7, 6, 4,
            6, 5, 4,
            5, 6, 0,
            2, 5, 0,
            3, 5, 2,
            3, 4, 5,
            6, 7, 1,
            1, 0, 6
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

