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

const bigMac = [1, 3, 5];
const input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const stringnumber = document.querySelector(".stringNumber");
const button = document.querySelector(".button");
const buttonArr = document.querySelector(".btnArr");
const buttonStart = document.querySelector(".btnStart");
const countDown = document.querySelector(".countDown")
let newString;
let newArr = [];

const inputHandler = () => {
  newString = input.value + input2.value + input3.value;
  stringnumber.innerHTML = newString;
  console.log(newString);
};

const createArr = () => {
  newArr = newString.split("");
  console.log(newArr);
  let isEqual = true;
  function arraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== Number(arr2[i])) {
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

buttonStart.addEventListener("click", function() {
    const content = document.querySelector('.content');
    content.classList.remove('hidden');
    this.remove();
    counter = 3;
    countDown.textContent = counter;
    time = setInterval(() => {
        counter --;
        if(counter > 0){
            countDown.textContent = counter;
        } else{
          content.classList.toggle('hidden');
            clearInterval(time);
        } 
    }, 1000)
})