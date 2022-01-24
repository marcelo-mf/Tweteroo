import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

let tweets = [];

server.post('/sign-up', (req, res) => {

    res.send('OK');
});

server.post('/tweets', (req, res) => {

    tweets.unshift(req.body);
    res.send('OK');
});

server.get('/tweets', (req, res) => {

    if(tweets.length <= 10) {
        res.send(tweets)
    }

    if(tweets.length > 10) {
        const showTweets = tweets.slice(0, 10);
        res.send(showTweets);
    }

});

server.listen(5000, () => {
    console.log('funcionando')
});
