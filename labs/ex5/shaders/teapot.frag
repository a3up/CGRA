#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D uSampler;

varying vec4 coords;
varying vec4 normal;
uniform float timeFactor;

void main() {
    if (coords.y > 0.5){
        gl_FragColor.r = 1.0;
        gl_FragColor.g = 1.0;
        gl_FragColor.b = 0.0;
        gl_FragColor.a = 1.0;
    } else {
        gl_FragColor.r = 0.0;
        gl_FragColor.g = 0.0;
        gl_FragColor.b = 1.0;
        gl_FragColor.a = 1.0;
    }
}