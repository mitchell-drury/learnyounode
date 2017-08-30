let fs = require ('fs');

fs.readdir(process.argv[2], {"encoding":"utf8"}, function (err, data) {
    let dotIndex;
    for (let i = 0; i < data.length; i++) {
        dotIndex = data[i].indexOf('.');
        if(dotIndex >= 0 && data[i].slice(dotIndex+1) === process.argv[3]) {
            console.log(data[i]);
        }
    }
});