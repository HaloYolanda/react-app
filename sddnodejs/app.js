var http = require('http')
var fs = require('fs')
fs.readdir('.', function (err, files) {
    console.log('err', typeof err, err)
    if (err != null) {
        console.log(err)
    } else {
        console.log('files', files)
    }
})
// 删除文件 unlink
// var file = 'xxx.txt'
// fs.unlink((file, err) => {
//     if (err) {
//         console.log('404')
//     } else {
//         console.log(`${file} 成功删除`)
//     }

// })

http.createServer(function (req, res) {
        var url = req.url

        if (url === '/') {

            fs.readFile('../public/index.html', function (err, data) {
                if (err) {
                    return console.log('404')
                }
                res.end(data)
            })
        } else if (url.indexOf('/public/') === 0) {
            console.log(url)
        }
    })
    .listen(3000, function () {
        console.log('running...')
    })