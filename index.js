const  express = require('express');

const app = express();

app.use(express.json());
/** 
 * Rota /Recurso 
*/

/** 
 * Metodos HTTP
*/
/**
 *  Tipos de Parametros
 * 
 *  Query:
 */

app.post('/users/' , (Request, Response) => {
    const body = Request.body;

    Console.log(body);


    return Response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Gustavo Xavier'  
})
}); 

app.listen(3333);
