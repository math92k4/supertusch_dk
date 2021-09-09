
import './sass/style.scss'

import { showcaseSetup } from './showcase.js'
import { randomizeContent } from './randomize_content.js'

window.addEventListener('DOMContentLoaded', init)

function init() {
  randomizeContent()
  showcaseSetup()
}
