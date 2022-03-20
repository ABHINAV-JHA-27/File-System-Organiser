let fs = require("fs");
let path = require("path");

function treeFn(dirPath) {
    // console.log("Tree Function Implemented for", dirPath);
    let destPath;
    if (dirPath == undefined) {
        // console.log("Input Path is Invalid");
        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        } else {
            console.log("Input Path is Invalid");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    let isFile = fs.lstat(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "|----> " + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + "|----> " + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey: treeFn
}