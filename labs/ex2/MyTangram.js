/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {

    constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);
        this.triangleBig2 = new MyTriangleBig(scene);
    }

    display() {
        this.scene.setColour(0, 255, 0);
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.setColour(255, 155, 207);
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), 0, 0);
        this.scene.rotate(-Math.PI * 3 / 4, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.setColour(0, 155, 255);
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI * 3 / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.setColour(150, 80, 190);
        this.scene.pushMatrix();
        this.scene.translate(-1, 1, 0);
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.translate(Math.sqrt(2) - 1, Math.sqrt(2) - 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.setColour(255, 155, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.triangleBig2.display();
        this.scene.popMatrix();

        this.scene.setColour(255, 27, 27);
        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(8), 0);
        this.scene.rotate(Math.PI * 3 / 4, 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.triangleSmall2.display();
        this.scene.popMatrix();

        this.scene.setColour(255, 255, 0);
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2) - Math.sqrt(8), -Math.sqrt(8), 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.setDefaultAppearance();
    }


}