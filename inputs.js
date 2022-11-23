

export function setBindings(scene){
scene.ctrl = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
scene.shift = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
scene.enter = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
scene.spacebar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}