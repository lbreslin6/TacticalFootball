
import { setBindings } from './inputs.js';
import * as presets from './presets.js'
export function getRelativePositionToCanvas(gameObject, camera) {
    return {
      x: (gameObject.x - camera.worldView.centerX) * camera.zoom,
      y: (gameObject.y - camera.worldView.centerY) * camera.zoom
    }
  }
export class Player extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y, team, group)
    {
        super(scene, x, y, team);
        this.setTexture(team);
        this.setPosition(x, y);


        this.printText = scene.add.rexBBCodeText(this.x, this.y - 15, '', {
            color: 'yellow',
            allign: 'center',
            fontSize: '18px',
            fixedWidth: 20,
            fixedHeight: 20,
            valign: 'center',
            halign: 'center'
        }).setOrigin(0.5)
    
        scene.plugins.get('rextexteditplugin').add(this.printText, {
            onOpen: function (textObject) {
                console.log('Open text editor');
            },
            onTextChanged: function (textObject, text) {
                textObject.text = text;
                console.log(`Text: ${text}`);
            },
            onClose: function (textObject) {
                console.log('Close text editor');
            },
            selectAll: true,
            // enterClose: false
        });

    }
}

export function createPlayer(scene, team, x, y, group){
    
    var player;
    player = new Player(scene, x, y, team, group)
    scene.input.setDraggable(player.setInteractive());
    console.log(player)
    group.add(player, true)
    

    scene.input.on('gameobjectdown', function (pointer,gameObject) {
    if (scene.ctrl.isDown){
        if (gameObject instanceof Player){
        gameObject.destroy();
        gameObject.printText.destroy();
        }
    }
    });
    return player
}

export function createTeam(scene, team, formation, translation, group){
    
        
        for (let player of formation[team]){
            createPlayer(scene, team, player.x + translation.x, player.y + translation.y, group)
        }
        
        //adds players to group, makes draggable
        }


export function deleteAllPlayers(group){
    const playerArray = group.getChildren().slice() //clones player group
   for (let player of playerArray){
        player.printText.destroy();
        group.remove(player, true, true)
   }
   
  } 
    
    



