import express, { request, response } from 'express';

const app = express();

app.use(express.json());

const users = [
    'Daniel',
    'André',
    'Gabriel',
    'Rafael'
]

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const search = users[id]

    return response.json(search);
});

app.get('/users', (request, response) => {
    const query = String(request.query.search);

    const filteredUsers = query ? users.filter(user => user.includes(query)) : users;

    return response.json(filteredUsers);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user);
}); 

app.listen(3333); 