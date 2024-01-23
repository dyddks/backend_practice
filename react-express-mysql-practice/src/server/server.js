const express = require('express')
let cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const connection = require('../server/config/db')
const app = express()
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

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
    res.send({status: 1})
    console.log('회원가입이 완료되었습니다.')
  })
})

// 로그인
app.post('/user/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let sql = `select * from user where email='${email}' and password='${password}'`
  
  connection.query(sql, (err, result) => {
    if (err) throw err;
    try {
      // access Token 발급
      const accessToken = jwt.sign({
        id: result[0].userId,
        userName: result[0].userName,
        email: result[0].email,
        phone: result[0].phone,
      }, 'accesssecret', {expiresIn: '1m', issuer: 'YongAhn'})

      // refresh Token 발급
      const refreshToken = jwt.sign({
        id: result[0].userId,
        userName: result[0].userName,
        email: result[0].email,
        phone: result[0].phone,
      }, 'refreshsecret', {expiresIn: '24h', issuer: 'YongAhn'})

      // token 전송
      res.cookie('accessToken', accessToken, {
        secure: false,
        httpOnly: true,
      })

      res.cookie('refreshToken', refreshToken, {
        secure: false,
        httpOnly: true,
      })

      res.status(200).json('login success')
    } catch (error) {
      res.status(500).json(error)
    }
  })
})

app.get('/user/accessToken', (req, res) => {
  try {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, 'accesssecret');
    let sql = `select * from user where email='${data.email}'`

    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json(result[0])
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

app.get('/user/refreshToken', (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    const data = jwt.verify(token, 'refreshsecret');
    let sql = `select * from user where email='${data.email}'`

    connection.query(sql, (err, result) => {
      if (err) throw err;

      const accessToken = jwt.sign({
        id: result[0].userId,
        userName: result[0].userName,
        email: result[0].email,
        phone: result[0].phone,
      }, 'accesssecret', {expiresIn: '1m', issuer: 'YongAhn'})

      res.cookie('accessToken', accessToken, {
        secure: false,
        httpOnly: true,
      })

      res.status(200).json('Access Token Recreated')
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// 회원탈퇴
app.delete('/user/unregister', (req, res) => {
  const userName = req.body.userName;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;

  let sql = `delete from user where userName='${userName}' and phone='${phone}' and email='${email}' and password='${password}'`

  connection.query(sql, (err, result) => {
    if (err) throw err;
    
    res.send(result.affectedRows)
  })
})

// 회원정보 수정

app.post('/user/update', (req, res) => {
  const userName = req.body.userName;
  const phone = req.body.phone;
  const password = req.body.password;

  let sql = `update user set userName='${userName}', phone='${phone}', password='${password}'`

  connection.query(sql, (err, result) => {
    if (err) throw err;

    res.send({status: 1})
  })
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`)
})