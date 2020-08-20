const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
    /*const query = request.query;
    console.log(query);*/

    return response.json(projects);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    
    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);


    return response.json([
        'projeto4',
        'projeto2',
        'projeto3'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'projeto4',
        'projeto2'
    ]);
});

app.listen(3333, () => {
    console.log("Back-end started!\n" 
    + "Success ✔");
});
