'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterPetDateSchema extends Schema {
  up () {
    this.table('pets', (table) => {
      // alter table
      table.timestamps()
    })
  }

  down () {
    this.table('pets', (table) => {
      // reverse alternations
      table.dropColumn('created_at');
      table.dropColumn('updated_at');

    })
  }
}

module.exports = AlterPetDateSchema
