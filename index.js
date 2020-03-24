const  express = require('express');

const app = express();

app.get('/' , (request, Response) > {


    return Response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Gustavo Xavier'  
})
}); 

app.listen(3333);
