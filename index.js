// let resept = prompt('введите цифры');
// console.log(resept);
// let reseptMass = resept.split('');
// console.log(reseptMass);

// let isEqual = true;
// function arraysEqual(arr1, arr2){
// for(let i = 0; i < arr1.length; i++) {
//     if(arr1[i] !== Number(arr2[i])) {
//         isEqual = false;
//     }
// }
// }
// arraysEqual(bigMac, newArr)

// if(isEqual) {
//     console.log("arrays are correct");
// } else {
//     console.log("arrays are not correct");

// }

const bigMac = ['булка', 'огурец', 'сыр', 'котлета', 'булка'];
const inputs = document.querySelectorAll(".input");
const buttonArr = document.querySelector(".btnArr");
const buttonStart = document.querySelector(".btnStart");
const countDown = document.querySelector(".countDown");
let newArr = [];



const createArr = () => {
clickHandler();
  let isEqual = true;
  function arraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        isEqual = false;
      }
    }
  }
  arraysEqual(bigMac, newArr);

  if (isEqual) {
    console.log("arrays are correct");
  } else {
    console.log("arrays are not correct");
  }
};

buttonArr.addEventListener("click", createArr);

let time;

buttonStart.addEventListener("click", function () {
  const content = document.querySelector(".content");
  content.classList.remove("hidden");
  this.remove();
  counter = 2;
  countDown.textContent = counter;
  time = setInterval(() => {
    counter--;
    if (counter > 0) {
      countDown.textContent = counter;
    } else {
      content.classList.toggle("hidden");
      clearInterval(time);
      const lastDiv = document.querySelector(".div_3");
      lastDiv.classList.remove("hidden");
      this.remove();
    }
  }, 1000);
});

function clickHandler() {
  newArr = [];
  inputs.forEach(input => newArr.push(input.value))
  console.log(newArr);
}
