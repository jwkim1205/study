const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})) 

app.listen(8080, function(){
    console.log('listening on 8080');
});

//누군가가 /pet 으로 방문을 하면..
//pet관련된 안내문을 띄워주자

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', (res, req) => {
    req.sendFile(__dirname + '/write.html')
});

app.get('/pet', (요청, 응답) => {
    응답.send('반갑습니다. 펫 용품을 쇼핑할 수 있는 페이지 입니다.');
})

app.get('/bueaty', (req, res) => {
    res.send('뷰티용품을 가득 담을 수 있는페이지 입니다.')
})

app.post('/add', (req, res) => {
    res.send('전송완료');
    console.log(req.body.title);
    console.log(req.body.date);
})