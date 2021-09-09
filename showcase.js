let prevScrlValue = 0
let currentSection = 0

let pause = false

export function showcaseSetup() {
  window.addEventListener('wheel', mouseScrolled)

  //Resets prevScrlValue after 0.5s without scolling
  let scrlValueResetTimer = null
  window.addEventListener('wheel', () => {
    if (scrlValueResetTimer !== null) {
      clearTimeout(scrlValueResetTimer)
    }
    scrlValueResetTimer = setTimeout(() => {
      prevScrlValue = 0
    }, 500)
  })

  autoMoveSetup()
}

function autoMoveSetup() {
  let autoMoveInt = setInterval(autoMove, 5000)
  window.addEventListener('wheel', () => {
    clearInterval(autoMoveInt)
    autoMoveInt = setInterval(autoMove, 5000)
  })

  function autoMove() {
    moveToNext(99999)
  }
}

function mouseScrolled(e) {
  if (e.deltaY > 0) {
    moveToNext(e.deltaY)
  } else {
    moveToPrev(e.deltaY)
  }
  updatePrevScrlValue(e.deltaY)
}

function updatePrevScrlValue(scrlValue) {
  if (scrlValue < 0) {
    prevScrlValue = scrlValue * -1
  } else {
    prevScrlValue = scrlValue
  }
}

function moveToNext(scrlValue) {
  const maxSectionValue = document.querySelectorAll('#left .container').length - 1
  if (scrlValue > prevScrlValue && pause === false) {
    pauseScrolling()
    currentSection++
    if (currentSection > maxSectionValue) {
      currentSection = 0
    }
    moveTransporter()
  }
}

function moveToPrev(scrlValue) {
  const maxSectionValue = document.querySelectorAll('#left .container').length - 1
  if (scrlValue * -1 > prevScrlValue && pause === false) {
    pauseScrolling()
    currentSection--
    if (currentSection < 0) {
      currentSection = maxSectionValue
    }
    moveTransporter()
  }
}

function moveTransporter() {
  const transValue = 100 / document.querySelectorAll('#left .container').length
  document.querySelectorAll('#showcase  .transporter').forEach((elm) => {
    elm.style.setProperty('--trans-val', -currentSection * transValue + '%')
  })
}

function pauseScrolling() {
  pause = true
  setTimeout(() => {
    pause = false
  }, 1000)
}
