let prevScrlValue = 0
let currentSection = 0

let pause = false

export function showcaseSetup() {

  const showcase = document.querySelector("#showcase")

  showcase.addEventListener('wheel', mouseScrolled)

  //Resets prevScrlValue after 0.5s without scolling
  let scrlValueResetTimer = null
  showcase.addEventListener('wheel', () => {
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
  const showcase = document.querySelector("#showcase")
  let autoMoveInt = setInterval(autoMove, 5000)
  showcase.addEventListener('wheel', () => {
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
  let reset = false
  if (scrlValue > prevScrlValue && pause === false) {
    pauseScrolling()
    currentSection++
    if (currentSection > maxSectionValue) {
      currentSection = 0
      reset = true
    }
    moveTransporter(reset)
  }
}

function moveToPrev(scrlValue) {
  const maxSectionValue = document.querySelectorAll('#left .container').length - 1
  let reset = false
  if (scrlValue * -1 > prevScrlValue && pause === false) {
    pauseScrolling()
    currentSection--
    if (currentSection < 0) {
      currentSection = maxSectionValue
      reset = true
    }
    moveTransporter(reset)
  }
}

function moveTransporter(reset) {
  let transValue = 100 / document.querySelectorAll('#left .container').length

  if (reset) {
    document.querySelectorAll('#showcase  .transporter').forEach((elm) => {
      elm.style.setProperty('--trans-val', -currentSection * transValue + '%')
      elm.style.setProperty("--trans-speed", "1.7s")
    })
  } else {

      document.querySelectorAll('#showcase  .transporter').forEach((elm) => {
        elm.style.setProperty('--trans-val', -currentSection * transValue + '%')
        elm.style.setProperty("--trans-speed", "0.8s")
      })
    }
}

function pauseScrolling() {
  pause = true
  setTimeout(() => {
    pause = false
  }, 1000)
}
