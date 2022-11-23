import * as p from './Player.js';
export function draggable(scene, image)
{
    

image.on('pointerover', function () {

    this.setTint(0x00ff00);

});

image.on('pointerout', function () {

    this.clearTint();

});

scene.input.setDraggable(image);

scene.input.on('dragstart', function (pointer, gameObject) {

    gameObject.setTint(0xff0000);

});

scene.input.on('drag', function (pointer, gameObject, dragX, dragY,camera) {

    gameObject.x = dragX;
    gameObject.y = dragY;
    
    if (gameObject instanceof p.Player){
    gameObject.printText.x = dragX
    gameObject.printText.y = dragY - 15
    }
});

scene.input.on('dragend', function (pointer, gameObject) {

    gameObject.clearTint();

});
return image;
}