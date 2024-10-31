const express = require('express');
const app = express();
const port = 3000;

const customer  = [ 
    {name: 'Harsh', age: 28},
    {name: 'Test', age: 22},
    {name: 'Sam', age: 25},
    {name: 'George', age: 20},
    
];

app.get('/', (request, response){
    if(!customers) response.status(404).send('No customer found');
    response.send(customers);
})


app.get('/customers/id',(request, response) => {
    console.log(request.params)
    response.send(request.params);
})

app.post()




app.listen(port, function(){
    console.log('Running or listening on port' + port)
})