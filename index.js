const red = 173;
const green = 216;
const blue = 230;
const header = document.getElementById("header");
console.log(header.innerText);

function changecolor() {
    //console.log(window.scrollY)
    const scrollFactor = 1 + window.scrollY / 400

    const r = red / scrollFactor
    const g = green / scrollFactor
    const b = blue / scrollFactor

    const updatedColor = `rgb(${r},${g},${b})`;
    //console.log(updatedColor)

    header.style.backgroundColor = updatedColor;



}
changecolor()
window.addEventListener("scroll", changecolor)