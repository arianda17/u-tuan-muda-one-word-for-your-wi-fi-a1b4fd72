import * as fs from "fs";

const word = "limping";
fs.writeFileSync("/output/entry.txt", word);
console.log(word);