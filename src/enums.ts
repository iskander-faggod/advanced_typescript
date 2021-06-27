// enum Season { Winter, Spring, Summer, Autumn };

// let current: Season = Season.Summer;
// console.log(current);       // 2
// current = Season.Autumn;    // изменение значения

enum Season {
    Winter = "Зима",
    Spring = "Весна",
    Summer = "Лето",
    Autumn = "Осень"
}

const current: Season = Season.Summer;
console.log(current);   // Лето