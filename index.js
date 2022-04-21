const express = require('express');
const cros = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(cros());
app.use(express.json());

app.get('/', (req, res) => { 
    res.send('Look mama i can code  code node now');

});

const users = [
    {  id: 1, name: 'John Doe',email: 'john@gmail.com', phone: '123-456-7890' },
    {  id: 2, name: 'sabnur Doe',email: 'sabnur@gmail.com', phone: '123-456-7890' },
    {  id: 3, name: 'suchorita Doe',email: 'suchorita@gmail.com', phone: '123-456-7890' },
    {  id: 4, name: 'sabana Doe',email: 'sabana@gmail.com', phone: '123-456-7890' },
    {  id: 5, name: 'purnima Doe',email: 'purnima@gmail.com', phone: '123-456-7890' },
    {  id: 6, name: 'mahi Doe',email: 'mahi@gmail.com', phone: '123-456-7890' },
    {  id: 7, name: 'mousumi Doe',email: 'mousumi@gmail.com', phone: '123-456-7890' }
]

//New Api Creation
app.get('/users' , (req, res) => {
    
//filter by query perameter /serach perameter
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);

    }
    else{
        res.send(users);//Array Response
    }
    
});

// get user dynamically
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    res.send(user);
});

// post a data to the server

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () =>{
    console.log('Listening on post', port);
});
