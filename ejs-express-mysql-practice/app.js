const express = require('express')
const ejs = require('ejs')
let cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./dbConfig')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/board', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const title = req.body.title;
  const content = req.body.content;

  let sql = `insert into board(id, userName, title, content)
  value('${id}','${name}','${title}','${content}')`
  
  connection.query(sql, (err, result) => {
    if(err) throw err;
    console.log('자료 1개를 저장하였습니다')
    res.send("<script> alert('등록되었습니다'); </script>")
  })
})


app.listen(port, () => {
  console.log('listning')
})