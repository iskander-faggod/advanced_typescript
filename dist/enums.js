"use strict";
// enum Season { Winter, Spring, Summer, Autumn };
// let current: Season = Season.Summer;
// console.log(current);       // 2
// current = Season.Autumn;    // изменение значения
var Season;
(function (Season) {
    Season["Winter"] = "\u0417\u0438\u043C\u0430";
    Season["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["Summer"] = "\u041B\u0435\u0442\u043E";
    Season["Autumn"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season || (Season = {}));
const current = Season.Summer;
console.log(current); // Лето
//# sourceMappingURL=enums.js.map