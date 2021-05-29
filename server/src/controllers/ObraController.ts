import { json, Request, Response } from 'express';
import knex from './../database/connection';

class ObraController {
    async index(req: Request, res: Response) {
        const { id } = req.query;

        let obras;

        if(id) {
            obras = await knex('obra')
            .where('id', String(id))
            .distinct()
            .select('*');
        } else {
            obras = await knex('obra').select('*');
        }

        const serializedObras = obras.map(obra => {
            return {
                id:         obra.id,
                nome:       obra.nome,
                autor:      obra.autor,
                ano:        obra.ano,
                capitulos:  obra.capitulos,
                foto_url:   `http://192.168.1.2:8081/uploads/${obra.foto}`,
            }
        })

        return res.json(serializedObras);
    }

    async create(req: Request, res: Response) {
        const {
            nome,
            autor,
            ano,
            capitulos,
            foto,
        } = req.body;

        const trx = await knex.transaction();

        const insertedObra = {
            nome,
            autor,
            ano,
            capitulos,
            foto,
        }

        const obraId = await trx('obra').insert(insertedObra);

        await trx.commit();

        return res.json({
            id: obraId,
            ...insertedObra,
        });
    }

    async delete(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await knex('obra').del().where("id", id)
        .catch((err) => console.log(err))

        return res.json({
            "message": "Obra deletada!"
        })
    }
}

export default ObraController;