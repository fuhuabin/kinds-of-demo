const https = require('https');

/**
 * use this method to get a promise that return the base64 string of an image
 * if the protocol is http,use http library,like this: const http = require('http'); http.get...
 * @param {img url} url 
 * @returns 
 */
const getImg = function(url) {
    return new Promise(resolve => {
        https.get(url,function(res){
        　　 let chunks = []; //用于保存网络请求不断加载传输的缓冲数据
        　　 let size = 0;　　 //保存缓冲数据的总长度
        
        　　 res.on('data',function(chunk){
        　　　　  chunks.push(chunk);　 
        　　　　  size += chunk.length;　　//累加缓冲数据的长度
        　　 });
        
        　　 res.on('end',function(err){
                let data = Buffer.concat(chunks, size);
                resolve(data.toString('base64'));
            });
        });
    })
}

getImg('xxx').then(base64Str => {
    // use the base64 string here
    // fyi: you should add data:image/png;base64, string before the base64Str，while image/png should be changed to the type of image if it's not png
});