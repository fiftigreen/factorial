/*
abc

bac
bca

-bac
acb

-acb
cab

cba
*/

"use strict";

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

window.onload = function (e) {
  let str = "abc";
  let str_mass = [];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    str_mass.push(str.charAt(i));
  }

  let facts = [];
  function fact(N) {
    if (N == 0 || N == 1) return 1;
    if (facts[N]) return facts[N];

    facts[N] = N * fact(N - 1);
    return facts[N];
  }

  // Смысл заключается в том, что мы на каждой итерации берем элемент из массива и убираем его,
  // переходя к следующей итерации, имеем массив меньшей длины...
  //  и так продолжаем пока исходный массив не опустеет.
  //  При этом номер комбинации получается исходя из порядка вынимания элементов массива.
  //  Аналогичный подход используется в алгоритме Фишера–Йетса для перемешивания массива, только там элемент,
  //   который будет выбран на каждой итерации берется случайным образом.

  function permutation(index, A) {
    let n = A.length;
    let i = index + 1;
    let res = [];
    for (let t = 1; t <= n; t++) {
      let f = fact(n - t); //расчет факториала
      console.log("f=" + f);
      let k = Math.floor((i + f - 1) / f); //округление до меньшего целого
      console.log("k=" + k);
      res.push(A.splice(k - 1, 1)[0]); // вынимаем элемент из масива
      console.log(res);
      i -= (k - 1) * f;
      console.log("i=" + i);
    }
    if (A.length) res.push(A[0]);
    console.log(res);
    return res;
  }

  function dublicate(mass) {
    let mass2 = [],
      res = JSON.parse(JSON.stringify(mass));
    for (let i = mass.length - 1; i >= 0; i--) {
      mass2 = mass[i];
      for (let j = 0; j < mass2.length - 1; j++)
        if (mass2[j] === mass2[j + 1]) {
          res.splice(i, 1);
          break;
        }
    }
    return res;
  }

  for (let i = 0; i < fact(str_mass.length); i++) {
    console.log(i);
    result.push(permutation(i, str_mass.slice(0)));
  }

  // this.console.log(str_mass);
  this.console.log(result);
  //this.console.log(dublicate(result));
  //console.log(facts);
};
