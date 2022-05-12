'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterVeterinariesExpertiseSchema extends Schema {
  up () {
    this.table('expertise', (table) => {
      // alter table
      table
          .integer('expertise_id')
          .unsigned()
          .references('id')
          .inTable('expertise')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
  }

  down () {
    this.table('expertise', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterVeterinariesExpertiseSchema
