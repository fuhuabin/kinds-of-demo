var fs = require('fs');
var XLSX = require('xlsx');

let data = JSON.parse(fs.readFileSync('./result.json').toString());
let resultData = data.map( item => {
    return Object.values(item);
});
// data.unshift(Object.keys());

let ws = XLSX.utils.json_to_sheet(resultData, {
    // header: Object.keys(data[0])
});
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, '题库');

XLSX.writeFile(wb, './result.xlsx');