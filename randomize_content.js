const allTemps = document.querySelectorAll("template");
const leftTransporter = document.querySelector("#left .transporter");
const rightTransporter = document.querySelector("#right .transporter");

rightTransporter.style.setProperty("--trans-width", allTemps.length * 100 + "%")


export function randomizeContent() {
    let count = 0
    const countArray = []

    allTemps.forEach(() => {
        countArray.push(count);
        count++;
    });

    shuffle(countArray);

    countArray.forEach(appendElms);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function appendElms(i) {
    console.log(i)
    const temp = allTemps[i];
    const klon = temp.cloneNode(true).content;
    const txt = klon.querySelector(".container") 
    const img = klon.querySelector(".img_container")
    leftTransporter.appendChild(txt)
    rightTransporter.appendChild(img)

}

