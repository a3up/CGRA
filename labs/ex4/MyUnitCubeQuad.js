/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {

    constructor(scene) {
        super(scene);
        this.quadCima = new MyQuad(scene);
        this.quadBaixo = new MyQuad(scene);
        this.quadFrente = new MyQuad(scene);
        this.quadTras = new MyQuad(scene);
        this.quadDireita = new MyQuad(scene);
        this.quadEsquerda = new MyQuad(scene);

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

    initTexture(image, wrap1 = 'REPEAT', wrap2 = wrap1) {
        let texture = new CGFappearance(this.scene);
        texture.setAmbient(0.1, 0.1, 0.1, 1);
        texture.setDiffuse(0.9, 0.9, 0.9, 1);
        texture.setSpecular(0.1, 0.1, 0.1, 1);
        texture.setShininess(10.0);
        texture.loadTexture('images/' + image + '.png');
        texture.setTextureWrap(wrap1, wrap2);
        return texture;
    }

    initMaterials() {
        this.diamondMaterial = this.initTexture("tangram");
    }

    displayShape(shape, color) {
        color.apply();
        shape.display();
        this.scene.popMatrix();
    }

    display() {
        this.displayShape(this.quadCima, this.diamondMaterial);
        this.displayShape(this.quadBaixo, this.diamondMaterial);
        this.displayShape(this.quadDireita, this.diamondMaterial);
        this.displayShape(this.quadEsquerda, this.diamondMaterial);
        this.displayShape(this.quadFrente, this.diamondMaterial);
        this.displayShape(this.quadTras, this.diamondMaterial);        
    }


}