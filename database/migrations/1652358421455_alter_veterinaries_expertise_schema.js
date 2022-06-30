'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterVeterinariesExpertiseSchema extends Schema {
  up () {
    this.table('veterinaries', (table) => {
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
    this.table("veterinaries", (table) => {
      // reverse alternations
      this.dropForeign('expertise_id');
      this.dropColumn('expertise_id');
    });

  }
}

module.exports = AlterVeterinariesExpertiseSchema
