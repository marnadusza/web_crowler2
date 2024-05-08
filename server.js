const express = require('express');
const bodyParser = require('body-parser');


const app = express()
const port = 3000

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req,res) => {
    res.sendFile('index.html')
})

app.post('/', (req,res) => {
    const input = req.body.userInput
    console.log(input)


})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})