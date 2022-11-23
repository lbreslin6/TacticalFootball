
import * as p from './Player.js';
import * as b from './buttons.js'
import * as ball from './ball.js'
import { setBindings } from './inputs.js';
import * as presets from './presets.js'


var config = {
    parent: 'phaser-container',
	dom: {
        createContainer: true
    },
    type: Phaser.AUTO,
    width: 650,
    height: 650,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
    {
        var url;
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js';
        this.load.plugin('rexbbcodetextplugin', url, true);
      
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js';
        this.load.plugin('rextexteditplugin', url, true);

        this.load.image('ball', 'assets/ball2.png')
        this.load.image('red', 'assets/red_player.png');
        this.load.image('blue', 'assets/blue_player.png')
        this.load.image('field', 'assets/field3.png');
    }

function create ()
{
    let config = {
        classType: Phaser.GameObjects.Sprite,
        defaultKey: null,
        defaultFrame: null,
        active: true,
        maxSize: -1,
        runChildUpdate: false,
        createCallback: null,
        removeCallback: null,
        createMultipleCallback: null
    }
    
   var playersGroup = this.add.group(config)

    setBindings(this);

    this.add.image(225, 325, 'field');

    const button = new b.Button(530, 300, 'Change Teams', this, () => changeTeam());
    const clear = new b.Button(530, 400, 'Clear All Players', this, () => p.deleteAllPlayers(playersGroup));
    const preset1 = new b.Button(530, 200, 'Play out from back', this, () =>     p.createTeam(this, team, presets.playing_out_from_back, presets.smallFieldTranslation,playersGroup));
    
    var gameBall = new ball.Ball(this, 200, 200).addBall(); //.addBall returns the ball image
    gameBall.setVelocity(100);
    console.log(gameBall)


    var team = 'red' //set initial team
    var teams = ['red', 'blue'] //list of teams
        
    //Keeps track of user's team choice
    function changeTeam(){
        
        if (team == teams[0]){
            team = teams[1]
            console.log(teams[0], teams[1])
        }
        else if (team == teams[1]){
            team = teams[0]    
            console.log(teams[1], teams[0])
        }
    }

    //Creates player when user shift clicks
    this.input.on('pointerdown', function (pointer) {
        if (this.shift.isDown){
            //console.log('shiftclick')
            p.createPlayer(this, team, pointer.x, pointer.y, playersGroup);
        }
    }, this);

    this.input.on('dragstart', function (pointer, gameObject) {

        gameObject.setTint(0xff0000);
    
    });
    
    this.input.on('drag', function (pointer, gameObject, dragX, dragY,camera) {
    
        gameObject.x = dragX;
        gameObject.y = dragY;
        
        if (gameObject instanceof p.Player){
        gameObject.printText.x = dragX
        gameObject.printText.y = dragY - 15
        }
    });
    
    this.input.on('dragend', function (pointer, gameObject) {
    
        gameObject.clearTint();
    
    });
}

function update(){
    

}