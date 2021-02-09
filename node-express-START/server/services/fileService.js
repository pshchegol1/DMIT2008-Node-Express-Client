/* 
    Read and Write File Utility
*/

const fs = require('fs');
const path = require('path');


const getFileContents = (filePath) =>{

    let pathToFile = path.join(__dirname, filePath);
    let fileContents = fs.readFileSync(pathToFile)
    fileContents = JSON.parse(fileContents)
    console.log(fileContents)

    return fileContents

}

const writeFileContents = (filePath, data) =>{

    const dummyData = {username:"pogoreliy", email:"pogoreliy@yahoo.com", password:"pogoreliy"}
    let fileContents = fs.readFileSync(path.join(__dirname, filePath))
    fileContents = JSON.parse(fileContents)
    fileContents.push(dummyData)
    fileContents = JSON.stringify(fileContents)

    fs.writeFileSync(path.join(__dirname, filePath),fileContents)
    
}

writeFileContents("../data/users.json");