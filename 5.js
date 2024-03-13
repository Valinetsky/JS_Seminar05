"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

console.log("-------------------5.js-------------------");
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];

// Масса вариантов:
// https://www.geeksforgeeks.org/how-to-create-an-object-from-two-arrays-in-javascript/

// Один из:
const weekMultiLang = {};
en.forEach((k, i) => {
    weekMultiLang[k] = ru[i];
});

console.log(weekMultiLang);
