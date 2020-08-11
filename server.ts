import express, { response } from 'express';

const app = express();

app.get('/users', (request,reponse) => {
    return response.send()
})

app.listen(3333);