const csvFilePath=process.argv[2]

const csv=require('csvtojson')
const fs=require('fs')

const jsonFilePath = csvFilePath.split('.')[0]+'.json'

var jsonOut = []

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object
    jsonOut.push(jsonObj)
})
.on('done',(error)=>{
    if(error) console.error(error)

    fs.writeFile(jsonFilePath, JSON.stringify(jsonOut))  
    console.log('end')
})

