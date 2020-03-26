const express = require('express');

const routes = express.Router();

routes.post('/users' , (Request, Response) => {
    const body = Request.body;

    Console.log(body);


    return Response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Gustavo Xavier'  
});
}); 

module.exports=routes;
