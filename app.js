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
    if(error) process.exit(1)

    fs.writeFile(jsonFilePath, JSON.stringify(jsonOut,null,2), error=> { if(error) process.exit(1) })  
    console.log('done!')
})

