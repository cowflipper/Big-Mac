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
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const input5 = document.querySelector(".input5");
const stringnumber = document.querySelector(".stringNumber");
const button = document.querySelector(".button");
const buttonArr = document.querySelector(".btnArr");
const buttonStart = document.querySelector(".btnStart");
const countDown = document.querySelector(".countDown");
let newString;
let newArr = [];

const inputHandler = () => {
  newString = input1.value +" " + input2.value +" " + input3.value +" " +  input4.value +" " + input5.value;
  stringnumber.innerHTML = newString;
  console.log(newString);
};

const createArr = () => {
  // newArr.push(input1.value, input2.value, input3.value, input4.value, input5.value,)
  newArr = newString.split(" ");
  console.log(newArr);
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

button.addEventListener("click", inputHandler);

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

