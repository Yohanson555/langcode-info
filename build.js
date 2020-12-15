const fs = require('fs');
const content = fs.readFileSync("./lang.txt").toString();
const lines = content.split("\r\n");

const res = {};
const codeToHex = {};
const decToHext = {};

lines.forEach(line => {
    const arr = line.split(" \t");

    res[arr[0]] = {
        "name": arr[3],
        "code": arr[2],
        "hex": arr[0],
        "dec": arr[1]
    };

    codeToHex[arr[2]] = arr[0];
    decToHext[arr[1]] = arr[0];
});

fs.writeFileSync("./lang.json", JSON.stringify(res));
fs.writeFileSync("./code_to_hex.json", JSON.stringify(codeToHex));
fs.writeFileSync("./dec_to_hex.json", JSON.stringify(decToHext));