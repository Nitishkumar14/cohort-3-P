// const fs = require("fs");

// const contents= fs.readFileSync("a.txt", "utf-8")
// console.log(contents);
// const content= fs.readFileSync("b.txt", "utf-8")
// console.log(content);

const fs = require("fs");

function read(err,data)
{
    // console.log("error is ");
    // console.log(err);
    // console.log("Data is ")
    // console.log(data);

    // it can be written as

    if(data)
    {
        console.log("error file not found");
    }
    else
    {
        console.log(data);
    }
}
fs.readFile("a.txt", "utf-8", read);


fs.readFile("b.txt", "utf-8", read);

// console.log("Done")
