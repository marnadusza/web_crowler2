const express = require('express');
const bodyParser = require('body-parser');


const app = express()
const port = 3000

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req,res) => {
    res.sendFile('index.html')
})

app.post('/submit', (req,res) => {
   const userInput = req.body.inputValue;
   console.log(userInput)
   res.send('Data received by server: ' + userInput)
       
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})