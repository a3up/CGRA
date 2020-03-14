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
        this.initMaterials();
    }

    initColor(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        let aux = new CGFappearance(this.scene);
        aux.setAmbient(r, g, b, 1.0);
        aux.setDiffuse(0, 0, 0, 1.0);
        aux.setSpecular(1.0, 1.0, 1.0, 1.0);
        aux.setShininess(10.0);
        return aux;
    }

    initMaterials() {
        this.purple = this.initColor(150, 80, 190);
        this.green = this.initColor(0, 255, 0);
        this.pink = this.initColor(255, 155, 207);
        this.orange = this.initColor(255, 155, 0);
        this.blue = this.initColor(0, 155, 255);
        this.red = this.initColor(255, 27, 27);
        this.yellow = this.initColor(255, 255, 0);
    }

    displayShape(shape, color) {
        color.apply();
        shape.display();
        this.scene.popMatrix();
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0);
        this.displayShape(this.diamond, this.scene.customMaterial);

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), 0, 0);
        this.scene.rotate(-Math.PI * 3 / 4, 0, 0, 1);
        this.displayShape(this.triangle, this.pink);

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI * 3 / 4, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.displayShape(this.triangleBig, this.blue);

        this.scene.pushMatrix();
        this.scene.translate(-1, 1, 0);
        this.scene.translate(Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.translate(Math.sqrt(2) - 1, Math.sqrt(2) - 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.displayShape(this.triangleSmall, this.purple);

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.displayShape(this.triangleBig2, this.orange);

        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(8), 0);
        this.scene.rotate(Math.PI * 3 / 4, 0, 0, 1);
        this.scene.translate(-1, 0, 0);
        this.displayShape(this.triangleSmall2, this.red);

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2) - Math.sqrt(8), -Math.sqrt(8), 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.displayShape(this.parallelogram, this.yellow);

        this.scene.materials[this.scene.selectedMaterial].apply();
    }


}