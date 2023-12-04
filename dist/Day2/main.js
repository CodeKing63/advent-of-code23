"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
const data_1 = require("./data");
let total = 0;
function Compute() {
    const input = (0, data_1.GetData)().split('\n');
    const newArr = input.map((item, index) => {
        let obj = {};
        let tempArr = [];
        const game = item.replace(`Game ${index + 1}:`, '').split(/[;]/);
        const clean = game.map((item) => {
            let obj = {};
            const parse = item.split(',');
            parse.map((item) => {
                const Num = item.match(/\d+/g);
                const val = parseInt(Num);
                if (item.includes('red'))
                    obj['red'] = obj.red ? obj.red + val : val;
                if (item.includes('blue'))
                    obj['blue'] = obj.blue ? obj.blue + val : val;
                if (item.includes('green'))
                    obj['green'] = obj.green ? obj.green + val : val;
            });
            return obj;
        });
        return clean;
    });
    const Eval = (input) => {
        for (const item of input) {
            if (item.red > 12 || item.blue > 14 || item.green > 13)
                return false;
        }
    };
    newArr.map((item, index) => {
        const game = index + 1;
        console.log(item);
        if (Eval(item) !== false)
            total += game;
    });
    console.log(total);
}
exports.default = Compute;
//# sourceMappingURL=main.js.map