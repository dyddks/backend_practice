const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('../server/config/db')
const app = express()
const PORT = 4000

app.use(cors())
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
    console.log('자료 1개를 저장하였습니다')
  })
})

// 게시글 삭제
app.delete('/delete', (req, res) => {
  let sql = `delete from react_test.board where (id=${id})`

  connection.query(sql, (err, result) => {
    if(err) throw err;
    res.send('삭제되었습니다.')
    console.log('삭제되었습니다.')
  })
})

// 게시글 수정

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`)
})