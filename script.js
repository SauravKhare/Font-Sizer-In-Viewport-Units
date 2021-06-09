const baseFont = document.querySelector('#baseFont');
const inPoints = document.querySelector('#fontinPoints');
const convertButton = document.querySelector('#go');
const vwPara = document.querySelector('#fontInVW');
const vhPara = document.querySelector('#fontInVH');

let inBaseValue;
let inPointsValue;
let final;
let forMobile;

function fontSizer(base, points) {
    let inBet = points/base;
    final = inBet * 1.015;
    forMobile = final * 2;
}

baseFont.addEventListener('keyup', function(e) {
    // console.log(e.target.value);
    return inBaseValue = e.target.value;
});

inPoints.addEventListener('keyup', function(e) {
    // console.log(e.target.value);
    return inPointsValue = e.target.value;
});

convertButton.addEventListener('click', () => {
    console.log(inBaseValue, inPointsValue);
    fontSizer(inBaseValue, inPointsValue);
    console.log(final, forMobile);
    vwPara.textContent = `In VW : ${final}vw`;
    vhPara.textContent = `In VH (for Mobile) : ${forMobile}vh`;
});
