/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram {

    constructor(scene) {
        this.scene = scene;
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);
        this.triangleBig2 = new MyTriangleBig(scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0);
        this.diamond.display();
        this.scene.popMatrix()

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), 0, 0);
        this.scene.rotate(-Math.PI * 3 / 4, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI * 3 / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1, 1, 0);
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.translate(Math.sqrt(2) - 1, Math.sqrt(2) - 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.triangleSmall.display();
        this.scene.popMatrix()

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * 1 / 4, 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.triangleBig2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(8), 0);
        this.scene.rotate(Math.PI * 3 / 4, 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.triangleSmall2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2) - Math.sqrt(8), -Math.sqrt(8), 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();
    }


}