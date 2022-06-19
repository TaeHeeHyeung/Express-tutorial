const { json } = require('express');
var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.

app.get('/', function(req, res) { // '/' 위치에 'get'요청을 받는 경우,
  res.send('Hello World!'); // "Hello World!"를 보냅니다.
});

var memberData = new Object();
memberData.name = "Derveljun";
memberData.activeFlg = true;
memberData.age = 20;


// app.get();
// app.post();
// app.put();
// app.delete();
app.get("/api/posts/:year/:month", (req, res)=>{
  //id = req.params.id;
  res.send(req.params)
})
app.get("/api/courses/:id", (req, res) => {
  memberStr = JSON.stringify(memberData)
  res.send(memberStr);
  res.send([1, 2, 3]);
  id = req.params.id;
  
  if(!course) res.status(404).send('The course with the given ID was not found');
  res.send(course);
});
app.post("/api/customers",(req, res)=>{
  id = req.params.id;
})

var port = 3000; // 사용할 포트 번호를 port 변수에 넣습니다. 
app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
 
});