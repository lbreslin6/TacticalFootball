function switchSides(playerObj){
    playerObj.y = playerObj.y * -1
    return playerObj
}

export var playing_out_from_back = {red: [
    {x:0, y:300},//goalkeeper
    {x:-80, y:280},//left cb
    {x:80, y:280},//right cb
    {x: -190, y:200},//left back
    {x: 190, y:200},//right back
    {x:-190, y:-20},//left wing
    {x:190, y:-20},//right wing
    {x:0, y:-30},//striker
    {x:-105, y:100},//8
    {x:105, y:35},//10
    {x:0, y:150},//6
]
}

playing_out_from_back['blue'] = playing_out_from_back['red'].map(p => ({x: p.x, y: p.y * -1}));


export var smallFieldTranslation = {x: 225, y:325}

