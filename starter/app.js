//==============using simple program==============//

// const projects = document.querySelectorAll(".number");
// // ======== simple logic ==========
// projects.forEach((each) => {
// const hours = each.dataset.value;
// let counter = 0;
// let x = setInterval(function () {
//   counter += 2;
//   if (counter <= hours) {
//     each.textContent = ` ${counter}+`;
//   } else {
//     clearInterval(x)
//   }

// }, 1);
// });

// ======== using new promise and async await=========//
const projects = document.querySelectorAll(".number");
const start = async () => {
  for (const each of projects) {
    const value = await inrcounter(each);
    console.log(value);
  }
};

const inrcounter = (each) => {
  return new Promise((resolve, reject) => {
    const hours = each.dataset.value;
    let counter = 0;
    let x = setInterval(function () {
      counter += 1;
      if (counter <= hours) {
        each.textContent = ` ${counter}+`;
      } else {
        clearInterval(x);
        resolve(counter);
      }
    }, 1);
  });
};

start();
