const fs = require('fs');

const inputFolder = "/Users/mohit/Projects/stock_analysis_site/code/script_io/input";
const inputFile = "NSE.csv";

const outputFolder = "/Users/mohit/Projects/stock_analysis_site/code/script_io/output";
const outputFile = "NSE.json"

const csvFile = fs.readFileSync(inputFolder+'/'+inputFile,'utf8')

let lines = csvFile.split('\n');

/*
resp object shape
{
    name:[3]
    instrumentKey:[0],
    tradingSymbol:[2],
}
*/

const respObj = [];

lines.forEach((line)=>{
    let cols = line.split(",");
    if(cols[0].includes("NSE_EQ|IN") && cols[4]!=='""' && !cols[3].includes("GOI")){
        respObj.push({
            name:cols[3].replaceAll('"',''),
            instrumentKey:cols[0].replaceAll('"',''),
            tradingSymbol:cols[2].replaceAll('"','')
        });
    }
        

});

// Write the JSON file 
fs.writeFileSync(outputFolder+'/'+outputFile, JSON.stringify(respObj)); 