let express = require("express");
let app = express();

//JSファイルは静的ファイルに置こうね！！！！！！！！！！！！！！！！！！１
//publicがルートだよ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
app.use(express.static('public'));


/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
let server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", function(req, res, next){
    res.sendFile(__dirname + '/views/view.html');
});
