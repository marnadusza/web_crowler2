const express = require('express');
const bodyParser = require('body-parser');
const jsdom = require('jsdom')
const{crawlPage} = require('./crawl')
const{printReport} = require('./raport')


const app = express()
const port = 3000

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req,res) => {
    res.sendFile('index.html')
})

app.post('/submit', async (req,res) => {
   const userInput = req.body.inputValue;
   console.log(userInput)

   try {
    const pages = await crawlPage(userInput, userInput, {});
    printReport(pages);
    res.send('Crawling completed. Check server logs for details.');
} catch (error) {
    console.error('Error during crawling:', error);
    res.status(500).send('Error during crawling. Check server logs for details.');
}

       
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})