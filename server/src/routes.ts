import express from 'express';
import knex from 'knex';
import ObraController from './controllers/ObraController';

const routes = express.Router();
const obraController = new ObraController();

routes.get('/', (req, res) => {
    return res.json({
        message: 'Teste'
    })
});

routes.get('/lista', obraController.index);
routes.post('/criar', obraController.create);
routes.delete('/deletar/:id', obraController.delete);

export default routes;