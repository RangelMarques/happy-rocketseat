import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

 //Rota = conjuto
    //Recurso = usuário
    
    //Métodos HTTP = GET, POST, PUT, DELETE
    //Parâmetros

    //GET = Buscar uma informação (lista, item)
    //POST = Criando uma informação
    //PUT = Editando uma informação
    //DELETE = Deletando uma informação

    //Query Params: http://localhost:3333/users?search=rangel
    //Route Params: http://localhost:3333/users/1 (identicar um recurso)
    //Body: http://localhost:3333/users/1 (identicar um recurso)

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;
 //REQ  / RES
 // localhost:3333