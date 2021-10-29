const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('wow,I am excited to learn Node And Express with nodemon');
});

const users = [
    {id: 0, name: "shabana", email: "shabana@gmail.com", phone: "01788677565"},
    {id: 1, name: "shabnoor", email: "shabnoor@gmail.com", phone: "01788677565"},
    {id: 2, name: "shrabonti", email: "shrabonti@gmail.com", phone: "01788677565"},
    {id: 3, name: "shuchorita", email: "shuchorita@gmail.com", phone: "01788677565"},
    {id: 4, name: "soniya", email: "soniya@gmail.com", phone: "01788677565"},
    {id: 5, name: "shushmita", email: "shushmita@gmail.com", phone: "01788677565"},
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.Name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
})

//app.METHOD

app.post('/users', (req,res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

    //dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);

});


app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('fazli aam')
})




app.listen(port, () => {
    console.log('Listening to port', port)
})