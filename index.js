const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const course = require('./data/course.json')

app.get('/', (req, res) =>{
    res.send("course api runing")
});

app.get('/course-categories',(req, res) =>{
    res.send(course)
})

app.get('/course-categories/:id', (req, res)=>{
    const id= parseInt(req.params.id); 
  const cour = course.find(c => c.id === id ) || {} 
  res.send(cour) 
})


app.listen(port, ()=>{
    console.log("server corse loder", port)
})