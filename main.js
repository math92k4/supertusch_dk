
import './sass/style.scss'

import { showcaseSetup } from './showcase.js'
import { randomizeContent } from './randomize_content.js'

window.addEventListener('DOMContentLoaded', init)

function init() {
  document.querySelector("h3").addEventListener("click", () => {
    document.querySelector("footer").classList.toggle("open")
  })
  randomizeContent()

  document.querySelector("#right").addEventListener("animationend", () => {
  showcaseSetup()
  })
  
}
