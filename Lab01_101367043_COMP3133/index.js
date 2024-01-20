// delete file name.txt if it already exists using fs module

const fs = require('fs') //use fs module
const csv = require('csv-parser'); //use csv-parser module that was installed using npm
const canadaFile = "canada.txt"; //create a variable for canada.txt
const usaFile = "usa.txt"; //create a variable for usa.txt

//if the usa and canada txt files exists, delete it
if(fs.existsSync(usaFile)){
    fs.unlinkSync(usaFile, (err) => {
        if(err){ console.log(err);} //guard clause
        return;
    });
}

if(fs.existsSync(canadaFile)){
    fs.unlinkSync(canadaFile, (err) => {
        if(err){ console.log(err);} //guard clause
        return;
    });
}

// write to new txt file with write stream
const usaFileStream = fs.createWriteStream(usaFile);
usaFileStream.write("country,year,population\n");// write the column headers to usa.txt

const canadaFileStream = fs.createWriteStream(canadaFile);
canadaFileStream.write("country,year,population\n"); // write the column headers to canada.txt



// read the csv file using readStream
fs.createReadStream('input_countries.csv')
.pipe(csv()) //pipe the csv file to csv-parser
.on('data', (row) => { //for each row in the csv file
    // each row becomes a dictionary with the column headers as the keys 
    // filter canada
    if(row.country == "Canada"){
        // append the country name and population to canada.txt
        canadaFileStream.write(`${row.country},${row.year},${row.population}\n`);
    }
    
    // filter United States
    if(row.country == "United States"){
        // append the country name and population to usa.txt
        usaFileStream.write(`${row.country},${row.year},${row.population}\n`);
    }
})
.on('end', () => {
    console.log('CSV file successfully processed');
});


