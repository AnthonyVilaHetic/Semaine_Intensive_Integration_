let components = document.querySelectorAll(".main__section__nine__images__slider .main__section__nine__images")
let pos = 0
let texts = document.querySelectorAll(".main__section__nine__text")

// for(let i=1; i<components.length; i++){
//   components[i].style.opacity= 0
// }

playSliderImages()
playSliderTexts()

function playSliderImages(){
  action = setInterval(
    function()
    {
      pos++
      if(pos>=components.length){
        pos=0
      }
      setOpacity(pos)
      setColor(pos)
    },
    3000
  )
}

function setOpacity(pos){
  document.querySelector('.main__section__nine__images.activeImage').classList.remove("activeImage")
  components[pos].classList.add("activeImage")
}

function setColor(pos){
  document.querySelector('.main__section__nine__text.activeText').classList.remove("activeText")
  texts[pos].classList.add("activeText")
}
