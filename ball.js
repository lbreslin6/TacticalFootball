import {draggable} from './draggable.js'
import { setBindings } from './inputs.js';
 
export class Ball extends Phaser.Physics.Arcade.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);
        this.setPosition(x, y);
        
    }
    addBall(){
        var ball;
        ball = this.scene.physics.add.image(this.x, this.y, 'ball')
        ball.setDamping(true)
        ball.setDrag(0.60);
            
        this.scene.input.setDraggable(ball.setInteractive());

            
        return ball
    }
    velocity(x,y){
        ball.setVelocity(x,y)
    }
}




