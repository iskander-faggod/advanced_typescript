"use strict";
//Декоратор - паттерн проективрования = синтаксический сахар
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Log(constructor) {
    console.log(constructor);
}
function Log2(target, propName) {
}
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
};
__decorate([
    Log2,
    __metadata("design:type", String)
], Component.prototype, "name", void 0);
Component = __decorate([
    Log,
    __metadata("design:paramtypes", [String])
], Component);
//# sourceMappingURL=decorators.js.map