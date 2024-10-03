const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if(fs.existsSync(logDir)){
    fs.readdirSync(logDir).forEach(file => {
        const filePath = path.join(logDir, file);
        console.log(`delete files...${file}`);

        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logDir);
    console.log("Logs directory removed");
}else{
    console.log("Logs directory does not exists");
}