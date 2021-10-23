const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;



const users = [
    {name: "shajjad hossan", age: "23", subject: "cse", id: 0, email:"shajjadhossan@gmail.com"},
    {name: "Rubble hossan", age: "33", subject: "cse", id: 1, email:"Rubblehossan@gmail.com"},
    {name: "Tuhin hossan", age: "22", subject: "cse", id: 2, email:"Tuhinhossan@gmail.com"},
    {name: "Alamin hossan", age: "16", subject: "eee", id: 3, email:"Alaminhossan@gmail.com"},
    {name: "Prottoy hossan", age: "25", subject: "cse", id: 4, email:"Prottoyhossan@gmail.com"},
    {name: "ShakibAl hossan", age: "20", subject: "cse", id: 5, email:"ShakibAlhossan@gmail.com"}
]
app.get('/', (req, res) =>{
    res.send('Hello from node , start node mession')
});

app.get('/users', (req, res) =>{
    res.send(users);
})
  
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    console.log(req.params.id)
    const user = users[id]
    res.send(user)
})

app.get(' ', (req,res) =>{
    res.send('this is md shajjad hossan');
})
app.get('/users', (req, res)=>{
    const search = (req.query.search);
    if(search){
        const searchRes = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchRes)
    }
    
  else{
      res.send(users)
  }
})

// app post method ...........
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)
})

app.listen(port, () =>{
    console.log('listening to port', port)
})