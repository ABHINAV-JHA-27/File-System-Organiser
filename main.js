#!/usr/bin/env node
let inputArray = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./Commands/help");
let treeObj = require("./Commands/tree");
let organizeObj = require("./Commands/organise");
const { dir } = require("console");
// console.log(inputArray);

let command = inputArray[0];

switch (command) {
    case "tree":
        treeObj.treeKey(inputArray[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArray[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("input right command"); break;
}

