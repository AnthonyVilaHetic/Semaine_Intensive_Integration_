const game = document.querySelector('#game')
const ball = document.querySelector('#ball')
let posX = Math.floor(Math.random()*maxPosX/10)*10
let posy = Math.floor(Math.random()*maxPosX/10)*10
let dirX=1
let dirY=-1
let step =10px
let maxposY = 400
let maxposY =400

let play = setInterval(
  function(){
      //ajouter step * dirX a posX
      // idem pour posY
      //si posx > max posx
        //inverser dirX

      //idem pour posY

      //positionner ma ball en fonction de posX  et posY
  },
  40

)
