const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log('mbrook server 5adam !!! At port 4000');
});

app.get('/download', (req,res) => {
    var URL=req.query.URL;
    res.header('Content-Disposition', `attachment; filename="audio.mp3"`);
    
    ytdl(URL, {
        filter:'audioonly',
        quality:'highest'
        }).pipe(res);
});

    




