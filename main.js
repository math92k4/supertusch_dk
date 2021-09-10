
import './sass/style.scss'

import { showcaseSetup } from './showcase.js'
import { randomizeContent } from './randomize_content.js'

window.addEventListener('DOMContentLoaded', init)

function init() {
  //toggle footer
  document.querySelector("footer h3").addEventListener("click", () => {
    document.querySelector("footer").classList.toggle("open")
  })

  //random order of content in #showcase
  randomizeContent()

  document.querySelector("header button").addEventListener("click", () => {
    document.querySelector(".main_transporter").classList.toggle("all_projects")
  })

  //Setup showcase functionality
  document.querySelector("#right").addEventListener("animationend", () => {
  showcaseSetup()
  })
  
}
