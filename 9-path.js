const path=require('path')

console.log(path.sep);
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath)
const base=path.basename(filePath)
console.log(base);
const ab=path.resolve(__dirname,'content','subfolder','text.txt')
console.log(ab);