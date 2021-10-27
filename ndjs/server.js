const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const Mongos = 'mongodb+srv://jwkim:wjdal0926@cluster0.zw8e9.mongodb.net/todoapp?retryWrites=true&w=majority';
var db;

MongoClient.connect(Mongos, function(에러, client){
    if(에러){ return console.log(에러)}

    db = client.db('todoapp');

    app.listen(8080, function(){
        console.log('listening on 8080');
    });
})
app.use(express.urlencoded({extended: true})) 

app.set('viewengine', 'ejs');


//누군가가 /pet 으로 방문을 하면..
//pet관련된 안내문을 띄워주자

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', (req, res) => {
    res.sendFile(__dirname + '/write.html')
});

app.get('/pet', (req, res) => {
    res.send('반갑습니다. 펫 용품을 쇼핑할 수 있는 페이지 입니다.');
})

app.get('/bueaty', (req, res) => {
    res.send('뷰티용품을 가득 담을 수 있는페이지 입니다.')
})

app.post('/add', (req, res) => {
    res.send('전송완료');

    db.collection('post').insertOne({제목 : req.body.title, 날짜 : req.body.date}, function(에러, 결과){
        console.log('저장완료');
    });
})

app.get('/views/list', function(req, res){

    db.collection('post').find().toArray(function(err, result){
        console.log(result);
        res.render('list.ejs', {posts : result});
    });


})