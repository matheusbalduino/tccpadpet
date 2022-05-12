'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table
          .integer('veterinary_id')
          .unsigned()
          .references('id')
          .inTable('veterinaries')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table
          .integer('tutor_id')
          .unsigned()
          .references('id')
          .inTable('tutors')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterUserSchema
