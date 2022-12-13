const http = require('http');

const port=process.env.PORT || 3000
const express = require('express')
const LogicManager = require('./logic.js')
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.render('index.html')
    res.end()
});

server.listen(port,() => {

    console.log(`Server running at port `+port);
    
    });

// const express = require('express')
// const LogicManager = require('./logic.js')
// const app = express()
// const port = process.env.PORT | 3000

// app.use(express.urlencoded({extended: true}))
// app.use(express.json())
// app.use(express.static('public'))

// const server = app.listen(port, () => {
//     console.log(`Listening at localhost${port}`)
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');

//     res.end('<h1>Hello World</h1>');
  //})
  const io = require('socket.io')(server)


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

    socket.on('asciiRequest', () => {
      console.log('ascii requested, merry christmas')
      var asciiResponse = logicMan.getRandomAscii()
      socket.emit("asciiRecieved", asciiResponse)
    })
  
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  
  })//end io connection