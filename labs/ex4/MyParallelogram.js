/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            0, 0, 0,	//0
            2, 0, 0,	//1
            1, 1, 0,	//2
            3, 1, 0,	//3
            0, 0, 0,	//0
            2, 0, 0,	//1
            1, 1, 0,	//2
            3, 1, 0,	//3
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 3,
            0, 3, 2,
            7, 5, 4,
            6, 7, 4,
        ];

        this.normals = [];
        for (let i = -1; i <= 1; i += 2)
            for (let j = 0; j < 4; j++)
                this.normals.push(0, 0, i);

        this.texCoords = [
            0.25, 0.75,
            0.75, 0.75,
            0.5, 1,
            1, 1,
            0.25, 0.75,
            0.75, 0.75,
            0.5, 1,
            1, 1
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

