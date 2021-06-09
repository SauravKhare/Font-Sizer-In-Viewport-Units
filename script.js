const baseFont = document.querySelector('#baseFont');
const inPoints = document.querySelector('#fontinPoints');
const convertButton = document.querySelector('#go');
const vw = document.querySelector('#inVW');
const vh = document.querySelector('#inVH');

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
    vw.textContent = final;
    vh.textContent = forMobile;
});
