import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('obra').insert([
        { 
            nome:       'Formação Rochosa', 
            autor:      'Ian Beckley', 
            ano:        '2019', 
            capitulos:  '0', 
            foto:       'obra_1.jpg'
        },
        { 
            nome:       'Silhueta no Calçadão', 
            autor:      'Roberto Nickson', 
            ano:        '2019', 
            capitulos:  '0', 
            foto:       'obra_2.jpg'
        },
    ])
}