const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('../server/config/db')
const app = express()
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 게시글 목록 조회
app.get('/boardList', (req, res) => {
  let sql = 'select * from board'

  connection.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result)
    console.log(result)
  })
})

// 게시글 상세 조회
app.get(`/board/:id`, (req, res) => {
  let sql = `select * from board where id=${req.params.id}`

  connection.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result)
    console.log(result)
  })
})

// 게시글 등록
app.post('/write', (req, res) => {
  const name = req.body.userName;
  const title = req.body.title;
  const content = req.body.content;

  let sql = `insert into board(userName, title, content)
  value('${name}','${title}','${content}')`
  
  connection.query(sql, (err, result) => {
    if(err) throw err;
    console.log('게시글을 등록하였습니다.')
  })
})

// 게시글 삭제
app.delete('/delete/:id', (req, res) => {
  let sql = `delete from react_test.board where (id=${req.params.id})`

  connection.query(sql, (err, result) => {
    if(err) throw err;
    console.log('게시글이 삭제되었습니다.')
  })
})

// 게시글 수정
app.post('/update', (req, res) => {
  const id = req.body.id;
  const name = req.body.userName;
  const title = req.body.title;
  const content = req.body.content;

  let sql = `update react_test.board 
  set userName='${name}', title='${title}', content='${content}'
  where id=${id}`
  
  connection.query(sql, (err, result) => {
    if(err) throw err;
    console.log('게시글을 수정하였습니다.')
  })
})

// 회원가입
app.post('/user/register', (req, res) => {
  const userName = req.body.userName;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;

  let sql = `insert into user(userName, phone, email, password)
  value('${userName}','${phone}','${email}','${password}')`
  
  connection.query(sql, (err, result) => {
    if(err) throw err;
    console.log('회원가입이 완료되었습니다.')
  })
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`)
})