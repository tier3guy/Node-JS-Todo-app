const express = require('express');
var route =  express.Router();

const controller = require('../controller/controller');

route.post('/api/todos', controller.create);
route.get('/api/todos', controller.find);
route.put('/api/todos/:id', controller.update);
route.delete('/api/todos/:id', controller.delete);

module.exports = route;