/**
 * MyUnitCube
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
            0.5, -0.5, 0.5,     //0 inf-dir-frent
            0.5, -0.5, -0.5,	//1 inf-dir-tras
            -0.5, -0.5, -0.5,	//2 inf-esq-tras
            -0.5, -0.5, 0.5,    //3 inf-esq.frent
            0.5, 0.5, 0.5,      //4 sup-dir-frent
            0.5, 0.5, -0.5, 	//5 sup-dir-tras
            -0.5, 0.5, -0.5,	//6 sup-esq-tras
            -0.5, 0.5, 0.5      //7 sup-esq-frent
        ];

        //Counter-clockwise reference of vertices
        this.indices = [];
        for (let i = 0; i < 4; i++) {
            this.indices = this.indices.concat(i, (i + 1) % 4, i + 4);
            this.indices = this.indices.concat((i + 1) % 4, (i + 1) % 4 + 4, i + 4);
        }
        this.indices = this.indices.concat(
            4, 5, 7,
            5, 6, 7,
            0, 2, 1,
            0, 3, 2);

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

