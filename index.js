const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Node')
});

const users = [
    { id: 1, name: 'Ninguang', email: 'eulalawrence@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Qiqi', email: 'jean@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Mona', email: 'amber@gmail.com', phone: '0178888888' },
    { id: 4, name: 'Diona', email: 'kaeya@gmail.com', phone: '0178888888' },
    { id: 5, name: 'Xingqui', email: 'lisa@gmail.com', phone: '0178888888' },
    { id: 6, name: 'Xiangling', email: 'bennett@gmail.com', phone: '0178888888' },
    { id: 7, name: 'Keqing', email: 'fischl@gmail.com', phone: '0178888888' },
]

/* app.get('/users', (req, res) => {
    res.send(users);
} */


/* filter by search query parameter */
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users);

    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('mango fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})