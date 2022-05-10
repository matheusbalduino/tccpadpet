'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpertiseSchema extends Schema {
  up () {
    this.create('expertise', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table
          .integer('veterinary_id')
          .unsigned()
          .references('id')
          .inTable('veterinaries')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('expertise')
  }
}

module.exports = ExpertiseSchema
