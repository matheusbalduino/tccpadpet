'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VeterinaryExpertiseSchema extends Schema {
  up () {
    this.create('veterinary_expertises', (table) => {
      table.increments()
      table
          .integer('veterinary_id')
          .unsigned()
          .references('id')
          .inTable('veterinaries')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table
          .integer('expertise_id')
          .unsigned()
          .references('id')
          .inTable('expertise')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('veterinary_expertises')
  }
}

module.exports = VeterinaryExpertiseSchema
