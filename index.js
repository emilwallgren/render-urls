const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;


async function run(userAgent, viewPortWidth, viewPortHeight, url) {

    let browser = await puppeteer.launch({headless: true});
    let page = await browser.newPage();
    
    await page.setUserAgent(userAgent);

    // Set viewport dimensions
    await page.setViewport({width: viewPortWidth, height: viewPortHeight});

    // Set unique id
    let date = Date.now();

    // Creat folder for output
    let newFolder = `./Output/${date}`;
    if (!fs.existsSync(newFolder)){
        fs.mkdirSync(newFolder);
    }

    // Open the page and wait a bit so that the browser finishes executing JavaScript
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitFor(5 * 1000);
    
    // Save screenshot to file with timeStamp-path
    await page.screenshot({ path: `./Output/${ date }/${ date }.jpg`, type: 'jpeg'});

    // Save html to file with timeStamp-path
    const html = await page.content();
    fs.writeFileSync(`./Output/${ date }/${ date }.html`, html);

    await page.close();
    await browser.close();
}



app.use(express.static('views'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views', 'form.html'));
});

app.post('/render', (req, res) => {
    let width = Number(req.body.width);
    let height = Number(req.body.height);
    let userAgent = req.body.useragent;
    
    let textArea = req.body.urls;
    const lines = textArea.split('\r\n');

    lines.forEach(url => {
        run(userAgent, width, height, url);
        itemsProcessed++;
    });

    res.redirect(301, "/download")

});

app.get('/download', (req, res) => {
    res.send("Downloading...");
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
