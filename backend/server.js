import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("server is ready");
});
app.get('/api/jokes', (req, res) => {
    const jokes =[
        {
            id : '1',
            title : 'joke1',
            content : 'this is a joke'
        },
        {
            id : '2',
            title : 'joke2',
            content : 'this is a joke'
        },
        {
            id : '3',
            title : 'joke3',
            content : 'this is a joke'
        }
    ];
    res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server are running on this port http://localhost:${port}`)
})