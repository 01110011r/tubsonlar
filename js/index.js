const form = document.querySelector("form"),
  input = document.querySelector("input"),
  block = document.querySelector(".block");

// console.log(form, input);

// 2-

// const tubNums = [];
// const newArr = [];
// let endTubNum;
// function myFun(params) {
//   params.split(",").filter((element) => {
//     for (let i = 2; i < element; i++) {
//       newArr.push(i);
//     }
//     if (newArr.every((num) => element % num !== 0)) {
//       tubNums.push(element);
//       return console.log(tubNums);
//     }
//   });
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   myFun(input.value);

//   console.log(endTubNum);
// });

// const myPrompt = Number(prompt("qiymat kiriting !!!"));

// 2- ishladi hatoligi bor.

// 1-

// console.log(myPrompt);
// const newArr = [];
// const tubNum = [];
// function myFun(parametrs) {
// parametrs.fil
// }

// console.log(myFun(myPrompt));

// console.log(
//   newArr.every((calc) => {
//     return myPrompt % calc !== 0;
//   })
// );

//   parametrs.map((parametr) => {
// for (let i = 2; i <= parametr - 1; i++) {
//     newArr.push(i);
//   }
//   console.log(newArr);
//   if (
//     newArr.every((calc) => {
//       return parametr % calc !== 0;
//     })
//   ) {
//     return parametr;
//   } else {
//     return "!!!";
//   }
// });
// 1-  to'g'ri ishladi.

// 3-

function myFun3(params) {
  for (let i = 2; i < params; i++) {
    if (params % i === 0) {
      return false;
    }
  }
  return params > 1;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const h4 = document.createElement("h4");
  h4.style.color = "white";
  if (input.value.split(",").filter(myFun3).length > 0) {
    h4.textContent = "tub sonlar  " + input.value.split(",").filter(myFun3);
  } else {
    h4.textContent = "tubson emas.";
  }
  block.append(h4);
  console.log(input.value.split(",").filter(myFun3));
  form.reset();
});

// 3-100% ishladi.
