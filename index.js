const express = require('express')
const LogicManager = require('./logic.js')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

const server = app.listen(8080, () => {
    console.log(`Listening at localhost:8080`)
  })
  const io = require('socket.io')(server)

  app.get('/', (req, res) => {
    console.log('rendered homepage')
    res.render('index.html')
  })

  io.on('connection', (socket) => {
    var logicMan = new LogicManager()
    
    socket.on('yearSelected', (year) => {
        console.log("User selected year "+year)
        logicMan.applyYear(year)
    })

    socket.on('daySelected', (day) => {
        console.log("User selected day "+day)
        var dayInput = logicMan.applyDay(day)
        var answer = logicMan.fullAnswer(dayInput.toString())
        socket.emit("answerPart1", answer.partOne)
        socket.emit("answerPart2", answer.partTwo)
        
        
        
      })

  
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  
  })//end io connection