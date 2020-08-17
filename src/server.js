//server
const express = require('express')
const server = express()

const { pageLading, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Nunjucks configuration(Template engine)
const nunjucks = require('nunjucks')
const { urlencoded } = require('express')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Routes / pathing

//recebe os dados do req.body
server.use(express.urlencoded({ extended: true }))
    .use(express.static("public"))

.get("/", pageLading)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)


//to map route without uses function. 
//.get("/", (req, res) => {
//    return res.sendFile(__dirname + "/views/index.html")
//})
//.get("/study", (req, res) => {
//    return res.sendFile(__dirname + "/views/study.html")
//})
//
//.get("/give-classes", (req, res) => {
//       return res.sendFile(__dirname + "/views/give-classes.html")
//    })

//server's door
.listen(5500)