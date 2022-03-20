let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizeFn(dirPath) {
    // console.log("Organize Function Implemented for", dirPath);
    let destPath;
    if (dirPath == undefined) {
        // console.log("Input Path is Invalid");
        destPath = process.cwd();
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            destPath = path.join(dirPath, "Organized Files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("Input Path is Invalid");
            return;
        }
    }
    organiseHelper(dirPath, destPath);
}
function organiseHelper(src, dest) {
    let childNames = fs.readdirSync();
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync().isFile();
        if (isFile) {
            // console.log(isFile);
            let category = getCategory(childNames[i]);
            sendFiles(childAddress, dest, category);
        }
    }
}

function getCategory(ext) {
    let extension = path.extname(ext);
    extension = extension.slice(1);
    for (let type in types) {
        let array = types[type];
        for (let i = o; i < array.length; i++) {
            if (extension == array[i]) {
                return type;
            }
        }
    }
    return "Others";
}

function sendFiles(srcFile, destination, category) {
    let categoryPath = path.join(destination, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFile);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFile, destFilePath);
    fs.unlinkSync(srcFile);
}

module.exports = {
    organizeKey: organizeFn
}