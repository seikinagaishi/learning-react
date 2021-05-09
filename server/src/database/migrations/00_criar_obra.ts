import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('obra', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('autor').notNullable();
        table.integer('ano').notNullable();
        table.integer('capitulos');
        table.string('foto');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('obra');
}